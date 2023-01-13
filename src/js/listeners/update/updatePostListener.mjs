import { update } from "../../api/index.mjs";

/**
 * Creates a listener for the updatePost form.
 */
export function updatePostListener(){
    const updateForm = document.querySelector('#updatePost');

    if(updateForm){
        updateForm.addEventListener('submit', (event) => {
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
            
            update.updatePost(formDataObj);


        })
    }
}