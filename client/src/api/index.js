import axios from 'axios';

const API = axios.create({ baseUrl: 'http://localhost:5000' });
//const url = 'https://memories-project-md.herokuapp.com/posts';
//const url = 'http://localhost:5000/posts';

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createPost = (newPost) => API.post('/posts', newPost); 
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signin = (formData) => API.post('/user/signin', formData)
export const signup = (formData) => API.post('/user/signup', formData)
