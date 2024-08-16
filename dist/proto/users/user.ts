// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.11.4
// source: proto/users/user.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Struct } from "../../google/protobuf/struct";

export const protobufPackage = "user";

export interface ServiceResponse {
  statusCode: number;
  message: string;
  data: { [key: string]: any } | undefined;
}

export interface RegisterUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  password: string;
}

export interface RegisterUserResponse {
  data: ServiceResponse | undefined;
}

function createBaseServiceResponse(): ServiceResponse {
  return { statusCode: 0, message: "", data: undefined };
}

export const ServiceResponse = {
  encode(message: ServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.data !== undefined) {
      Struct.encode(Struct.wrap(message.data), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceResponse {
    return {
      statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      data: isObject(object.data) ? object.data : undefined,
    };
  },

  toJSON(message: ServiceResponse): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceResponse>, I>>(base?: I): ServiceResponse {
    return ServiceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServiceResponse>, I>>(object: I): ServiceResponse {
    const message = createBaseServiceResponse();
    message.statusCode = object.statusCode ?? 0;
    message.message = object.message ?? "";
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseRegisterUserRequest(): RegisterUserRequest {
  return { firstName: "", lastName: "", email: "", phone: "", role: "", password: "" };
}

export const RegisterUserRequest = {
  encode(message: RegisterUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(34).string(message.phone);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.role = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterUserRequest {
    return {
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      role: isSet(object.role) ? globalThis.String(object.role) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: RegisterUserRequest): unknown {
    const obj: any = {};
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterUserRequest>, I>>(base?: I): RegisterUserRequest {
    return RegisterUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterUserRequest>, I>>(object: I): RegisterUserRequest {
    const message = createBaseRegisterUserRequest();
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.role = object.role ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseRegisterUserResponse(): RegisterUserResponse {
  return { data: undefined };
}

export const RegisterUserResponse = {
  encode(message: RegisterUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      ServiceResponse.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = ServiceResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterUserResponse {
    return { data: isSet(object.data) ? ServiceResponse.fromJSON(object.data) : undefined };
  },

  toJSON(message: RegisterUserResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = ServiceResponse.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterUserResponse>, I>>(base?: I): RegisterUserResponse {
    return RegisterUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterUserResponse>, I>>(object: I): RegisterUserResponse {
    const message = createBaseRegisterUserResponse();
    message.data = (object.data !== undefined && object.data !== null)
      ? ServiceResponse.fromPartial(object.data)
      : undefined;
    return message;
  },
};

export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  registerCustomer: {
    path: "/user.UserService/RegisterCustomer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterUserRequest) => Buffer.from(RegisterUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterUserRequest.decode(value),
    responseSerialize: (value: ServiceResponse) => Buffer.from(ServiceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServiceResponse.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  registerCustomer: handleUnaryCall<RegisterUserRequest, ServiceResponse>;
}

export interface UserServiceClient extends Client {
  registerCustomer(
    request: RegisterUserRequest,
    callback: (error: ServiceError | null, response: ServiceResponse) => void,
  ): ClientUnaryCall;
  registerCustomer(
    request: RegisterUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ServiceResponse) => void,
  ): ClientUnaryCall;
  registerCustomer(
    request: RegisterUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ServiceResponse) => void,
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(UserServiceService, "user.UserService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
  service: typeof UserServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
