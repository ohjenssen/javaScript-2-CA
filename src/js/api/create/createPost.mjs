import * as constants from '../constants.mjs'
import { getAccessToken } from '../../localStorage/getAccessToken.mjs'

const createPostUrl = `${constants.api_base_url}${constants.api_posts_url}`;

/**
 * Api call that creates a new post
 * @param {object} formData Datainput from the form to be used for the body
 * @returns An object containing keys and values for the created post.
 * @example
 * ´´´
 * const object = { title: 'post title', body: 'this is a post', tags: ["post", "cool"], media: 'imageLink.url'}
 * createPost(object);
 * ´´´
 */
export async function createPost(formData){
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(formData)
    };
    
    try {    
        const response = await fetch(createPostUrl, postData);
        const postInformation = await response.json();
        if (response.ok){
            location.reload();
        }
        return postInformation;

    } catch(error) {
        console.log(error);
    }

}