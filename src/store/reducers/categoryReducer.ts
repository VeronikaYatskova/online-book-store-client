import { CategoriesActionTypes, CategoryAction, CategoryState } from "../types/category"

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null
}

export const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch(action.type) {
        case CategoriesActionTypes.FETCH_CATEGORIES:
            return {loading: true, error: null, categories: []}
        case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {loading: false, error: null, categories: action.payload}
        case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
            return {loading: false, error: null, categories: []}
        default:
            return state
    }
}
