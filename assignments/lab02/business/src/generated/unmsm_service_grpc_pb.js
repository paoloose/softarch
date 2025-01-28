// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var unmsm_service_pb = require('./unmsm_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unmsm_service_CountStudentsByCareerResponse(arg) {
  if (!(arg instanceof unmsm_service_pb.CountStudentsByCareerResponse)) {
    throw new Error('Expected argument of type unmsm_service.CountStudentsByCareerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unmsm_service_CountStudentsByCareerResponse(buffer_arg) {
  return unmsm_service_pb.CountStudentsByCareerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unmsm_service_GetAllCareersResponse(arg) {
  if (!(arg instanceof unmsm_service_pb.GetAllCareersResponse)) {
    throw new Error('Expected argument of type unmsm_service.GetAllCareersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unmsm_service_GetAllCareersResponse(buffer_arg) {
  return unmsm_service_pb.GetAllCareersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unmsm_service_ListFilteredStudentsRequest(arg) {
  if (!(arg instanceof unmsm_service_pb.ListFilteredStudentsRequest)) {
    throw new Error('Expected argument of type unmsm_service.ListFilteredStudentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unmsm_service_ListFilteredStudentsRequest(buffer_arg) {
  return unmsm_service_pb.ListFilteredStudentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unmsm_service_ListFilteredStudentsResponse(arg) {
  if (!(arg instanceof unmsm_service_pb.ListFilteredStudentsResponse)) {
    throw new Error('Expected argument of type unmsm_service.ListFilteredStudentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unmsm_service_ListFilteredStudentsResponse(buffer_arg) {
  return unmsm_service_pb.ListFilteredStudentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unmsm_service_ListStudentsByCareerRequest(arg) {
  if (!(arg instanceof unmsm_service_pb.ListStudentsByCareerRequest)) {
    throw new Error('Expected argument of type unmsm_service.ListStudentsByCareerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unmsm_service_ListStudentsByCareerRequest(buffer_arg) {
  return unmsm_service_pb.ListStudentsByCareerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_unmsm_service_ListStudentsByCareerResponse(arg) {
  if (!(arg instanceof unmsm_service_pb.ListStudentsByCareerResponse)) {
    throw new Error('Expected argument of type unmsm_service.ListStudentsByCareerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_unmsm_service_ListStudentsByCareerResponse(buffer_arg) {
  return unmsm_service_pb.ListStudentsByCareerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StudentsService = exports.StudentsService = {
  getAllCareers: {
    path: '/unmsm_service.Students/GetAllCareers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: unmsm_service_pb.GetAllCareersResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_unmsm_service_GetAllCareersResponse,
    responseDeserialize: deserialize_unmsm_service_GetAllCareersResponse,
  },
  countStudentsByCareer: {
    path: '/unmsm_service.Students/CountStudentsByCareer',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: unmsm_service_pb.CountStudentsByCareerResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_unmsm_service_CountStudentsByCareerResponse,
    responseDeserialize: deserialize_unmsm_service_CountStudentsByCareerResponse,
  },
  // i. Listar los alumnos por cada Carrera Profesional (por id)
listStudentsByCareer: {
    path: '/unmsm_service.Students/ListStudentsByCareer',
    requestStream: false,
    responseStream: false,
    requestType: unmsm_service_pb.ListStudentsByCareerRequest,
    responseType: unmsm_service_pb.ListStudentsByCareerResponse,
    requestSerialize: serialize_unmsm_service_ListStudentsByCareerRequest,
    requestDeserialize: deserialize_unmsm_service_ListStudentsByCareerRequest,
    responseSerialize: serialize_unmsm_service_ListStudentsByCareerResponse,
    responseDeserialize: deserialize_unmsm_service_ListStudentsByCareerResponse,
  },
  // ii. Listar alumnos por carrera profesional con filtros específicos
listFilteredStudents: {
    path: '/unmsm_service.Students/ListFilteredStudents',
    requestStream: false,
    responseStream: false,
    requestType: unmsm_service_pb.ListFilteredStudentsRequest,
    responseType: unmsm_service_pb.ListFilteredStudentsResponse,
    requestSerialize: serialize_unmsm_service_ListFilteredStudentsRequest,
    requestDeserialize: deserialize_unmsm_service_ListFilteredStudentsRequest,
    responseSerialize: serialize_unmsm_service_ListFilteredStudentsResponse,
    responseDeserialize: deserialize_unmsm_service_ListFilteredStudentsResponse,
  },
};

exports.StudentsClient = grpc.makeGenericClientConstructor(StudentsService);
