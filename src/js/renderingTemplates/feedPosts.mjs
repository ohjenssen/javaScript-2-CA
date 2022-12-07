/**
 * Renders a posttemplate with the following arguments
 * @param {string} title 
 * @param {string} body 
 * @param {string} imageSrc 
 * @param {string} date 
 * @param {string} author 
 * @param {string} postId 
 * @returns {string} Returns a string tht can be used as HTML
 * @example
 * ´´´
 * const myTitle = 'Hello world!';
 * const myBody = 'This is a post';
 * const myImageSrc = url;
 * postContainer.innerHTML += feedPosts(myTitle, myBody, myImageSrc)
 * ´´´
 */
export const feedPosts = (title, body, imageSrc, date, author, postId) => {
    const postTemplate =  `
                            <article class="blog-post">
                                <h3 class="blog-post-title">${title}</h3>
                                <p class="blog-post-meta fst-italic">${date} by
                                <a href="">${author}</a>
                                <img src="../images/profile-image-icon.webp" class="post-profile-image">
                                </p>
                                <div class="">
                                    <p>${body}</p>
                                    <img src="${imageSrc}" class="mb-3 postImage rounded-1" style="max-width: 200px;">
                                </div>
                                <a class="btn btn-primary" href="../specificPost/?id=${postId}">View post</a>
                                <hr>
                            </article>

                        `;

                        return postTemplate;
} 