import {Url} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {postUrl} from "./urlThunk";

interface UrlState {
    url: Url[];
    fetchLoading: boolean;
    postLoading: boolean
}

const initialState:UrlState = {
    url: [],
    fetchLoading: false,
    postLoading: false
}

const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postUrl.pending, (state) => {
            state.postLoading = true;
        }).addCase(postUrl.fulfilled, (state) => {
            state.postLoading = false;
        }).addCase(postUrl.rejected, (state) => {
            state.postLoading = false;
        })
    }
});

export const urlReducer = urlSlice.reducer;