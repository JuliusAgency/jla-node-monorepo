"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
require("express-async-errors");
const AppError_1 = require("./AppError");
const errorHandler = (error, _request, response, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) => {
    const appErrorHandler = (error, response) => {
        console.log(`appErrorHandler ${error.name}, ${error.message}`);
        response.status(error.code).json({ message: error.message });
    };
    const internalErrorHandler = (error, response) => {
        console.log(`internalErrorHandler ${error.message}`);
        response
            .status(AppError_1.ResponseCode.INTERNAL_SERVER_ERROR)
            .send('Internal server error');
    };
    const criticalErrorHandler = (error) => {
        console.log(`criticalErrorHandler ${error.message}`);
        process.exit(1);
    };
    if (response) {
        if (error instanceof AppError_1.AppError) {
            appErrorHandler(error, response);
        }
        else {
            internalErrorHandler(error, response);
        }
    }
    else {
        criticalErrorHandler(error);
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXJyb3JIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdDQUE4QjtBQUc5Qix5Q0FBb0Q7QUFFN0MsTUFBTSxZQUFZLEdBQUcsQ0FDMUIsS0FBWSxFQUNaLFFBQWlCLEVBQ2pCLFFBQWtCO0FBQ2xCLDZEQUE2RDtBQUM3RCxLQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFlLEVBQUUsUUFBa0IsRUFBRSxFQUFFO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDL0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQztJQUVGLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxLQUFZLEVBQUUsUUFBa0IsRUFBRSxFQUFFO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELFFBQVE7YUFDTCxNQUFNLENBQUMsdUJBQVksQ0FBQyxxQkFBcUIsQ0FBQzthQUMxQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRixNQUFNLG9CQUFvQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFFRixJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2IsSUFBSSxLQUFLLFlBQVksbUJBQVEsRUFBRSxDQUFDO1lBQzlCLGVBQWUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQzthQUFNLENBQUM7WUFDTixvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7U0FBTSxDQUFDO1FBQ04sb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUMsQ0FBQztBQWpDVyxRQUFBLFlBQVksZ0JBaUN2QiJ9