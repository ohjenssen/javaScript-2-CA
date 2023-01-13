import * as constants from '../constants.mjs';

/**
 * Api call that logs in the user. 
 * @param {object} userData Datainput from the form to be used in the body.
 * Stores the profileInfomration and accesstoken to be used in other calls.
 * @example
 * ´´´
 * const object = { email: 'johndoe@stud.noroff.no', password: 'pass123' };
 * loginUser(object);
 * ´´´
 */
export async function loginUser(userData){
    const loginUrl = `${constants.api_base_url}${constants.api_login_url}`;

    try {    

        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        
        const response = await fetch(loginUrl, postData);
        const json = await response.json();

        const accessToken = json.accessToken;
        localStorage.setItem('profileInfo', JSON.stringify(json));
        localStorage.setItem('accessToken', accessToken);

        if (response.ok){ // If user is authenticated, user gets redirected
            window.location.replace('../../home/')
        } else if(!response.ok){
            alert(json.errors[0].message);
        }
    
    } catch(error) {
        alert('Something went wrong, reload the page or try again')
    }

}