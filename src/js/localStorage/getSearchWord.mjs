/**
 * Gets the search word from local storage to be used in search function
 * @returns {string} Returns search word
 */
export function getSearchWord(){
    const searchWord = localStorage.getItem('searchWord')
    return searchWord;
}