"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.ResponseCode = void 0;
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["OK"] = 200] = "OK";
    ResponseCode[ResponseCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    ResponseCode[ResponseCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ResponseCode[ResponseCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ResponseCode[ResponseCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseCode[ResponseCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(ResponseCode || (exports.ResponseCode = ResponseCode = {}));
class AppError extends Error {
    constructor(args) {
        super(args.description);
        // because we are extending a built-in class.
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = args.name || 'Error';
        this.code = args.code;
        Error.captureStackTrace(this);
    }
}
exports.AppError = AppError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHBFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLFlBT1g7QUFQRCxXQUFZLFlBQVk7SUFDdEIsNkNBQVEsQ0FBQTtJQUNSLDZEQUFnQixDQUFBO0lBQ2hCLCtEQUFpQixDQUFBO0lBQ2pCLGlFQUFrQixDQUFBO0lBQ2xCLDJEQUFlLENBQUE7SUFDZixtRkFBMkIsQ0FBQTtBQUM3QixDQUFDLEVBUFcsWUFBWSw0QkFBWixZQUFZLFFBT3ZCO0FBUUQsTUFBYSxRQUFTLFNBQVEsS0FBSztJQUlqQyxZQUFZLElBQWtCO1FBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEIsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdEIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQWRELDRCQWNDIn0=