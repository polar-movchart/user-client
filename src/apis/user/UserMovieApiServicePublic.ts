import axios from "axios";
import { getAtk } from "../../utils/authUtils";
import Review from "./interfaces/Review";
import { ApiResponse } from "../ApiResponse";
import { Page } from "../movie/interfaces/Page";

export default class UserMovieApiServicePublic {
    private static instance: UserMovieApiServicePublic | null = null;
    private static baseURL = process.env.REACT_APP_EDGE_SERVICE_URL + "/public/api/v1/users/movies";

    constructor() {
        if (!UserMovieApiServicePublic.instance) {
            UserMovieApiServicePublic.instance = new UserMovieApiServicePublic();
        }
        return UserMovieApiServicePublic.instance;
    }

    static async getReviews(code: number, page: number, size: number): Promise<ApiResponse<Page<Review[]>>> {
        const atk = getAtk();
        const headers = {
            Authorization: `Bearer ${atk}`,
        };

        return axios.get(`${this.baseURL}/${code}/reviews`, {
            headers: headers,
            params: { page: page, size: size },
        }).then((response) => {return response.data});
    }
}
