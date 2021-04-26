import {State} from "../../../libs/utils/store/reducers";

export const fetchPostsSelector = (state: State) => state.posts.posts;

export const selectedPostSelector = (state: State) => state.posts.selectedPost;