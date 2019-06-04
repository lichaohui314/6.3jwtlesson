import AjaxRequest from '../libs/axios.js';
export const loginApi = (user, pass) => {
    return AjaxRequest.request({
        url: "/login",
        method: 'post',
        data: {
            user,
            pass
        }
    })
}