import * as constants from "../constants.mjs";
import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

/**
 * Function that fetches the users posts from the api to be used in rendering
 * @returns {array} Array of objects containing all the posts 
 */
export async function getProfilePosts(){
    const getProfileinformation = JSON.parse(localStorage.getItem('profileInfo'));
    const profileName = getProfileinformation.name;

    const profilePostsUrl = `${constants.api_base_url}${constants.api_profiles_url}${profileName}/posts`;

    const postData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        },
    };

    try {

        const response = await fetch(profilePostsUrl, postData);
        const posts = await response.json();
        return posts;

    } catch(error) {
        console.log(error)
    }


}