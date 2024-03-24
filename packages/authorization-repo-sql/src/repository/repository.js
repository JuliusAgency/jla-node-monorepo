"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRules = exports.rulesRepository = exports.rulesModel = exports.ModelType = void 0;
const model_1 = require("./model");
Object.defineProperty(exports, "ModelType", { enumerable: true, get: function () { return model_1.ModelType; } });
Object.defineProperty(exports, "rulesModel", { enumerable: true, get: function () { return model_1.rulesModel; } });
const rules_data_source_1 = require("./rules-data-source");
const init_rules_1 = require("./init-rules");
Object.defineProperty(exports, "initRules", { enumerable: true, get: function () { return init_rules_1.initRules; } });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rulesRepository = (db, type) => {
    return (0, rules_data_source_1.rulesDataSource)(db, type);
};
exports.rulesRepository = rulesRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWdEO0FBSXZDLDBGQUpBLGlCQUFTLE9BSUE7QUFBRSwyRkFKQSxrQkFBVSxPQUlBO0FBSDlCLDJEQUFzRDtBQUN0RCw2Q0FBeUM7QUFPaEMsMEZBUEEsc0JBQVMsT0FPQTtBQUpsQiw4REFBOEQ7QUFDdkQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFPLEVBQUUsSUFBZSxFQUFFLEVBQUU7SUFDMUQsT0FBTyxJQUFBLG1DQUFlLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUZXLFFBQUEsZUFBZSxtQkFFMUIifQ==