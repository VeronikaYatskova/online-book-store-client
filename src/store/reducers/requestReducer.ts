import { CategoriesActionTypes, CategoryAction, CategoryState } from "../types/category"
import { RequestAction, RequestState, RequestsActionTypes } from "../types/request"

const initialState: RequestState = {
    requests: [],
    loading: false,
    error: null
}

export const requestReducer = (state = initialState, action: RequestAction): RequestState => {
    switch(action.type) {
        case RequestsActionTypes.FETCH_REQUESTS:
            return {loading: true, error: null, requests: []}
        case RequestsActionTypes.FETCH_REQUESTS_SUCCESS:
            return {loading: false, error: null, requests: action.payload}
        case RequestsActionTypes.FETCH_REQUESTS_ERROR:
            return {loading: false, error: null, requests: []}
        default:
            return state
    }
}
