import * as constants from '../constants.mjs';
import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

/**
 * Function that retrives a specific post to be used in rendering.
 * @returns An object containing the relevant information.
 */
export const getSpecificPost = async () => {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const queryID = params.get("id");
    const getSinglePostUrl = `${constants.api_base_url}${constants.api_posts_url}/${queryID}/?_author=true&_comments=true&_reactions=true`;
    
    const postData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        }
    };
    
    try {    
        const response = await fetch(getSinglePostUrl, postData);
        const post = await response.json();
        return post;

    } catch(error) {
        console.log(error);
    }
}