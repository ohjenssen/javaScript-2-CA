/**
 * 
 * Renders a post on the profile page of the user. Adds a 'update' and 'delete' button to the post, and a hidden modal for deletion.
 * @param {string} title
 * @param {string} body
 * @param {string} imageSrc Has to be a url link.
 * @param {string} date
 * @param {number} postId
 * @returns {string} Returns a string that can be used as HTML.
 * @example
 * ´´´
 * proilePost('Hello world!', 'This is a post', 'urlImage.url', 'Wednesday, 7 December 2022', 423);
 * ´´´
 */
export const profilePost = (title, body, imageSrc, date, postId) => {
    const postTemplate =    `
                            <article class="blog-post">
                                <h4 class="blog-post-title">${title}</h3>
                                <p class="blog-post-meta fst-italic">${date} by
                                <a href="#">me</a>
                                <img src="../images/profile-image-icon.webp" class="post-profile-image">
                                </p>
                                <div class="">
                                    <p>${body}</p>
                                    <img src="${imageSrc}" class="mb-3 postImage" style="max-width: 200px;">
                                </div>
                                <a class="btn btn-primary" href="../../specificPost/?id=${postId}">View post</a>
                                <a class="btn btn-warning" href="../updatePost/?id=${postId}">Update post</a>
                                <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#deleteModal${postId}">Delete</button>
                                <hr>
                            </article>

                            <div class="modal fade" id="deleteModal${postId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content bg-secondary">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Delete Post ${postId}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Are you sure you want to delete this post?</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" data-bs-dismiss="modal">Cancel</button>
                                            <button id="deleteBtn" type="button" class="btn btn-primary">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `;
                            return postTemplate;
}