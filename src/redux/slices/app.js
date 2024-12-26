import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    modals: {
        gif: false,
        audio: false,
        media: false,
        doc: false,
    },
    selectedGifUrl: "",
}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        updateGifModal(state, action) {
            state.modals.gif = action.payload.value;
            state.selectedGifUrl = action.payload.url;
        },
        updateAudioModal(state, action) {
            state.modals.audio = action.payload;
        },
        updateMediaModal(state, action) {
            state.modals.media = action.payload;
        },
        updateDocumentModal(state, action) {
            state.modals.doc = action.payload;
        },
    },
});

export default slice.reducer;


export const ToggleGifModal = (value) => async (dispatch,) => {
    console.log("ToggleGifModal action called with:", value); 
    dispatch(slice.actions.updateGifModal(value));
}

export const ToggleAudioModal = (value) => async (dispatch,) => {
    console.log("ToggleAudioModal action called with:", value); 
    dispatch(slice.actions.updateAudioModal(value));
}

export const ToggleMediaModal = (value) => async (dispatch,) => {
    console.log("ToggleMediaModal action called with:", value); 
    dispatch(slice.actions.updateMediaModal(value));
}

export const ToggleDocumentModal = (value) => async (dispatch,) => {
    console.log("ToggleDocumentModal action called with:", value); 
    dispatch(slice.actions.updateDocumentModal(value));
}