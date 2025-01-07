
export interface UReq {
    headers: { 
        adminId: string;
    }; 
    body: { 
                email: string;
                password: string;
            }
    query: {
        userId: string;
    };
}

export interface URes {
    status: (arg0: number) => { 
        ();
        new(): unknown; 
        json: {(
            arg0: { 
                message?: string; 
                error?: string; 
                users?: unknown; 
                accessToken?: string;
                newUser?: unknown;
            }): unknown; 
            new(): unknown; 
        }; 
    }; 
}