import { read } from "../../api/index.mjs";
import { updateProfile } from "../../renderingTemplates/index.mjs";

/**
 * Renders the updateProfile form if updateprofile container exists
 */
export async function renderUpdateProfile(){
    const updateProfileContainer = document.querySelector('#updateProfile');
    if (updateProfileContainer){
        const profileInfo = await read.getMyProfile();
        const banner = profileInfo.banner;
        const avatar = profileInfo.avatar;

        updateProfileContainer.innerHTML += updateProfile(banner, avatar);
    }
}