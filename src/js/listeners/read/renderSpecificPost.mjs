import { read } from "../../api/index.mjs";
import { updateForm } from "../../renderingTemplates/updateForm.mjs";
import { specificPost } from "../../renderingTemplates/index.mjs";


/**
 * 
 * @param {object} post An object containing key value pairs for the post
 */
export async function renderSpecificPost(post){
    post = await read.getSpecificPost()
    const headTitle = document.querySelector('title');
    const postFeedContainer = document.querySelector('#singlePostFeed');
    const form = document.querySelector('#updatePost');
    const path = location.pathname;

    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }

    const title = post.title;
    const body = post.body;
    const tags = post.tags;
    const media = post.media;
    const author = post.author.name;            
    const date = post.created;
    const convertedDate = new Date(date).toLocaleDateString('en-GB', options);

    switch(path){
        case '/user/updatePost/':
            form.innerHTML += updateForm(title, body, tags, media);
            break;

        case '/specificPost/':
            headTitle.innerHTML = `${post.title} | Square Eyes`;
            if (post.media){
                postFeedContainer.innerHTML = specificPost.postWithMedia(title, convertedDate, author, body, media);
    
            } else if (!post.media){
                postFeedContainer.innerHTML = specificPost.postWithoutMedia(title, convertedDate, author, body);
                
            }
    }
}