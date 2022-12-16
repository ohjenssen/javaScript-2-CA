import { read } from "../../api/index.mjs";
import { profileTemplates } from "../../renderingTemplates/index.mjs"; 

export const renderProfile = async () => {
    const profile = await read.getProfile();
    const profileContainer = document.querySelector('#profile');

    const userName = profile.name;
    const banner = profile.banner;
    const avatar = profile.avatar;
    const followers = profile.followers;
    const following = profile.following;

    if (profile.avatar && profile.banner){

        profileContainer.innerHTML += profileTemplates.profileWithAvatarAndBanner(banner, avatar, userName, followers, following);

    } else if (profile.avatar){

        profileContainer.innerHTML += profileTemplates.profileWithAvatar(avatar, userName, followers, following)

    } else if(profile.banner){

        profileContainer.innerHTML += profileTemplates.profileWithBanner(banner, userName, followers, following);

    } else if (!profile.banner && !profile.avatar){

        profileContainer.innerHTML += profileTemplates.profileWithoutMedia(userName, followers, following);

    }

}