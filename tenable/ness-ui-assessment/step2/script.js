$('#fetch').click((e) => {
    let url = "http://api.test.com/download/request?host=2";

    var request = $.ajax({
        url: url,
        method: "GET",
        timeout: 300
    });

    request.done((res) => {
        let data = res && res["configurations"];
        if (data) {
            const html = data.reduce((result, entry) => `
                ${result}
                <div class="host">
                    <h3 class="name">${entry.name}</h3>
                    <p class="hostname">${entry.hostname}</p>
                    <p class="port">${entry.port}</p>
                    <p class="username">${entry.username}</p>
                </div>
            `, '');

            $('#display-result').html(html);
        }
    });

    request.fail(function( jqXHR, textStatus ) {
        //alert( "Request failed: " + textStatus );
        // log error and prompt user with an error message
    });
});
