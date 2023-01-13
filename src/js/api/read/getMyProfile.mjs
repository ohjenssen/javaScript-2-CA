import * as constants from "../constants.mjs";
import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

/**
 * Function that gets the users profile information to be used in rendering
 * @returns {object} object contianing profile information
 */
export async function getMyProfile(){
    const getProfileinformation = JSON.parse(localStorage.getItem('profileInfo'));
    const profileName = getProfileinformation.name;

    const profileInfoUrl = `${constants.api_base_url}${constants.api_profiles_url}${profileName}/?_following=true&_followers=true`;

    const postData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        },
    };

    try {

        const response = await fetch(profileInfoUrl, postData);
        const profileInfo = await response.json();
        return profileInfo;

    } catch(error) {
        console.log(error)
    }


}
