/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from 'mongoose';
export declare const BaseUser: import("mongoose").Model<{
    email: string;
    password: string;
    createdAt: Date;
    name?: string | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    email: string;
    password: string;
    createdAt: Date;
    name?: string | null | undefined;
}> & {
    email: string;
    password: string;
    createdAt: Date;
    name?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    discriminatorKey: string;
    collection: string;
}, {
    email: string;
    password: string;
    createdAt: Date;
    name?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    email: string;
    password: string;
    createdAt: Date;
    name?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    email: string;
    password: string;
    createdAt: Date;
    name?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
//# sourceMappingURL=base-user.d.ts.map