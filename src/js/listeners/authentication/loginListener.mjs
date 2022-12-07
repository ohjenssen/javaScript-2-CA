import { authenticate } from "../../api/index.mjs";

/**
 * Creates a listener for the loginUser function. 
 * Retrives the datainput and passes it in the function when called (when the form gets submitted)
 */
export function setLoginFormListener(){
    const form = document.querySelector('#loginForm');

    if(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const userInfo = Object.fromEntries(formData.entries());
        
            authenticate.loginUser(userInfo);
        })
    }

}