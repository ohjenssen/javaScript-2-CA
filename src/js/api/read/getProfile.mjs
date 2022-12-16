import * as constants from "../constants.mjs";
import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

export const getProfile = async () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const profileName = params.get('name');

    const profileURL = `${constants.api_base_url}${constants.api_profiles_url}${profileName}?_following=true&_followers=true`;

    const postData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        }
    }

    try {

        const response = await fetch(profileURL, postData);
        const profile = await response.json();
        return profile;

    } catch {



    }
}