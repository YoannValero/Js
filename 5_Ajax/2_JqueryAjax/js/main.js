$(document).ready(function () {
   
    $('a').click(function () {
        let target = $(this).attr('data-adr');
        $.get(target, function (data) {
            $('a').each(function () {
                $('#page').html(data);
            });
        });
    });
});

