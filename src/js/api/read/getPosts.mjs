import * as constants from '../constants.mjs';
import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

/**
 * Function that fetches the post from the api to be used in rendering
 * @returns {array} Array of objects containing all posts by different profiles
 */
export const getPosts = async () => {
    const getPostsUrl = `${constants.api_base_url}${constants.api_posts_query_url}`;
    
    const postData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        }
    };
    
    try {    
        const response = await fetch(getPostsUrl, postData);
        const posts = await response.json();
        return posts;

    } catch(error) {
        console.log(error);
    }
}