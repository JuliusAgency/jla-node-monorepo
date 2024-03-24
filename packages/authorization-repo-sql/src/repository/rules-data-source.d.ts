import { ModelType, rulesModel } from './model';
export { rulesModel };
export declare const rulesDataSource: (db: any, type: ModelType) => {
    getRules: () => Promise<any>;
};
