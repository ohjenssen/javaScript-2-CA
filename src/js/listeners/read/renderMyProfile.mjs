import { read } from "../../api/index.mjs";
import { profileTemplates } from "../../renderingTemplates/index.mjs";

/**
 * Renders user profile based on media.
 */
export async function renderMyProfile(){
    const myProfileContainer = document.querySelector('#myProfile');
    const myProfile = await read.getMyProfile();

    const banner = myProfile.banner;
    const avatar = myProfile.avatar;
    const userName = myProfile.name;
    const followers = myProfile.followers;
    const following = myProfile.following;

    if (myProfile.avatar && myProfile.banner){

        myProfileContainer.innerHTML += profileTemplates.profileWithAvatarAndBanner(banner, avatar, userName, followers, following);

    } else if (myProfile.avatar){

        myProfileContainer.innerHTML += profileTemplates.profileWithAvatar(avatar, userName, followers, following)

    } else if(myProfile.banner){

        myProfileContainer.innerHTML += profileTemplates.profileWithBanner(banner, userName, followers, following);

    } else if (!myProfile.banner && !myProfile.avatar){

        myProfileContainer.innerHTML += profileTemplates.profileWithoutMedia(userName, followers, following);

    }
}