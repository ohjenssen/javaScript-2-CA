/**
 * Adds a listener for the logout button.
 * When the button is clicked, localstorage is cleared, removing all information, most importantly the accesstoken,
 * so that the user will have to login again. 
 * Also relocates the user to the index page of the project.
 */
export const setLogoutListener = () => {
    const logoutBtn = document.querySelector('#logout');
    if (logoutBtn){

        logoutBtn.addEventListener('click', event => {
            localStorage.clear();
            window.location.replace('../../index.html/')
        })

    }
}