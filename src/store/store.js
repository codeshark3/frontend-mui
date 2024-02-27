import {configureStore, combineReducers} from "@reduxjs/toolkit"
// import docReducer from './docSlice'
import authReducer from './authSlice'
import registerReducer from "./registerSlice"
import testReducer from "./testSlice"
import predictionReducer from "./predictionSlice"
import chartReducer from "./chartSlice"
import dataTableReducer from "./dataTableSlice"
import countReducer from "./countSlice"
import testDetailReducer from "./testDetailSlice"
import userReducer from "./userSlice"
// import docDetailsReducer from "./docDetailsSlice"
const rootReducer = combineReducers({
    //  doc:docReducer,
    tests:testReducer,
    testDetails:testDetailReducer,
     auth:authReducer,
     register:registerReducer,
     prediction:predictionReducer,
     charts:chartReducer,
     dataTable:dataTableReducer,
     count:countReducer,
     user:userReducer
    //  details:docDetailsReducer
})


 export const store = configureStore({
    reducer: rootReducer

})  

