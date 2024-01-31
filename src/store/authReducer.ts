import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface userState {
    userInfo: any,
    todo: any
    isLoggedIn: boolean
}

const initialState: userState = {
    userInfo: [],
    todo: [],
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        saveUserData: (state, action) => {
            state.userInfo = action.payload
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = action.payload
        },
        logOut: (state) => {
            state.userInfo = []
            state.isLoggedIn = false
        },
        addTodo: (state, action) => {
            const { id, taskName, taskDetails, startDate, endDate, isCompleted } = action.payload
            state.todo.push({ id, taskName, taskDetails, startDate, endDate, isCompleted, })
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter((name, index) => name.taskName !== action.payload

            )
        }
    },
})

export const { saveUserData, loginSuccess, addTodo, deleteTodo, logOut } = authSlice.actions


export const isLoggedIn = (state: RootState) => { return state?.isLoggedIn }
export const todoTask = (state: RootState) => { return state?.todo }
export const saveUserInfo = (state: RootState) => { return state?.userInfo }

export default authSlice.reducer