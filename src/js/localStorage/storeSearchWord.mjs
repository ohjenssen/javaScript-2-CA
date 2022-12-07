/**
 * Stores searchword
 */
export function storeSearchWord(){
    const searchBar = document.querySelector('#searchBar');

    if(searchBar){
        localStorage.setItem('searchWord', searchBar.value);
    }
}