import * as constants from "../constants.mjs";
import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

export async function getProfilePosts(){
    const profilePostUrl = `${constants.api_base_url}${constants.api_profiles_url}/`;

    const postData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken}`,
        }
    };

    try {

        // const response = await fetch();

    } catch {



    }

}