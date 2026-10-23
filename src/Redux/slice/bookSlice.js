import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
    name: 'book',

    initialState: {
        readingList: [],
        searchKey: ''
    },

    reducers: {
        searchBook: (state, action) => {
            state.searchKey = action.payload
        },

        addBook: (state, action) => {
            const exists = state.readingList.find(
                book => book.key === action.payload.key
            )

            if (!exists) {
                state.readingList.push(action.payload)
            }
        },

        removeBook: (state, action) => {
            state.readingList = state.readingList.filter(
                book => book.key !== action.payload
            )
        },

        clearBooks: (state) => {
            state.readingList = []
        }
    }
})

export const {
    searchBook,
    addBook,
    removeBook,
    clearBooks
} = bookSlice.actions

export default bookSlice.reducer