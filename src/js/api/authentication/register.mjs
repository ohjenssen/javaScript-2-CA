import * as constants from "../constants.mjs";

/**
 * Api call that registers a new profile account.
 * @param {object} userData Datainput from the form to be used in the body of the call.
 * Redirects the user to the login page if the account was created succesfully.
 * @example
 * ´´´
 * const object = { name: 'johndoe', email:, 'johndoe@stud.noroff.no', password: 'pass123', avatar: 'urlImageLink.url', banner: 'urlImageLink.url' }
 * registerUser(object);
 * ´´´
 */
export async function registerUser(userData){
    const registerUrl = `${constants.api_base_url}${constants.api_register_url}`;
    try {    

        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        
        const response = await fetch(registerUrl, postData);
        const json = await response.json();

        if(response.ok){
            window.location.replace('../login/');
        } else if(!response.ok){
            alert(json.errors[0].message)
        }

    } catch(error) {
        console.log(error);
    }
    
}