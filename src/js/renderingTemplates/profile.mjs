/**
 * Renders a post template with both an avatar and a banner
 * @param {string} banner Has to be a url link
 * @param {string} avatar Has to be a url link
 * @param {string} name 
 * @param {array} followers An array containing objects
 * @param {array} following An array containing objects
 * @returns {string} Returns a string that can be used as HTML
 * @example
 * ´´´
 * banner = 'someUrl.url';
 * avatar = 'someUrl.url';
 * name = 'John Doe';
 * followers = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ];
 * * following = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ]
 * profileWithAvatrAndBanner(banner, avatar, name, followers, following)
 * ´´´
 */
export const profileWithAvatarAndBanner = (banner, avatar, name, followers, following) => {
    const postTemplate = `
                            <div class="card mb-3" style="max-width: 800px;">
                                <div class="row g-0">
                                    <img src="${banner}" class="card-img-top mt-0 pt-0" alt="profile-banner">
                                    <div class="col-4">
                                        <img src="${avatar}" class="img-fluid rounded-start" alt="profile picture" style="height:100%;">
                                    </div>
                                    <div class="col-4">
                                        <div class="card-body">
                                        <h5 class="card-title">Name: ${name}</h5>
                                        <p class="card-text">Followers: ${followers.length}</p>
                                        <p class="card-text">Following: ${following.length}</p>
                                        <a class="btn btn-warning" href="../updateProfile">Edit profile</a>
                                    </div>
                                </div>
                            </div>
                        `;

    return postTemplate;
}


/**
 * Renders a post template with an avatar
 * @param {string} avatar Has to be a url link
 * @param {string} name 
 * @param {array} followers An array containing objects
 * @param {array} following An array containing objects
 * @returns {string} Returns a string that can be used as HTML
 * @example
 * ´´´
 * avatar = 'someUrl.url';
 * name = 'John Doe';
 * followers = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ];
 * * following = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ]
 * profileWithAvatrAndBanner(banner, avatar, name, followers, following)
 * ´´´
 */
export const profileWithAvatar = (avatar, name, followers, following) => {
    const postTemplate = `
                            <div class="card mb-3" style="max-width: 800px;">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img src="${avatar}" class="img-fluid rounded-start" alt="profile picture" style="height:100%;">
                                    </div>
                                    <div class="col-4">
                                        <div class="card-body">
                                        <h5 class="card-title">Name: ${name}</h5>
                                        <p class="card-text">Followers: ${followers.length}</p>
                                        <p class="card-text">Following: ${following.length}</p>
                                        <a class="btn btn-warning" href="../updateProfile">Edit profile</a>
                                    </div>
                                </div>
                            </div>
                        `;

    return postTemplate;
}


/**
 * Renders a profile with a banner
 * @param {string} banner Has to be a url link
 * @param {string} name 
 * @param {array} followers An array containing objects
 * @param {array} following An array containing objects
 * @returns {string} Returns a string that can be used as HTML
 * @example
 * ´´´
 * banner = 'someUrl.url';
 * name = 'John Doe';
 * followers = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ];
 * * following = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ]
 * profileWithAvatrAndBanner(banner, avatar, name, followers, following)
 * ´´´
 */
export const profileWithBanner = (banner, name, followers, following) => {
    const postTemplate = `
                            <div class="card mb-3" style="max-width: 800px;">
                            <img src="${banner}" class="card-img-top mt-0 pt-0" alt="profile-banner">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <div class="card-body">
                                        <h5 class="card-title">Name: ${name}</h5>
                                        <p class="card-text">Followers: ${followers.length}</p>
                                        <p class="card-text">Following: ${following.length}</p>
                                        <a class="btn btn-warning" href="../updateProfile">Edit profile</a>
                                    </div>
                                </div>
                            </div>
                        `;

    return postTemplate;
}



/**
 * Renders a profile without any media
 * @param {string} name 
 * @param {array} followers An array containing objects
 * @param {array} following An array containing objects
 * @returns {string} Returns a string that can be used as HTML
 * @example
 * ´´´
 * name = 'John Doe';
 * followers = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ];
 * * following = [
 *      {name: 'OlaNordmann, avatar: 'http://something.url'},
 *      {name: 'OlaNordmann, avatar: 'http://something.url'} 
 * ]
 * profileWithAvatrAndBanner(banner, avatar, name, followers, following)
 * ´´´
 */
export const profileWithoutMedia = (name, followers, following) => {
    const postTemplate = `
                            <div class="card mb-3" style="max-width: 800px;">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <div class="card-body">
                                        <h5 class="card-title">Name: ${name}</h5>
                                        <p class="card-text">Followers: ${followers.length}</p>
                                        <p class="card-text">Following: ${following.length}</p>
                                        <a class="btn btn-warning" href="../updateProfile">Edit profile</a>
                                    </div>
                                </div>
                            </div>
                        `;

    return postTemplate;
}