import { Dispatch } from "react"
import axios from "axios"

import environment from '../../env'

import { CategoriesActionTypes, CategoryAction } from "../types/category"

export const fetchCategories: any = () => {

    const { host, port, protocol } = environment;
    const path = `${protocol}://${host}:${port}/categories`;
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }
    }

    return async (dispatch: Dispatch<CategoryAction>) => {

        try {
            dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES})
            const response = await axios.get('http://localhost:7101/categories', config)
            
            console.log(response.data)

            dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({
                type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR, 
                payload: 'Error!'
            })
        }
    }
}
