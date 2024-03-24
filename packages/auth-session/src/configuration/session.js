"use strict";
/**
 *  Defines the express session config
 *
 *  The session object is associated with all routes
 *   and can be accessed on all requests.
 *   default name is connect.sid.
 *   It's advisable to change the name to avoid fingerprinting.
 *   By default, the cookies are set to:
 *   { path: '/', httpOnly: true, secure: false, maxAge: null }
 *   To harden session cookies:
 *  Recommended option secure: true, however it
 *   requires an https-enabled web site.
 *  resave: It basically means that for every request to the server,
 *   it reset the session cookie.
 *   Even if the request was from the same user or browser and the session
 *   was never modified during the request.
 *  saveUninitialized: When an empty session object is created and
 *   no properties are set, it is the uninitialized state.
 *   So, setting saveUninitialized to false will not save
 *   the session if it is not modified.
 *  The default value of both resave and saveUninitialized is true,
 *   but using the default is deprecated.
 *   So, set the appropriate value according to the use case.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSession = void 0;
const toBoolean = (dataStr) => {
    var _a;
    return !!(((_a = dataStr === null || dataStr === void 0 ? void 0 : dataStr.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(dataStr)) === 'true');
};
const toSameSite = (dataStr) => {
    var _a;
    if (dataStr === undefined)
        return undefined;
    const lowerCaseDataStr = (_a = dataStr === null || dataStr === void 0 ? void 0 : dataStr.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(dataStr);
    if (lowerCaseDataStr === 'strict')
        return 'strict';
    if (lowerCaseDataStr === 'none')
        return 'none';
    if (lowerCaseDataStr === 'lax')
        return 'lax';
    return undefined;
};
const initSession = (sessionConfig) => {
    const sessionOptions = {
        secret: sessionConfig.secret || "This is a secret",
        name: sessionConfig.name,
        saveUninitialized: toBoolean(sessionConfig.saveUninitialized || 'false'),
        cookie: {
            secure: toBoolean(sessionConfig.cookie.secure || 'false'),
            sameSite: toSameSite(sessionConfig.cookie.sameSite || 'lax'),
            httpOnly: toBoolean(sessionConfig.cookie.httpOnly || 'false'),
            maxAge: Number.parseInt(sessionConfig.cookie.maxAge || "360000", 10),
            domain: sessionConfig.cookie.domain,
        },
        resave: toBoolean(sessionConfig.resave || 'false')
    };
    return sessionOptions;
};
exports.initSession = initSession;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRzs7O0FBSUgsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFlLEVBQVcsRUFBRTs7SUFDN0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVcsdURBQUksTUFBSyxNQUFNLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWdCLEVBQW1ELEVBQUU7O0lBQ3ZGLElBQUksT0FBTyxLQUFLLFNBQVM7UUFBRSxPQUFPLFNBQVMsQ0FBQztJQUM1QyxNQUFNLGdCQUFnQixHQUFHLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVcsdURBQUksQ0FBQztJQUNsRCxJQUFJLGdCQUFnQixLQUFLLFFBQVE7UUFBRSxPQUFPLFFBQVEsQ0FBQztJQUNuRCxJQUFJLGdCQUFnQixLQUFLLE1BQU07UUFBRSxPQUFPLE1BQU0sQ0FBQztJQUMvQyxJQUFJLGdCQUFnQixLQUFLLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QyxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFSyxNQUFNLFdBQVcsR0FBRyxDQUFDLGFBQTRCLEVBQWtCLEVBQUU7SUFDMUUsTUFBTSxjQUFjLEdBQW1CO1FBQ3JDLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxJQUFJLGtCQUFrQjtRQUNsRCxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUk7UUFDeEIsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUM7UUFDeEUsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7WUFDekQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7WUFDNUQsUUFBUSxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUM7WUFDN0QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNwRSxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1NBQ3BDO1FBQ0QsTUFBTSxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQztLQUNuRCxDQUFDO0lBQ0YsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBZlcsUUFBQSxXQUFXLGVBZXRCIn0=