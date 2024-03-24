"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHttpLogger = void 0;
const morgan_1 = __importDefault(require("morgan"));
const initHttpLogger = (logger, formatter) => {
    // Override the stream method by telling
    // Morgan to use our custom logger instead of the console.log.
    const stream = {
        // Use the http severity
        write: (message) => logger.http(message),
    };
    // Build the morgan middleware
    return (0, morgan_1.default)(formatter.token, 
    // Options: overwrite the stream.
    { stream });
};
exports.initHttpLogger = initHttpLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1sb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBK0M7QUFPeEMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFjLEVBQUUsU0FBMEIsRUFBRSxFQUFFO0lBQzNFLHdDQUF3QztJQUN4Qyw4REFBOEQ7SUFDOUQsTUFBTSxNQUFNLEdBQWtCO1FBQzVCLHdCQUF3QjtRQUN4QixLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ2pELENBQUM7SUFFRiw4QkFBOEI7SUFDOUIsT0FBTyxJQUFBLGdCQUFNLEVBQ1gsU0FBUyxDQUFDLEtBQUs7SUFDZixpQ0FBaUM7SUFDakMsRUFBRSxNQUFNLEVBQUUsQ0FDWCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBZFcsUUFBQSxjQUFjLGtCQWN6QiJ9