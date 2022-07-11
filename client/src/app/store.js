import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../utils/features/gallerySlice";

export default configureStore({
    reducer: {
        gallery: galleryReducer
    },
});
