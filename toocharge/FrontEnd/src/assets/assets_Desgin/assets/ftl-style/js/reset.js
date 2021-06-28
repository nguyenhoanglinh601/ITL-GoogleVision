$(document).ready(function() {
    //clear data form on modal
    $('.clearFormBtn').click(function(e) {
        $(this).closest('.modal-dialog').find('input').val('');
        //clear src of signature-img when add new employee
        $(this).closest('.modal-dialog').find('.photo-content').attr('src', '../assets/ftl-style/images/icons/img-default.png');
    });
});
