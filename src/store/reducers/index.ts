import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { requestReducer } from "./requestReducer";


export const rootReducer = combineReducers({
    category: categoryReducer,
    request: requestReducer
})

export type RootState = ReturnType<typeof rootReducer>
