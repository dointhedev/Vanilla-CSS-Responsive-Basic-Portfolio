$(document).ready(function () {
    var hamBurg = $('#hamburger');
    var topnav = $('.nav-collapse');
    $(hamBurg).on('click', mblMenu);

    function mblMenu() {
        if ($(hamBurg).data("ishidden") === false) {
            $(topnav).slideToggle();
            $(hamBurg).data("ishidden", true)
        } else {
            $(hamBurg).data("ishidden", false)
            $(topnav).slideToggle();
            $(topnav).toggleClass("open");
        }
    }
});



