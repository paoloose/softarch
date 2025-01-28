import useSWR, { type SWRConfiguration } from 'swr';
import { LAB02_SERVICE_API } from '../consts';

type ArgsType<T> = T extends (...args: infer U) => any ? U : never;

export type ApiResponse<T> = {
    data: T;
    code: number;
    headers?: Headers;
};

const fetcher = async <T>(...args: ArgsType<typeof fetch>): Promise<ApiResponse<T>> => {
    const response = await fetch(...args);
    const data = await response.json();

    return {
        data,
        code: response.status,
        headers: response.headers,
    }
};

export function useApi<T, E = any>(path: string, options: RequestInit = {}, swrOptions: SWRConfiguration = {}) {
    // @ts-ignore
    const { data: response, error, isLoading, isValidating, mutate } = useSWR<ApiResponse<T>, E>(
        path, (key: string) => {
            options.headers = { ...options.headers }
            const url = `${LAB02_SERVICE_API}${key.startsWith('/') ? key : `/${key}`}`;
            return fetcher<T>(url, options);
        }, { revalidateOnFocus: false, ...swrOptions, },
    );

    return {
        response,
        error,
        isLoading,
        isValidating,
        mutate,
    };
}
