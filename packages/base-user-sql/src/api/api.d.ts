/**
 *
 * @param Entity Wrapper for native Db API
 * @returns
 */
export declare const dBApi: (Entity: any) => {
    findById: (options: any) => Promise<any>;
    findOne: (options: any) => Promise<any>;
    findOneAndUpdate: (filter: any, update: any) => Promise<void>;
    deleteOne: (row: any) => Promise<any>;
    save: (userObj: any) => Promise<any>;
    getPrimaryKeyName: () => any;
};
