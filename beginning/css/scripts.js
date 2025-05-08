$(document).ready(function() {
    //Open Modal
    $('.open-modal-btn').click(function() {
        var targetModal = $(this).data("target");
            $(targetModal).show();
    })

    //Close Modal
    $('.close-btn').click(function() {
        $(this).closest('.modal').hide();
    })

    //Open Accordion
    $('.accordion-header').click(function() {
        if ($(this).next('.accordion-content').is
        (':visible')) {
            $(this).next('.accordion-content').slideUp();
        } else {
            $('.accordion-content').slideUp();
            $(this).next('.accordion-content').slideDown();
        }  
    });

    //Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    })
});
