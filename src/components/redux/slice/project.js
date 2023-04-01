import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    project: null,
}

export const activeproject = createSlice({
    name: 'project',
    initialState,
    reducers: {

        addProject: (state, action) => {
            state.project = action.payload;
        },
        removeProject: (state, action) => {
            state.project = {}
        }
    },
})
export const { addProject, removeProject } = activeproject.actions

export default activeproject.reducer