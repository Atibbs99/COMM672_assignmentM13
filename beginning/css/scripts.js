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
})