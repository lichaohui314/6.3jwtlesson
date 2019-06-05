import AjaxRequest from '../libs/axios.js'
export const loginApi = (user, pass) => {
  return AjaxRequest.request({
    url: '/login',
    method: 'post',
    data: {
      user,
      pass
    }
  })
}
// 验证是否登录的请求
export const isloginApi = () =>
  AjaxRequest.request({
    url: '/validate',
    method: 'post'
  })
