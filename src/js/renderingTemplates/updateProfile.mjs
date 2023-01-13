/**
 * Renders an update form 
 * @param {string} banner Has to be a url link
 * @param {string} avatar Has to be a url link
 * @returns {string} to be used as HTML
 * @example 
 * ´´´
 * banner = 'urlImage.url';
 * avatar = 'urlImage.url';
 * 
 * postContainer.innerHtml += udpdateProfile(banner, avatar);
 * ´´´
 */
export const updateProfile = (banner, avatar) => {
    const postTemplate =
                                 `
                                <div class="mb-3">
                                    <label for="banner" class="form-label">Banner</label>
                                    <input type="text" class="form-control" id="banner" placeholder="Enter new url imagelink" name="banner" value="${banner}">
                                </div>
                                <div class="mb-3">
                                    <label for="avatar" class="form-label">Avatar</label>
                                    <input type="text" class="form-control" id="avatar" placeholder="Enter new url imagelink" name="avatar" value="${avatar}">
                                </div>
                                <button type="submit" class="btn btn-primary">Update Profile</button>
                                `;

    return postTemplate;
}