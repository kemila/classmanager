export class webclient {
    public static get = (url: string) => {
        return new Promise((resolve, reject) => {
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (json) {
                resolve(json);
            })
        });
    }
    public static post = (url: string, data: any) => {
        var fetchOptions = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        return new Promise((resolve, reject) => {
            fetch(url, fetchOptions).then((response) => response.json()).then((data) => {
                resolve(data);
            })
        })
    }
}
