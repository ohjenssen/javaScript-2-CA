/**
 * 
 * @param {string} title 
 * @param {string} date 
 * @param {string} author 
 * @param {string} body 
 * @param {string} media Has to be a url link
 * @returns {string} to be used as HTML
 * @example 
 * ´´´
 * postTitle = 'Hello world';
 * postDate = 'Wednesday, 7 December 2022';
 * postAuthor = 'John Doe';
 * postBody = 'This is a post';
 * media = 'urlImage.url';
 * 
 * postContainer.innerHtml += postWithMedia(postTitle, postDate, postAuthor, postBody, media);
 * ´´´
 */
export const postWithMedia = (title, date, author, body, media) => {
    const postTemplate = `
                            <article class="blog-post">
                                <h4 class="blog-post-title">${title}</h3>
                                <p class="blog-post-meta fst-italic">${date} by
                                    <a href="#">${author}</a>
                                    <img src="../images/profile-image-icon.webp" class="post-profile-image">
                                </p>
                                <div class="">
                                    <p>${body}</p>
                                    <img src="${media}" class="mb-3 postImage" style="max-width: 200px;">
                                </div>
                                <hr>
                            </article>
                        `;

    return postTemplate;
}

/**
 * 
 * @param {string} title 
 * @param {string} date 
 * @param {string} author 
 * @param {string} body 
 * @returns {string} to be used as HTML
 * @example 
 * ´´´
 * postTitle = 'Hello world';
 * postDate = 'Wednesday, 7 December 2022';
 * postAuthor = 'John Doe';
 * postBody = 'This is a post';
 * media = 'urlImage.url';
 * 
 * postContainer.innerHtml += postWithMedia(postTitle, postDate, postAuthor, postBody);
 * ´´´
 */
export const postWithoutMedia = (title, date, author, body) => {
    const postTemplate = `
                            <article class="blog-post">
                                <h4 class="blog-post-title">${title}</h3>
                                <p class="blog-post-meta fst-italic">${date} by
                                    <a href="#">${author}</a>
                                    <img src="../images/profile-image-icon.webp" class="post-profile-image">
                                </p>
                                <div class="">
                                    <p>${body}</p>
                                </div>
                                <hr>
                            </article>
                        `;

    return postTemplate;
}
