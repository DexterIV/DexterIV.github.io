setTimeout(function () {
    $('#overlay').on('load', function () {
        $('#overlay').contents().find('#WIX_ADS').remove();
    })
}, 3000);
