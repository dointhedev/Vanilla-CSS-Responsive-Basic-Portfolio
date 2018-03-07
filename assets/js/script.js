$( document ).ready(function() {
    var hamBurg = $('#hamburger');
    var crs = $('#cross');
    var topnav = $('.topnav');
    console.log(hamBurg);
    console.log(crs);
    console.log(topnav);

    $(hamBurg).click(function() {
            $(this).hide();
            $(crs).show();
            $(topnav).slideToggle();
          });
          $(crs).click(function() {
            $(this).hide();
            $(hamBurg).show();
            $(topnav).slideToggle();
          });
    
        });
    
