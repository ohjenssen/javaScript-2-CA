import { read } from "../../api/index.mjs";
import { deletion } from "../../api/index.mjs";
import { feedPosts } from "../../renderingTemplates/feedPosts.mjs";
import { profilePost } from "../../renderingTemplates/profilePost.mjs";

/**
 * Renders either all posts available or profile posts depending on path.
 * @param {array} posts Array of objects.
 * 
 */
export async function renderPosts(posts){
    const postsFeedContainer = document.querySelector('#postsFeed');
    const myPostsContainer = document.querySelector('#myPosts');

    const path = location.pathname;

    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }

    switch(path){
        case '/home/':
            posts = await read.getPosts();
            for (let i = 0; i < posts.length; i++){

                const title = posts[i].title;
                const body = posts[i].body;
                const imageSrc = posts[i].media;
                const postId = posts[i].id;
                const author = posts[i].author["name"];
                const date = posts[i].created;
                const convertedDate = new Date(date).toLocaleDateString('en-GB', options);

                postsFeedContainer.innerHTML += feedPosts(title, body, imageSrc, convertedDate, author, postId);

            }
        break;

        case '/user/userProfile/':
            posts = await read.getProfilePosts();
            for (let i = 0; i < posts.length; i++){

                const title = posts[i].title;
                const body = posts[i].body;
                const imageSrc = posts[i].media;
                const postId = posts[i].id;
                const date = posts[i].created;
                const convertedDate = new Date(date).toLocaleDateString('en-GB', options);

                myPostsContainer.innerHTML += profilePost(title, body, imageSrc, convertedDate, postId);

            }

            const deleteBtns = document.querySelectorAll("#deleteBtn"); 

            deleteBtns.forEach((deleteBtn, index) => deleteBtn.addEventListener('click', (event) => {
                
                const postId = posts[index].id;
                deletion.deletePost(postId);
            }))
        break;

    }
}