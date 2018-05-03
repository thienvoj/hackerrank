// will set timeout for api in step 4, when using React and axios instead of fetch
document.getElementById("fetch").addEventListener("click", function() {
    let url = "http://api.test.com/download/request?host=2";

    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById("display-result").innerHTML = data;
    })
    .catch(error => {
        // log error and prompt user with an error message
    });
});