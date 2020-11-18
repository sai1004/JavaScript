// https://reqres.in/

const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHTTPRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.send();
    });
    return promise;
};

const getData = () => {
    sendHTTPRequest("GET", "https://reqres.in/api/users").then((responseData) => {
        console.log(responseData);
        var data = responseData.data;
        console.log(data);

        data.forEach((item) => {
            let element = document.createElement("h4");
            element.textContent = item.email;
            document.body.appendChild(element);
        });
    });
};

getBtn.addEventListener("click", getData);

const sendData = () => {};
