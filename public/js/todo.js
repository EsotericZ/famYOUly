$(document).ready(function () {
    $('.date').each(function() { 
        var dateFormat = $(this).text()
        // var dateFormat = $.datepicker.formatDate('yy/mm/dd', new Date(dateFormat));
        var dateFormat = $.datepicker.formatDate('DD, M d, yy', new Date(dateFormat));
        $(this).html(dateFormat + "<br>");
    });
});