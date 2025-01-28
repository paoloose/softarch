// package: unmsm_service
// file: unmsm_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as unmsm_service_pb from "./unmsm_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IStudentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllCareers: IStudentsService_IGetAllCareers;
    countStudentsByCareer: IStudentsService_ICountStudentsByCareer;
    listStudentsByCareer: IStudentsService_IListStudentsByCareer;
    listFilteredStudents: IStudentsService_IListFilteredStudents;
}

interface IStudentsService_IGetAllCareers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, unmsm_service_pb.GetAllCareersResponse> {
    path: "/unmsm_service.Students/GetAllCareers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<unmsm_service_pb.GetAllCareersResponse>;
    responseDeserialize: grpc.deserialize<unmsm_service_pb.GetAllCareersResponse>;
}
interface IStudentsService_ICountStudentsByCareer extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, unmsm_service_pb.CountStudentsByCareerResponse> {
    path: "/unmsm_service.Students/CountStudentsByCareer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<unmsm_service_pb.CountStudentsByCareerResponse>;
    responseDeserialize: grpc.deserialize<unmsm_service_pb.CountStudentsByCareerResponse>;
}
interface IStudentsService_IListStudentsByCareer extends grpc.MethodDefinition<unmsm_service_pb.ListStudentsByCareerRequest, unmsm_service_pb.ListStudentsByCareerResponse> {
    path: "/unmsm_service.Students/ListStudentsByCareer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<unmsm_service_pb.ListStudentsByCareerRequest>;
    requestDeserialize: grpc.deserialize<unmsm_service_pb.ListStudentsByCareerRequest>;
    responseSerialize: grpc.serialize<unmsm_service_pb.ListStudentsByCareerResponse>;
    responseDeserialize: grpc.deserialize<unmsm_service_pb.ListStudentsByCareerResponse>;
}
interface IStudentsService_IListFilteredStudents extends grpc.MethodDefinition<unmsm_service_pb.ListFilteredStudentsRequest, unmsm_service_pb.ListFilteredStudentsResponse> {
    path: "/unmsm_service.Students/ListFilteredStudents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<unmsm_service_pb.ListFilteredStudentsRequest>;
    requestDeserialize: grpc.deserialize<unmsm_service_pb.ListFilteredStudentsRequest>;
    responseSerialize: grpc.serialize<unmsm_service_pb.ListFilteredStudentsResponse>;
    responseDeserialize: grpc.deserialize<unmsm_service_pb.ListFilteredStudentsResponse>;
}

export const StudentsService: IStudentsService;

export interface IStudentsServer extends grpc.UntypedServiceImplementation {
    getAllCareers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, unmsm_service_pb.GetAllCareersResponse>;
    countStudentsByCareer: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, unmsm_service_pb.CountStudentsByCareerResponse>;
    listStudentsByCareer: grpc.handleUnaryCall<unmsm_service_pb.ListStudentsByCareerRequest, unmsm_service_pb.ListStudentsByCareerResponse>;
    listFilteredStudents: grpc.handleUnaryCall<unmsm_service_pb.ListFilteredStudentsRequest, unmsm_service_pb.ListFilteredStudentsResponse>;
}

export interface IStudentsClient {
    getAllCareers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.GetAllCareersResponse) => void): grpc.ClientUnaryCall;
    getAllCareers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.GetAllCareersResponse) => void): grpc.ClientUnaryCall;
    getAllCareers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.GetAllCareersResponse) => void): grpc.ClientUnaryCall;
    countStudentsByCareer(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.CountStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    countStudentsByCareer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.CountStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    countStudentsByCareer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.CountStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    listStudentsByCareer(request: unmsm_service_pb.ListStudentsByCareerRequest, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    listStudentsByCareer(request: unmsm_service_pb.ListStudentsByCareerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    listStudentsByCareer(request: unmsm_service_pb.ListStudentsByCareerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    listFilteredStudents(request: unmsm_service_pb.ListFilteredStudentsRequest, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListFilteredStudentsResponse) => void): grpc.ClientUnaryCall;
    listFilteredStudents(request: unmsm_service_pb.ListFilteredStudentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListFilteredStudentsResponse) => void): grpc.ClientUnaryCall;
    listFilteredStudents(request: unmsm_service_pb.ListFilteredStudentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListFilteredStudentsResponse) => void): grpc.ClientUnaryCall;
}

export class StudentsClient extends grpc.Client implements IStudentsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getAllCareers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.GetAllCareersResponse) => void): grpc.ClientUnaryCall;
    public getAllCareers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.GetAllCareersResponse) => void): grpc.ClientUnaryCall;
    public getAllCareers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.GetAllCareersResponse) => void): grpc.ClientUnaryCall;
    public countStudentsByCareer(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.CountStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    public countStudentsByCareer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.CountStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    public countStudentsByCareer(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.CountStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    public listStudentsByCareer(request: unmsm_service_pb.ListStudentsByCareerRequest, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    public listStudentsByCareer(request: unmsm_service_pb.ListStudentsByCareerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    public listStudentsByCareer(request: unmsm_service_pb.ListStudentsByCareerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListStudentsByCareerResponse) => void): grpc.ClientUnaryCall;
    public listFilteredStudents(request: unmsm_service_pb.ListFilteredStudentsRequest, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListFilteredStudentsResponse) => void): grpc.ClientUnaryCall;
    public listFilteredStudents(request: unmsm_service_pb.ListFilteredStudentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListFilteredStudentsResponse) => void): grpc.ClientUnaryCall;
    public listFilteredStudents(request: unmsm_service_pb.ListFilteredStudentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: unmsm_service_pb.ListFilteredStudentsResponse) => void): grpc.ClientUnaryCall;
}
