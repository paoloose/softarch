import type { Career } from './generated/unmsm_service_pb';
import { countStudentsByCareer, getAllCareers, listFilteredStudents, ListFilteredStudentsRequest } from './grpc_client';

export async function getAllCareersController() {
    const response = await getAllCareers();
    return response.getCareersList().map((career) => career.toObject());
}

export async function countStudentsByCareerController() {
    let allCareersResponse = await getAllCareers();
    let allCareers = allCareersResponse.getCareersList().map((career) => career.toObject());

    const studentsByCareer = (await countStudentsByCareer()).getCareerStudentCountMap().toObject();

    const response: Array<{ career: Career.AsObject, count: number }> = [];

    for (const count of studentsByCareer) {
        const career = allCareers.find((career) => career.id === count[0])!;
        response.push({ career: career, count: count[1] });
    }

    return response;
}

export async function listStudentsByCareerWithFilterController() {
    const req = new ListFilteredStudentsRequest();
    req.setExcludeFavColor('Rojo');
    req.setStartDate('2021-01-01');
    req.setMinAge(18);
    req.setMaxAge(25);

    const response = await listFilteredStudents(req);
    return response.getStudentsList().map((student) => student.toObject());
}
