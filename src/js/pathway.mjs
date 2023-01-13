import * as listeners from './listeners/index.mjs';

/**
 * Sets listeners based on the current page location.
 * @param {string} path Value of path. Should be something like /home/ or /user/userProfile/.
 */

export function setPath(path){
    switch(path){
        case '/user/register/':
            listeners.authentication.setRegisterFormListener();
            break;

        case '/user/login/':
            listeners.authentication.setLoginFormListener();
            break;

        case '/home/':
            listeners.read.renderPosts();
            listeners.create.createPostListener();
            break;

        case '/specificPost/':
            listeners.read.renderSpecificPost();
            break;

        case '/searchResults/':
            listeners.read.renderSearchPosts();
            break;

        case '/user/userProfile/':
            listeners.read.renderPosts();
            listeners.read.renderMyProfile();
            break;

        case '/user/updatePost/':
            listeners.read.renderSpecificPost();
            listeners.update.updatePostListener();
            break;
        
        case'/user/updateProfile/':
            listeners.read.renderUpdateProfile();
            listeners.update.updateProfileListener();


    }
    listeners.authentication.setLogoutListener();
    listeners.filtersAndSearch.setSearchFormListener();
    listeners.filtersAndSearch.filterByImagesListener();
}