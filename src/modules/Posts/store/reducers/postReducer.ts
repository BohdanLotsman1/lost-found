import { Actions } from '../../../../libs/utils/store/types';
import {
    ADD_NEW_POST,
    DELETE_POST,
    GET_POSTS,
    SET_POSTS,
    UPDATE_POST,
    UPDATE_SELECTED_POST,
    GET_USERS_POSTS
} from "../actionTypes";
import {Products} from "../types";
import { ProductsInitialValues } from "../initialState";

export default (state: Products = ProductsInitialValues, { type, payload }: Actions): Products => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
            };
        case GET_USERS_POSTS:
            return {
                ...state,
            };
        case SET_POSTS:
            return {
                ...state,
                list: payload,
            };
        case ADD_NEW_POST:
            return {
                ...state,
                list: [payload, ...state.list],
            };
        case UPDATE_POST:
            return {
                ...state,
                list: state.list.map((post: any) =>{
                   if (post.id == payload.id )
                   post = payload
                   return post
                } )
            };
        case UPDATE_SELECTED_POST:
            return {
                ...state,
                list: state.list.map((product: any) =>{
                   if (product.id == payload.id )
                   product = payload
                   return product
                } )
            };
        case DELETE_POST:
            return {
                ...state,
                list: state.list.filter((product: any) => product.id !== payload)
            };
        default:
            return state;
    }
};