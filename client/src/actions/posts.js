import * as api from '../api/index.js';
import {
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    FETCH_ALL,
    FETCH_POST,
    FETCH_BY_SEARCH,
    START_LOADING,
    END_LOADING
} from '../constants/actionTypes.js';

// Action creators
export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        console.log("Starting post fetching...")
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data });
        console.log("Fetch posts action dispatched...")
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
        console.log("Post fetching failed...")
    }
}

export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        console.log("Starting post fetching...")
        const { data } = await api.fetchPosts(page);
        dispatch({ type: FETCH_ALL, payload: data });
        console.log("Fetch posts action dispatched...")
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
        console.log("Post fetching failed...")
    }
}

export const getPostsBySearch = (searchQuery) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_ALL, payload: data });
        console.log(data);
        dispatch({ type: END_LOADING });
    } catch (error) { 
        console.log(error);
    }
}

export const createPost = (post, history) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(post);
        history.push(`/posts/${data._id}`)
        dispatch({ type: CREATE, payload: data})
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}