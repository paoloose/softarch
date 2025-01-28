import Dockerode from 'dockerode';
import Elysia from 'elysia';
import cors from '@elysiajs/cors';
import { logger } from '@grotto/logysia';
import { countStudentsByCareerController, getAllCareersController, listStudentsByCareerWithFilterController } from './controllers';

const docker = new Dockerode({ socketPath: '/var/run/docker.sock' });

async function main() {
    // const containers = await docker.listContainers();

    // containers.forEach(async (container) => {
    //     const stats = await docker.getContainer(container.Id).stats({ stream: true });
    //     stats.on('data', (chunk) => {
    //         const data = JSON.parse(chunk.toString());
    //         console.log(data.cpu_stats);
    //     });
    // });

    // GRPC


    new Elysia()
        .use(cors())
        .use(logger({ logIP: true }))
        .get('/api/careers', getAllCareersController)
        .get('/api/careers/count/', countStudentsByCareerController)
        .get('/api/students/bycareer/', listStudentsByCareerWithFilterController)
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
