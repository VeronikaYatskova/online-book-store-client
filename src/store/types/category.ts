import { ICategory } from "../../infrastructure/server/http/modules";

export enum CategoriesActionTypes {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR"
}

interface FetchCategoriesAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES
}

interface FetchCategoriesSuccessAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: any[]
}

interface FetchCategoriesErrorAction {
    type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
    payload: string
}

export interface CategoryState {
    categories: ICategory[];
    loading: boolean;
    error: null | string;
}

export type CategoryAction = FetchCategoriesAction | FetchCategoriesErrorAction | FetchCategoriesSuccessAction

