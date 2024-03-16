import {createSlice} from '@reduxjs/toolkit'

const users = [
    {
        "_id": "65f4bba755f73d0b5b6d681b",
        "id": 45451222,
        "name": "Mario",
        "lastname": "Sanchez",
        "email": "mario@correo1'.com",
        "password": "$2b$10$iHqI/AWVdPPVfPZJN5tOXu0QuWGC4VqjfAgKnrog1QjRMpdnj4Oci",        
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer