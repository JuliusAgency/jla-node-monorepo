"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPassport = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const passport_1 = __importDefault(require("passport"));
const setupPassport = (User) => {
    passport_1.default.serializeUser((id, done) => {
        /***
         * If authentication succeeds, passport.authenticate calls the serializeUser
         * function, passing in the user object.
         * serializeUser creates a unique identifier for the user and stores it in the session.
         * After the done function, it passes to the next middleware in the chain.
         */
        done(null, id);
    });
    passport_1.default.deserializeUser((id, done) => {
        /***
         * Is called with the user identifier stored in the session.
         * deserializeUser retrieves the user object from the database using the identifier,
         * and passes it to the next middleware in the chain.
         */
        const user = User.findById(id);
        if (user) {
            done(null, user);
        }
        else {
            done(null, false);
        }
    });
    // // init passport on every route call
    // config.app.use(passport.initialize());
    // // passport.session has to be used after 
    // // express.session in order to work properly.
    // // allow passport to use "express-session"
    // config.app.use(passport.session());
    // // passport function that calls the strategy to be executed
    // config. app.use(passport.authenticate('session'));
};
exports.setupPassport = setupPassport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXNzcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsd0RBQWdDO0FBRXpCLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBUyxFQUFRLEVBQUU7SUFFL0Msa0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFPLEVBQUUsSUFBSSxFQUFRLEVBQUU7UUFDN0M7Ozs7O1dBS0c7UUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsa0JBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFRLEVBQUU7UUFDMUM7Ozs7V0FJRztRQUVILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILHVDQUF1QztJQUN2Qyx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0Msc0NBQXNDO0lBQ3RDLDhEQUE4RDtJQUM5RCxxREFBcUQ7QUFDdkQsQ0FBQyxDQUFDO0FBbkNXLFFBQUEsYUFBYSxpQkFtQ3hCIn0=