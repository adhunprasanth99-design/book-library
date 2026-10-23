import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slice/bookSlice'

const store = configureStore({
    reducer: {
        bookReducer: bookReducer
    }
})

export default store