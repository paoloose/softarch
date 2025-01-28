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
        .onError(({ code, error, set, path }) => {
            if (code === 'NOT_FOUND') {
                set.status = 404;
                console.log(`Path ${path} not found: ${error.message}`);
            }
        })
        .listen(3000)
}

main();
