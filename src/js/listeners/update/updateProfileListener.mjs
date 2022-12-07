import { update } from "../../api/index.mjs";

/**
 * Creates a listener for the updateProfile form.
 */
export function updateProfileListener(){
    const updateForm = document.querySelector('#updateProfile');

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
            update.updateProfile(formDataObj);


        })
    }
}