// package: unmsm_service
// file: unmsm_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ListStudentsByCareerRequest extends jspb.Message { 
    getCareerId(): number;
    setCareerId(value: number): ListStudentsByCareerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStudentsByCareerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStudentsByCareerRequest): ListStudentsByCareerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStudentsByCareerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStudentsByCareerRequest;
    static deserializeBinaryFromReader(message: ListStudentsByCareerRequest, reader: jspb.BinaryReader): ListStudentsByCareerRequest;
}

export namespace ListStudentsByCareerRequest {
    export type AsObject = {
        careerId: number,
    }
}

export class ListStudentsByCareerResponse extends jspb.Message { 
    clearStudentsList(): void;
    getStudentsList(): Array<Student>;
    setStudentsList(value: Array<Student>): ListStudentsByCareerResponse;
    addStudents(value?: Student, index?: number): Student;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStudentsByCareerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStudentsByCareerResponse): ListStudentsByCareerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStudentsByCareerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStudentsByCareerResponse;
    static deserializeBinaryFromReader(message: ListStudentsByCareerResponse, reader: jspb.BinaryReader): ListStudentsByCareerResponse;
}

export namespace ListStudentsByCareerResponse {
    export type AsObject = {
        studentsList: Array<Student.AsObject>,
    }
}

export class ListFilteredStudentsRequest extends jspb.Message { 
    getExcludeFavColor(): string;
    setExcludeFavColor(value: string): ListFilteredStudentsRequest;
    getStartDate(): string;
    setStartDate(value: string): ListFilteredStudentsRequest;
    getMinAge(): number;
    setMinAge(value: number): ListFilteredStudentsRequest;
    getMaxAge(): number;
    setMaxAge(value: number): ListFilteredStudentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilteredStudentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilteredStudentsRequest): ListFilteredStudentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilteredStudentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilteredStudentsRequest;
    static deserializeBinaryFromReader(message: ListFilteredStudentsRequest, reader: jspb.BinaryReader): ListFilteredStudentsRequest;
}

export namespace ListFilteredStudentsRequest {
    export type AsObject = {
        excludeFavColor: string,
        startDate: string,
        minAge: number,
        maxAge: number,
    }
}

export class ListFilteredStudentsResponse extends jspb.Message { 
    clearStudentsList(): void;
    getStudentsList(): Array<Student>;
    setStudentsList(value: Array<Student>): ListFilteredStudentsResponse;
    addStudents(value?: Student, index?: number): Student;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilteredStudentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilteredStudentsResponse): ListFilteredStudentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilteredStudentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilteredStudentsResponse;
    static deserializeBinaryFromReader(message: ListFilteredStudentsResponse, reader: jspb.BinaryReader): ListFilteredStudentsResponse;
}

export namespace ListFilteredStudentsResponse {
    export type AsObject = {
        studentsList: Array<Student.AsObject>,
    }
}

export class GetAllCareersResponse extends jspb.Message { 
    clearCareersList(): void;
    getCareersList(): Array<Career>;
    setCareersList(value: Array<Career>): GetAllCareersResponse;
    addCareers(value?: Career, index?: number): Career;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllCareersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllCareersResponse): GetAllCareersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllCareersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllCareersResponse;
    static deserializeBinaryFromReader(message: GetAllCareersResponse, reader: jspb.BinaryReader): GetAllCareersResponse;
}

export namespace GetAllCareersResponse {
    export type AsObject = {
        careersList: Array<Career.AsObject>,
    }
}

export class CountStudentsByCareerResponse extends jspb.Message { 

    getCareerStudentCountMap(): jspb.Map<number, number>;
    clearCareerStudentCountMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountStudentsByCareerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CountStudentsByCareerResponse): CountStudentsByCareerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountStudentsByCareerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountStudentsByCareerResponse;
    static deserializeBinaryFromReader(message: CountStudentsByCareerResponse, reader: jspb.BinaryReader): CountStudentsByCareerResponse;
}

export namespace CountStudentsByCareerResponse {
    export type AsObject = {

        careerStudentCountMap: Array<[number, number]>,
    }
}

export class Student extends jspb.Message { 
    getStudentCode(): string;
    setStudentCode(value: string): Student;
    getSurname(): string;
    setSurname(value: string): Student;
    getName(): string;
    setName(value: string): Student;
    getAge(): number;
    setAge(value: number): Student;
    getGender(): string;
    setGender(value: string): Student;
    getWeight(): number;
    setWeight(value: number): Student;
    getHeight(): number;
    setHeight(value: number): Student;
    getFavoriteColor(): string;
    setFavoriteColor(value: string): Student;
    getProvince(): string;
    setProvince(value: string): Student;
    getCareerId(): number;
    setCareerId(value: number): Student;
    getEnrollDate(): string;
    setEnrollDate(value: string): Student;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Student.AsObject;
    static toObject(includeInstance: boolean, msg: Student): Student.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Student, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Student;
    static deserializeBinaryFromReader(message: Student, reader: jspb.BinaryReader): Student;
}

export namespace Student {
    export type AsObject = {
        studentCode: string,
        surname: string,
        name: string,
        age: number,
        gender: string,
        weight: number,
        height: number,
        favoriteColor: string,
        province: string,
        careerId: number,
        enrollDate: string,
    }
}

export class Career extends jspb.Message { 
    getId(): number;
    setId(value: number): Career;
    getName(): string;
    setName(value: string): Career;
    getCreationDate(): string;
    setCreationDate(value: string): Career;
    getObservations(): string;
    setObservations(value: string): Career;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Career.AsObject;
    static toObject(includeInstance: boolean, msg: Career): Career.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Career, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Career;
    static deserializeBinaryFromReader(message: Career, reader: jspb.BinaryReader): Career;
}

export namespace Career {
    export type AsObject = {
        id: number,
        name: string,
        creationDate: string,
        observations: string,
    }
}
