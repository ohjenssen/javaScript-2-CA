const checkbox = document.querySelector('#checkboxImages')

/**
 * Checks if the source attribute is null or empty upon checking the image box
 */
function filterByImages(){
    const posts = document.querySelectorAll('.blog-post')
    const postImages = document.querySelectorAll('.postImage')

    if(checkbox.checked){
        for (let i = 0; i < postImages.length; i++){
            if (postImages[i].getAttribute('src') === '' || postImages[i].getAttribute('src') === 'null'){
                posts[i].style.display = 'none';
            }
        }
    }

    if(!checkbox.checked){
        for (let i = 0; i < posts.length; i++){
            posts[i].style.display = '';
        }
    }

        
}

/**
 * Adds a listener for filterByImages function.
 */
export const filterByImagesListener = () => {
    const filterForm = document.querySelector('#filterForm');
    
    if(filterForm){
        checkbox.addEventListener('change', (event) => {
            event.preventDefault();
            filterByImages();
        })
    }

}