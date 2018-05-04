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
                <div class="card">
                    <div class="card-body">
                    <h3 class="card-title">${entry.name}</h3>
                    <p class="card-text">${entry.hostname}</p>
                    <p class="card-text">${entry.port}</p>
                    <p class="card-text">${entry.username}</p>
                </div>
            `, '');

            $('.card-columns').html(html);
        }
    });

    request.fail(function( jqXHR, textStatus ) {
        //alert( "Request failed: " + textStatus );
        // log error and prompt user with an error message
    });
});
