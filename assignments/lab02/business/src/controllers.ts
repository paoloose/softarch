import type { Career, Student } from './generated/unmsm_service_pb';
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

export async function listStudentsByCareerWithFilterController(queryParams: Record<string, string | undefined>) {
    const req = new ListFilteredStudentsRequest();

    console.log(queryParams)

    req.setExcludeFavColor(queryParams['exclude_fav_color'] ?? 'Rojo');
    req.setStartDate(queryParams['start_date'] ?? '2021-01-01');
    req.setMinAge(queryParams['min_age'] ? Number(queryParams['min_age']) : 18);
    req.setMaxAge(queryParams['max_age'] ? Number(queryParams['max_age']) : 25);

    const byCareerMap: Record<number, Array<Student.AsObject>> = {};

    const response = await listFilteredStudents(req);
    const allStudents = response.getStudentsList().map((student) => student.toObject());

    for (const student of allStudents) {
        if (!byCareerMap[student.careerId]) {
            byCareerMap[student.careerId] = [];
        }
        byCareerMap[student.careerId].push(student);
    }

    return byCareerMap;
}
