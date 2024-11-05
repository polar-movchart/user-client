import { useEffect, useState } from "react";
import { ApiResponse } from "../apis/ApiResponse";

type FetchApiFunc<T> = () => Promise<ApiResponse<T>>;

export function useApiFetch<T>(apiFunc: FetchApiFunc<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await apiFunc();
            if (response.isSuccess) {
                setData(response.data);
            } else {
                setError(response.errorMsg);
            }
            setLoading(false);
        };

        fetchData();
    }, [apiFunc]);
    
    return { data, loading, error };
};