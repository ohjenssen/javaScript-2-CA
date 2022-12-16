const checkbox = document.querySelector('#checkboxAZ');

function filterAlphabetically(){
    const posts = document.querySelectorAll('.blog-post');
    const title = document.querySelectorAll('blog-post-title');

    if(checkbox.checked){
        console.log('checkbox is checked');
    }

    if(!checkbox.checked){
        console.log('checkbox is not checked');
    }
}

export const filterAlphabeticallyListener = () => {
    const filterForm = document.querySelector('#filterFormAlphabetical');

    if(filterForm){
        checkbox.addEventListener('change', (event) => {
            event.preventDefault();
            filterAlphabetically();
        })
    }
}