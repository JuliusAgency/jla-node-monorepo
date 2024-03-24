"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStrategies = void 0;
const local_1 = require("./local");
const initStrategies = (options) => {
    const { dBApi } = options;
    local_1.LocalStrategy.init(dBApi);
    return local_1.LocalStrategy;
};
exports.initStrategies = initStrategies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBd0M7QUFPakMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUF3QixFQUFFLEVBQUU7SUFDekQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUMxQixxQkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixPQUFPLHFCQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBSlcsUUFBQSxjQUFjLGtCQUl6QiJ9