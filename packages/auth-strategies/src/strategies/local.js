"use strict";
/***
 * Define passport local strategy
 *
 * To authenticate, Passport first looks at the user's login details,
 *  then invokes a verified callback (done).
 * If the user gets properly authenticated, pass the user into the callback.
 * If the user does not get appropriately authenticated, pass false into the callback.
 * You also have the option to pass a specific message into the callback.
 *
 * When you use sessions with Passport, as soon as a user gets appropriately authenticated,
 *  a new session begins.
 * When this transpires, we serialize the user data to the session
 *  and the user ID is stored in req.session.passport.user.
 * To access the user data it is deserialized, using the user ID as its key.
 * The user data is queried and attached to req.user
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const utils_1 = require("../utils");
class LocalStrategy {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static init(api) {
        const crypt = (0, utils_1.cryptUtils)();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const register = async (req, email, password, done) => {
            try {
                if (!email)
                    done(null, false);
                const user = await api.findOne({ email: email.toLowerCase() });
                if (user) {
                    done(null, false, { message: 'User already exist' });
                }
                else {
                    const newUser = req.body;
                    newUser.password = await crypt.hash(password);
                    newUser.createdAt = new Date();
                    try {
                        const user = await api.save(newUser);
                        done(null, user);
                    }
                    catch (e) {
                        done(e);
                    }
                }
            }
            catch (e) {
                done(e);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const login = async (email, password, done) => {
            try {
                if (!email) {
                    done(null, false);
                }
                const user = await api.findOne({ email: email.toLowerCase() });
                if (!user) {
                    return done(null, false, { message: 'User not found.' });
                }
                if (user && user.email != email) {
                    done(null, false, { message: 'User or password incorrect' });
                }
                if (!(await crypt.compare(password, user.password))) {
                    done(null, false, { message: 'User or password incorrect' });
                }
                else {
                    done(null, user);
                }
            }
            catch (e) {
                done(e);
            }
        };
        // configure the register strategy.
        passport_1.default.use('local-register', new passport_local_1.Strategy({
            // by default, local strategy uses username and password,
            // we will override with email
            usernameField: 'email',
            passwordField: 'password',
            // allows to pass the entire request to the callback
            passReqToCallback: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, register));
        // configure the login strategy.
        passport_1.default.use('local-login', new passport_local_1.Strategy({
            usernameField: 'email',
            passwordField: 'password',
        }, login));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
}
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHOzs7Ozs7QUFHSCx3REFBZ0M7QUFDaEMsbURBQTBDO0FBQzFDLG9DQUFzQztBQUV0QyxNQUFNLGFBQWE7SUFDakIsOERBQThEO0lBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBUTtRQUN6QixNQUFNLEtBQUssR0FBRyxJQUFBLGtCQUFVLEdBQUUsQ0FBQztRQUMzQiw4REFBOEQ7UUFDOUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNsRixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEtBQUs7b0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDO3dCQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztvQkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVixDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsOERBQThEO1FBQzlELE1BQU0sS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNYLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDVixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFDRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNwRCxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLG1DQUFtQztRQUNuQyxrQkFBUSxDQUFDLEdBQUcsQ0FDVixnQkFBZ0IsRUFDaEIsSUFBSSx5QkFBUSxDQUNWO1lBQ0UseURBQXlEO1lBQ3pELDhCQUE4QjtZQUM5QixhQUFhLEVBQUUsT0FBTztZQUN0QixhQUFhLEVBQUUsVUFBVTtZQUN6QixvREFBb0Q7WUFDcEQsaUJBQWlCLEVBQUUsSUFBSTtZQUN2Qiw4REFBOEQ7U0FDL0QsRUFDRCxRQUFRLENBQ1QsQ0FDRixDQUFDO1FBRUYsZ0NBQWdDO1FBQ2hDLGtCQUFRLENBQUMsR0FBRyxDQUNWLGFBQWEsRUFDYixJQUFJLHlCQUFRLENBQ1Y7WUFDRSxhQUFhLEVBQUUsT0FBTztZQUN0QixhQUFhLEVBQUUsVUFBVTtTQUMxQixFQUNELEtBQUssQ0FDTixDQUNGLENBQUM7UUFDRiw4REFBOEQ7SUFDaEUsQ0FBQztDQUNGO0FBRVEsc0NBQWEifQ==