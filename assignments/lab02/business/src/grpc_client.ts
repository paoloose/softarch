import grpc from '@grpc/grpc-js';

import { StudentsClient } from './generated/unmsm_service_grpc_pb';
import {
    ListFilteredStudentsRequest,
    ListStudentsByCareerRequest,
    ListFilteredStudentsResponse,
    ListStudentsByCareerResponse,
    GetAllCareersResponse,
    CountStudentsByCareerResponse,
} from './generated/unmsm_service_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';


const client = new StudentsClient('services:50051', grpc.credentials.createInsecure());

client.waitForReady(100000, (error) => {
    if (error) {
        console.error('Failed to connect to gRPC service at port 50051');
        console.error(`${error.message} ${error.cause}\n${error.stack}`);
    } else {
        console.log('Connected to gRPC service at port 50051');
    }
});

// Use case 1
// i. Listar número de alumnos por cada Carrera Profesional
function countStudentsByCareer() {
    return new Promise<CountStudentsByCareerResponse>((resolve, reject) => {
        client.countStudentsByCareer(new Empty(), (error, response) => {
            if (error !== null) {
                reject(error);
            }
            resolve(response);
        });
    });

}

function getAllCareers() {
    return new Promise<GetAllCareersResponse>((resolve, reject) => {
        client.getAllCareers(new Empty(), (error, response) => {
            if (error !== null) {
                reject(error);
            }
            resolve(response);
        });
    });
}

function listFilteredStudents(req: ListFilteredStudentsRequest) {
    return new Promise<ListFilteredStudentsResponse>((resolve, reject) => {
        client.listFilteredStudents(req, (error, response) => {
            if (error !== null) {
                reject(error);
            }
            resolve(response);
        });
    });
}

function listStudentsByCareer(req: ListStudentsByCareerRequest) {
    return new Promise<ListStudentsByCareerResponse>((resolve, reject) => {
        client.listStudentsByCareer(req, (error, response) => {
            if (error !== null) {
                reject(error);
            }
            resolve(response);
        });
    });
}

export {
    listFilteredStudents,
    listStudentsByCareer,
    getAllCareers,
    countStudentsByCareer,
    GetAllCareersResponse,
    ListFilteredStudentsRequest,
    ListStudentsByCareerRequest,
    ListFilteredStudentsResponse,
    ListStudentsByCareerResponse,
};
