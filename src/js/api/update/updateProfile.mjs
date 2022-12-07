import { getAccessToken } from "../../localStorage/getAccessToken.mjs";
import * as constants from "../constants.mjs";
import { getMyProfile } from "../read/getMyProfile.mjs";

/**
 * 
 * @param {object} formData Data from the forminput to be used in api call
 * @returns {object} Updated profileinformation.
 */
export async function updateProfile(formData){

    const profileInfo = await getMyProfile();
    const profileName = profileInfo.name;

    const updateProfileUrl = `${constants.api_base_url}${constants.api_profiles_url}${profileName}/media`;

    const postData = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(formData),
    };
    
    try {    
        const response = await fetch(updateProfileUrl, postData);
        console.log(response)
        const postInformation = await response.json();
        console.log(postInformation)
        if(response.ok){
            document.location.href = '/user/userProfile/';
        }
        return postInformation;

    } catch(error) {
        console.log(error);
    }

}