import Elysia from 'elysia';
import cors from '@elysiajs/cors';
import { logger } from '@grotto/logysia';
import { countStudentsByCareerController, getAllCareersController, listStudentsByCareerWithFilterController } from './controllers';

async function main() {
    new Elysia()
        .use(cors())
        .use(logger({ logIP: true }))
        .get('/api/careers', getAllCareersController)
        .get('/api/careers/count/', countStudentsByCareerController)
        .get('/api/students/bycareer/', ({ query }) => listStudentsByCareerWithFilterController(query))
        .get('/api/', function* () {
            yield 'Hello'
            yield 'World'
        })
        .ws('/realtime', {
            message(ws, message) {
                ws.send('got:' + message)
            }
        })
        .listen(3000)
}

main();
