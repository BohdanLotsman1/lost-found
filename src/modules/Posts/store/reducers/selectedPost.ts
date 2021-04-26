import { Actions } from '../../../../libs/utils/store/types';
import {SELECTED_POST,CLEAR_SELECTED_POST} from "../actionTypes";
import {SelectedProductInStore} from "../types";
import { selectedProductInitialValues } from "../initialState";

export default (state: SelectedProductInStore = selectedProductInitialValues, { type, payload }: Actions): SelectedProductInStore => {
    switch (type) {
        case SELECTED_POST:
            return {
                ...state,
                post: payload,
            };
        case CLEAR_SELECTED_POST:
            return {
                ...state,
                post: {},
            };
        default:
            return state;
    }
};