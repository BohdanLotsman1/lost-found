import {Posts, SelectedPost, PostFormValues} from "./types";

export const PostsInitialValues: Posts = {
    list: [],
    pages:0,
};

export const selectedPostInitialValues: SelectedPost = {
    post: {},
};

export const createPostInitialValues: PostFormValues = {
        header:'',
        description:'',
        user_id:'',
        image:'',
        place:'',
        phone:'',
        email:'',
        contact_face:'',
};