/**
 * Load authorization rules from a definition,
 * when a rules management is not implemented.
 * Runs the initRules once only for each (ACl, RBAC) type.
 */
import { ModelType } from './model';
/**
 * Load a authorization definitions into a Db
 * @param type
 * @param data
 */
export declare const initRules: ({ sqlRepository }: {
    sqlRepository: any;
}, type: ModelType, data: unknown) => Promise<void>;
