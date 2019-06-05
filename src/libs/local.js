// 设置本地存储
let util = {
    setlocal: (key, value) => {
        localStorage[key] = value;
    },
    getlocal: key => localStorage[key],
};
export default util;
