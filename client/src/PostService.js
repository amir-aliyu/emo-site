import axios from 'axios';

const url='api/posts/';

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => { // new things
                    const data = res.data;
                    if (Array.isArray(data)) {
                        resolve(data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt)
                        })));
                    } else {
                        // If data is not an array, return an empty array
                        resolve([]);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    // Create Post
    static insertPost(text) {
        return axios.post(url, { text });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;