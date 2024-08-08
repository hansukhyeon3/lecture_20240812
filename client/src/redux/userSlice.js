import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    _id: "",
    name: "", //이곳에 아까 로그인한 사람 이름을 저장
    email: "",
    profile_pic: "",
    token: "",
    onlineUser: [],
    socketConnection: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.profile_pic = action.payload.profile_pic
        },
        logout: (state,action)=>{
            state._id = ""
            state.name = ""
            state.email = ""
            state.profile_pic = ""
            state.token = ""
            state.socketConnection = null
        },
    }
})