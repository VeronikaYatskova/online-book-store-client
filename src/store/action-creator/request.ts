import { Dispatch } from "react"
import axios from "axios"

import environment from '../../env'
import { RequestAction, RequestsActionTypes } from "../types/request"

export const fetchRequestRefuse: any = (props: any) => {

    const { id } = props
    const { host, port, protocol } = environment;
    const path = `${protocol}://${host}:${port}/requests`;
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        data: {
            "requestId": id
        }
    }

    return async (dispatch: Dispatch<RequestAction>) => {
        try {
            dispatch({type: RequestsActionTypes.FETCH_REQUESTS})
            const response = await axios.delete(path, config)
            
            console.log(response.data)

            dispatch({type: RequestsActionTypes.FETCH_REQUESTS_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({
                type: RequestsActionTypes.FETCH_REQUESTS_ERROR, 
                payload: 'Error!'
            })
        }
    }
}

export const fetchRequests: any = () => {
    const { host, port, protocol } = environment;
    const path = `${protocol}://${host}:${port}/requests`;
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }        
    }

    return async (dispatch: Dispatch<RequestAction>) => {
        try {
            dispatch({type: RequestsActionTypes.FETCH_REQUESTS})
            const response = await axios.get(path, config)
            
            console.log(response.data)

            dispatch({type: RequestsActionTypes.FETCH_REQUESTS_SUCCESS, payload: response.data})
        }
        catch (e) {
            dispatch({
                type: RequestsActionTypes.FETCH_REQUESTS_ERROR, 
                payload: 'Error!'
            })
        }
    }
}
