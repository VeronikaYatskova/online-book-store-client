import { IRequest } from "../../infrastructure/server/http/modules";

export enum RequestsActionTypes {
    FETCH_REQUESTS = "FETCH_REQUESTS",
    FETCH_REQUESTS_SUCCESS = "FETCH_REQUESTS_SUCCESS",
    FETCH_REQUESTS_ERROR = "FETCH_REQUESTS_ERROR"
}

interface FetchRequestsAction {
    type: RequestsActionTypes.FETCH_REQUESTS
}

interface FetchRequestsSuccessAction {
    type: RequestsActionTypes.FETCH_REQUESTS_SUCCESS,
    payload: any[]
}

interface FetchRequestsErrorAction {
    type: RequestsActionTypes.FETCH_REQUESTS_ERROR,
    payload: string
}

export interface RequestState {
    requests: IRequest[];
    loading: boolean;
    error: null | string;
}

export type RequestAction = FetchRequestsAction | FetchRequestsErrorAction | FetchRequestsSuccessAction

