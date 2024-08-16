import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "user";
export interface ServiceResponse {
    statusCode: number;
    message: string;
    data: {
        [key: string]: any;
    } | undefined;
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
export declare const ServiceResponse: {
    encode(message: ServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceResponse;
    fromJSON(object: any): ServiceResponse;
    toJSON(message: ServiceResponse): unknown;
    create<I extends Exact<DeepPartial<ServiceResponse>, I>>(base?: I): ServiceResponse;
    fromPartial<I extends Exact<DeepPartial<ServiceResponse>, I>>(object: I): ServiceResponse;
};
export declare const RegisterUserRequest: {
    encode(message: RegisterUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterUserRequest;
    fromJSON(object: any): RegisterUserRequest;
    toJSON(message: RegisterUserRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterUserRequest>, I>>(base?: I): RegisterUserRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterUserRequest>, I>>(object: I): RegisterUserRequest;
};
export declare const RegisterUserResponse: {
    encode(message: RegisterUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterUserResponse;
    fromJSON(object: any): RegisterUserResponse;
    toJSON(message: RegisterUserResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterUserResponse>, I>>(base?: I): RegisterUserResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterUserResponse>, I>>(object: I): RegisterUserResponse;
};
export type UserServiceService = typeof UserServiceService;
export declare const UserServiceService: {
    readonly registerCustomer: {
        readonly path: "/user.UserService/RegisterCustomer";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RegisterUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RegisterUserRequest;
        readonly responseSerialize: (value: ServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceResponse;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    registerCustomer: handleUnaryCall<RegisterUserRequest, ServiceResponse>;
}
export interface UserServiceClient extends Client {
    registerCustomer(request: RegisterUserRequest, callback: (error: ServiceError | null, response: ServiceResponse) => void): ClientUnaryCall;
    registerCustomer(request: RegisterUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ServiceResponse) => void): ClientUnaryCall;
    registerCustomer(request: RegisterUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ServiceResponse) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
    service: typeof UserServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
