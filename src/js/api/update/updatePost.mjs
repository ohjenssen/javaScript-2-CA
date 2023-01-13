import { getAccessToken } from "../../localStorage/getAccessToken.mjs";
import * as constants from "../constants.mjs";

const getPostId = () => {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const queryID = params.get("id");
    return queryID;
}

const updatePostUrl = `${constants.api_base_url}${constants.api_posts_url}/${getPostId()}`;

/**
 * 
 * @param {object} formData Data from the forminput
 * @returns {object} Updated post
 */
export async function updatePost(formData){

    const postData = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(formData),
    };
    
    try {    
        const response = await fetch(updatePostUrl, postData);
        console.log(response)
        const postInformation = await response.json();
        if(response.ok){
            document.location.href = '/user/userProfile/';
        }
        console.log(postInformation)
        return postInformation;

    } catch(error) {
        console.log(error);
    }

}