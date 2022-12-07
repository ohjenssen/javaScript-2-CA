import { getSearchWord } from "../../localStorage/getSearchWord.mjs";
import { read } from "../../api/index.mjs";
import { feedPosts } from "../../renderingTemplates/index.mjs";

/**
 * Renders posts based on searchword
 * @param {array} posts Array of objects
 */
export async function renderSearchPosts(posts){
    const searchResultsContainer = document.querySelector('#searchResults')
    posts = await read.getPosts();

    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    
    if (searchResultsContainer){
        
        
        const searchResults = posts.filter((element) => {
            const title = element.title;
            const titleMatch = title.toLowerCase().match(getSearchWord().toLowerCase());

            const body = element.body;
            const media = element.media;
            const author = element.author["name"];
            const date = element.created;
            const convertedDate = new Date(date).toLocaleDateString('en-GB', options);

            const postId = element.id;
            
            if (titleMatch){

                searchResultsContainer.innerHTML += feedPosts(title, body, media, convertedDate, author, postId);
                return element

            } 
        })

        if(searchResults.length < 1){
            searchResultsContainer.innerHTML += `

                                                <article class="blog-post">
                                                    <h2>Sorry, no results for "${getSearchWord()}".</h2>
                                                </article>`;

        }
    }
}