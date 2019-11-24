setTimeout(function () {
    $('#overlay').on('load', function () {
        $('#overlay').contents().find('#WIX_ADS').hide();
        $('#overlay').contents().find('#SITE_HEADER').hide();
    })
}, 3000);
