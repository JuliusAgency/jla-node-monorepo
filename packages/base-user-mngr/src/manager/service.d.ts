import { AuthMngrOPtions } from './types';
export declare const setupAuthService: (options: AuthMngrOPtions) => {
    changePassword: (email: string, password: string, passwordNew: string) => Promise<{
        email: any;
        name: any;
    }>;
    resetPasswordRequest: (email: string) => Promise<{
        name: string;
        email: string;
        token: string;
        id: any;
    }>;
    resetPassword: (id: string, token: string, password: string) => Promise<{
        email: string;
        name: string;
    }>;
};
