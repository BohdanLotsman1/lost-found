import {State} from "../../../libs/utils/store/reducers";

export const errorsSelector = (state: State) => state.auth.signIn.errors;