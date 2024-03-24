export declare enum ResponseCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
export interface AppErrorArgs {
    name?: string;
    code: ResponseCode;
    description: string;
}
export declare class AppError extends Error {
  readonly name: string;
  readonly code: ResponseCode;
  constructor(args: AppErrorArgs);
}
