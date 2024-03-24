"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptUtils = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const cryptUtils = () => {
    const SALT_WORK_FACTOR = Number(process.env.SALT_WORK_FACTOR) || 10;
    const hash = async (password) => {
        return await bcrypt_1.default.hash(password, SALT_WORK_FACTOR);
    };
    const compare = async (password, hashedPassword) => {
        return await bcrypt_1.default.compare(password, hashedPassword);
    };
    return { hash, compare };
};
exports.cryptUtils = cryptUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFFckIsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFcEUsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtRQUN0QyxPQUFPLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsY0FBc0IsRUFBRSxFQUFFO1FBQ2pFLE9BQU8sTUFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFYVyxRQUFBLFVBQVUsY0FXckIifQ==