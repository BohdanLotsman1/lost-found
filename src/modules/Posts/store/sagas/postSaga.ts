import {Actions} from "../../../../libs/utils/store/types";
import {call, put} from 'redux-saga/effects';
import {PostsService} from "../../services";
import {addNewPost, setPosts, updateSelectedPosts} from "../actions";

const postService = new PostsService

export function* gettingPosts() {
    try {
        const {list} = yield call(postService.getAllPosts);
        if(list)
        yield put(setPosts(list));

    }catch(e){
        console.log(e)
    }
}

export function* gettingCustomerPosts({payload}: Actions) {
    try {
        const {products} = yield call(postService.getUsersPosts,payload);
        if(products)
        yield put(setPosts(products));

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







