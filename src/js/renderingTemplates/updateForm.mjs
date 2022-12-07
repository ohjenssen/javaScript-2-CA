/**
 * Renders an update form 
 * @param {string} title 
 * @param {string} body 
 * @param {array} tags An array of strings that gets joined together in a single string when rendefed
 * @param {string} media Has to be a url link
 * @returns {string} to be used as HTML
 * @example 
 * ´´´
 * postTitle = 'Hello world';
 * postBody = 'This is a post';
 * tags = ["cool", "funny", "awesome"];
 * media = 'urlImage.url';
 * 
 * postContainer.innerHtml += udpdateForm(postTitle, postBody, tags, media);
 * ´´´
 */
export const updateForm = (title, body, tags, media) => {
                            const postTemplate = `
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input type="text" class="form-control" id="title" placeholder="Enter title" name="title" value="${title}" required>
                                <div class="valid-feedback">Title is here</div>
                                <div class="invalid-feedback">Please add a title</div>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="body" class="form-label">Body</label>
                                <textarea class="form-control" id="title" placeholder="Whats on your mind?" name="body">${body}</textarea>
                            </div>
                            <div class="mb-3">
                                <label for="tags" class="form-label">Tags</label>
                                <input type="text" class="form-control" id="tags" placeholder="Add some tags!" name="tags" value="${tags.join(' ')}">
                            </div>
                            <div class="mb-3">
                                <label for="image" class="form-label">Image</label>
                                <input type="text" class="form-control" id="imageInput" placeholder="Enter url imagelink" name="media" value="${media}">
                            </div>
                            <button type="submit" class="btn btn-primary">Update Post</button>
                        `;

return postTemplate;
}