import { ModelType, rulesModel } from './model';
import { initRules } from './init-rules';
export { ModelType, rulesModel };
export declare const rulesRepository: (db: any, type: ModelType) => {
    getRules: () => Promise<any>;
};
export { initRules };
