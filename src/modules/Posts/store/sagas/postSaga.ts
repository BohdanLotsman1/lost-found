import {Actions} from "../../../../libs/utils/store/types";
import {call, put} from 'redux-saga/effects';
import {PostsService} from "../../services";
import {addNewPost, setPosts, updateSelectedPosts} from "../actions";

const postService = new PostsService()

export function* gettingPosts(payload:any) {
    try {
        if(payload==undefined){
            payload = 1
        }
        const {postData} = yield call(postService.getPosts,payload);
        if(postData){
            console.log(postData)
            yield put(setPosts(postData));
        }
        

    }catch(e){
        console.log(e)
    }
}

export function* gettingCustomerPosts({payload}: Actions) {
    try {
        const {posts} = yield call(postService.getUsersPosts,payload);
        if(posts)
        yield put(setPosts(posts));

    }catch(e){
        console.log(e)
    }
}

export function* creatingPost({ payload }: Actions) {
    try {

        let formData = new FormData();

        formData.append('image',payload.image);
        formData.append('payload',JSON.stringify(payload));

        const {post} = yield call(postService.addPost, formData);
        yield put(addNewPost(post))
    }catch(e){
        console.log(e)
    }
}

export function* updatingPost({ payload }: Actions) {
    try {
        let formData = new FormData();

        formData.append('image',payload.data.image);
        formData.append('payload', JSON.stringify(payload.data));

        const {post} = yield call(postService.updatePost,payload.id,formData);
        
        if(post){
            yield put(updateSelectedPosts(post))
        }
 
    }catch(e){
        console.log(e)
    }
}

export function* deletingPost({ payload }: Actions) {
    try {
        yield call(postService.deletePost, payload);
    }catch(e){
        console.log(e)
    }
}







