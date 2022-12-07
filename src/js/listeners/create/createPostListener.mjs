import { create } from "../../api/index.mjs";

/**
 * Creates a listener for the createPost function.
 * Retrieves the data input from the form and uses it in the cretePost function.
 */
export function createPostListener(){
    const form = document.querySelector('#createPost');
    
    if(form){
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.target;
            const myFormData = new FormData(form);

            const formDataObj = {};

            myFormData.forEach((value, key) => {
                formDataObj[key] = value;
                if(key === "tags"){
                   formDataObj[key] = value.split(" ")
                }
            })
            create.createPost(formDataObj);
        })
    }


}