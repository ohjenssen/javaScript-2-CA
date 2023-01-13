import { storeSearchWord } from "../../localStorage/storeSearchWord.mjs";

/**
 * Adds a listener for the searchForm component. On submit it stores the search word and relocates the user to the searchresults page.
 */
export function setSearchFormListener(){
    const searchForm = document.querySelector('#searchForm');

    if (searchForm){
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            storeSearchWord();
            window.location.assign('../../searchResults');
        })

    }
}
