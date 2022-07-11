// * DEPENDS
import { createSlice } from "@reduxjs/toolkit";


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        value: false,
    },
    reducers: {
        showGallery: (state) => {
            state.value = true
        },
        
        hideGallery: (state) => {
            state.value = false
        }
    }
});

export const {showGallery, hideGallery} = gallerySlice.actions
export default gallerySlice.reducer