/**
 * Gets the accestoken from local storage to be used in authentication
 * @returns {string}
 */
export const getAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
}