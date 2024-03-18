import {combineReducers} from '@reduxjs/toolkit'
import {reducer as filesReducer} from '../slices/files'

const rootReducer=combineReducers({
    files:filesReducer
})
export default rootReducer