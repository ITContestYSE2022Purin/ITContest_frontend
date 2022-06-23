const request = new XMLHttpRequest();
const url = "https://b67dcd6aab.execute-api.ap-northeast-1.amazonaws.com/default/AWS_Test";

request.open("GET", url, true);
request.responseType = "json";

request.onload = function () {
    var response = request.response;
    console.log(response["message"]);
};

request.send();
