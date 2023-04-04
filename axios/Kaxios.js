class Kaxios {
    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve({
                        data: JSON.parse(xhr.responseText),
                        status: xhr.status,
                        msg: "success",
                    })
                }
            }
            xhr.open('get', url, true)
            xhr.send(null);
        })
    }
}
export default Kaxios;