import { getAccessToken } from "../../localStorage/getAccessToken.mjs";

/**
 * Api call that deletes the selected post. When button is clicked the post gets deleted and
 * the user is relocated to the profile page(same page)
 * @param {number} postId Post ID to selct the right post for deletion
 * @example 
 * ´´´
 * const id = 20;
 * deletePost(id);
 * ´´´
 */
export async function deletePost(postId){
    const deletePostUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postId}`;

    const deletePostData = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`,
        }
    }

    const response = await fetch(deletePostUrl, deletePostData);
    if(response.ok){
        document.location.href = '/user/userProfile/';
    }

}