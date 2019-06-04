let util = {
    setlocal: (key, value) => {
        localStorage[key] = JSON.stringify(value)
    },
    getlocal: (key) => JSON.parse(localStorage[key])
}
export default util