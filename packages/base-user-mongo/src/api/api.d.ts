/**
 *
 * @param Model Wrapper for native Db API
 * @returns
 */
export declare const dBApi: (Model: any) => {
    findById: (options: any) => Promise<any>;
    findOne: (options: any) => Promise<any>;
    findOneAndUpdate: (filter: any, update: any, flags: any) => Promise<any>;
    deleteOne: (row: any) => Promise<void>;
    save: (userObj: any) => Promise<any>;
    getPrimaryKeyName: () => string;
};
//# sourceMappingURL=api.d.ts.map