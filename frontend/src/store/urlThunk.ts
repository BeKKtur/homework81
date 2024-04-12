import {createAsyncThunk} from "@reduxjs/toolkit";
import {UrlMutation} from "../types";
import axiosApi from "../axiosApi";

export const postUrl = createAsyncThunk<void, UrlMutation>(
    'url/postUrl',
    (urlMutation,) => {
        const serialized = {
            ...urlMutation,
        }

        return axiosApi.post('/links', serialized)
    }
)