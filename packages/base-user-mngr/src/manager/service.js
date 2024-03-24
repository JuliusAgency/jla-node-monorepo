"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthService = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
const utils_1 = require("./utils");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setupAuthService = (options) => {
    const { User, Token } = options;
    const crypt = (0, utils_1.cryptUtils)();
    const changePassword = async (email, password, passwordNew) => {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user)
            throw new Error("the user doesn't exists!");
        // Check credentials
        if (!(await crypt.compare(password, user.password))) {
            throw new Error('Something wrong with credentials');
        }
        // Change password
        const hash = await crypt.hash(passwordNew);
        await User.findOneAndUpdate({ email }, { password: hash }, { new: true });
        const changeParams = {
            email: user.email,
            name: user.name,
        };
        return changeParams;
    };
    const resetPasswordRequest = async (email) => {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user)
            throw new Error("the user doesn't exists");
        const pkn = User.getPrimaryKeyName();
        const resetToken = await createAndStoreResetPasswordToken(user[pkn]);
        const resetRequestParams = {
            name: String(user === null || user === void 0 ? void 0 : user.name),
            email: String(user === null || user === void 0 ? void 0 : user.email),
            token: resetToken,
            id: user[pkn],
        };
        return resetRequestParams;
    };
    const createAndStoreResetPasswordToken = async (id) => {
        // create new reset token
        const token = await Token.findOne({ user: id });
        if (token)
            await Token.deleteOne(token);
        const resetPasswordToken = node_crypto_1.default.randomBytes(32).toString('hex');
        const hash = await crypt.hash(resetPasswordToken);
        // save the token
        await Token.save({
            user: id,
            token: hash,
            // expiresSec: 300,
            createdAt: new Date(),
        });
        return resetPasswordToken;
    };
    const resetPassword = async (id, token, password) => {
        const passwordResetToken = await validateResetToken(id, token);
        const hash = await crypt.hash(password);
        const pkn = User.getPrimaryKeyName();
        await User.findOneAndUpdate({ [pkn]: id }, { password: hash }, { new: true });
        await Token.deleteOne(passwordResetToken);
        const user = await User.findById({ [pkn]: id });
        const resetParams = {
            email: String(user === null || user === void 0 ? void 0 : user.email),
            name: String(user === null || user === void 0 ? void 0 : user.name),
        };
        return resetParams;
    };
    const validateResetToken = async (id, token) => {
        const passwordResetToken = await Token.findOne({ user: id });
        if (!passwordResetToken) {
            throw new Error('Invalid or expired password reset token');
        }
        const isValid = await crypt.compare(token, passwordResetToken.token);
        if (!isValid) {
            throw new Error('Invalid or expired password reset token');
        }
        const dateNow = Date.now();
        const tokenDate = passwordResetToken.createdAt.getTime();
        const expired = dateNow - tokenDate > passwordResetToken.expiresSec * 1000;
        if (expired) {
            throw new Error('Invalid or expired password reset token');
        }
        return passwordResetToken;
    };
    return {
        changePassword,
        resetPasswordRequest,
        resetPassword,
    };
};
exports.setupAuthService = setupAuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQWlDO0FBQ2pDLG1DQUFxQztBQUdyQyw4REFBOEQ7QUFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFBLGtCQUFVLEdBQUUsQ0FBQztJQUUzQixNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQzFCLEtBQWEsRUFDYixRQUFnQixFQUNoQixXQUFtQixFQUNuQixFQUFFO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFdkQsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELGtCQUFrQjtRQUNsQixNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLE1BQU0sWUFBWSxHQUFHO1lBQ25CLEtBQUssRUFBRSxJQUFJLENB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