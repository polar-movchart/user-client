import { fetchWithErrorHandling } from "../ApiServiceBase"
import { LoginResponse } from "./interfaces/LoginResponse";

export class UserApiServicePublic {
    private static instance: UserApiServicePublic | null = null;
    private static baseURL = process.env.REACT_APP_EDGE_SERVICE_URL + "/public/api/v1/users";

    constructor() {
        if (!UserApiServicePublic.instance) {
            UserApiServicePublic.instance = new UserApiServicePublic();
        }
        return UserApiServicePublic.instance;
    }

    static async loginKakao(kakaoId: number) {
        const response = await fetchWithErrorHandling<LoginResponse>(
            `${this.baseURL}/login/kakao`,
            "POST",
            {
                data: {
                    id: kakaoId
                }
            }
        );

        return response;
    }
};
