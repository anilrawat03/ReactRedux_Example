export const setLoggeduserToken = (token) => {
    localStorage.setItem("authtoken",token);
}
export const getLoggeduserToken = () => {
    return localStorage.getItem("authtoken");
}
export const clearloggeduserdetail = () => {
    localStorage.clear();
}