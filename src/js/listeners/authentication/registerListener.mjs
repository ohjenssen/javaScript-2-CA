import { authenticate } from "../../api/index.mjs";

/**
 * Creates a listener for the registerUser function. 
 * Retrives the datainput and passes it in the function when called (when the form gets submitted):
 */
export function setRegisterFormListener(){
    const form = document.querySelector('#registerForm');

    if(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const userInfo = Object.fromEntries(formData.entries());
            console.log(userInfo)
        
            authenticate.registerUser(userInfo);
        })
    }

}
