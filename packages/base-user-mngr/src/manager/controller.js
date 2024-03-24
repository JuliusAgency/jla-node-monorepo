"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthController = void 0;
const passport_1 = __importDefault(require("passport"));
const setupAuthController = (options, service) => {
    const login = (req, res, next) => {
        passport_1.default.authenticate('local-login', (error, user, info) => {
            if (error)
                return res.status(403).json(error);
            if (!user)
                return res.status(404).send(info);
            req.logIn(user, { session: options.session }, async (error) => {
                if (error)
                    return next(error);
                user.password = '[encoded password]';
                const { email } = req.body;
                let retData = {
                    email: email,
                    role: undefined,
                    user: undefined,
                };
                // for future authorization usage
                if (user.role) {
                    retData.role = user.role;
                }
                if (!options.session) {
                    retData = options.encode(retData);
                    // for front usage
                    retData.user = user;
                    return res.send(retData);
                }
                return res.send(user);
            });
        })(req, res, next);
    };
    const logout = (req, res) => {
        req.session.destroy((error) => {
            if (error) {
                return res.status(500).send({ message: error, success: false });
            }
            return res.status(200).send({ message: 'logged Out', success: true });
        });
    };
    const register = (req, res, next) => {
        passport_1.default.authenticate('local-register', (error, user, info) => {
            if (error) {
                return next(error);
            }
            if (!user) {
                return res.send(info);
            }
            user.password = '[encoded password]';
            return res.send(user);
        })(req, res, next);
    };
    const changePassword = async (req, res) => {
        const { email, password, passwordNew } = req.body;
        try {
            const emailParams = await service.changePassword(email, password, passwordNew);
            return res.status(200).send({ params: emailParams, success: true });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    const resetPasswordRequest = async (req, res) => {
        const { email } = req.body;
        try {
            const emailParams = await service.resetPasswordRequest(email);
            await sendEmail('resetPasswordRequest', emailParams);
            return res.status(200).send({ params: emailParams, success: true });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    const resetPassword = async (req, res) => {
        const { user, token, password } = req.body;
        try {
            const emailParams = await service.resetPassword(user, token, password);
            await sendEmail('resetPassword', emailParams);
            return res.status(200).send({ params: emailParams, success: true });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    const sendEmail = async (name, params) => {
        const { emailer } = options;
        if (emailer != undefined) {
            const emailOptions = emailer.buildEmail(name, params);
            await emailer.sendEmail(emailOptions);
        }
    };
    return {
        login,
        logout,
        register,
        changePassword,
        resetPasswordRequest,
        resetPassword,
    };
};
exports.setupAuthController = setupAuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsd0RBQWdDO0FBSXpCLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUF3QixFQUFFLE9BQVksRUFBRSxFQUFFO0lBQzVFLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7UUFDaEUsa0JBQVEsQ0FBQyxZQUFZLENBQ25CLGFBQWEsRUFDYixDQUFDLEtBQVksRUFBRSxJQUFTLEVBQUUsSUFBUyxFQUFPLEVBQUU7WUFDMUMsSUFBSSxLQUFLO2dCQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM1RCxJQUFJLEtBQUs7b0JBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3JDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRztvQkFDWixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQztnQkFDRixpQ0FBaUM7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNkLE9BQU8sQ0FB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