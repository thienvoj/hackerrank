document.getElementById("fetchButton").addEventListener("click", function() {
    fetch("https://www.mocky.io/v2/5ae8b2652d000042117b49a2?host=2")
    .then(function(response) {
        response.text().then(function(responseText) {
            document.getElementById("result").innerHTML = responseText;
        });
    })
    .catch(function(error) {
        document.getElementById("result").innerHTML = responseText;
    });
});
