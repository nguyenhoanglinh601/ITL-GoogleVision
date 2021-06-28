$(document).ready(function() {
    // collapse function for single collapse-table '.tableCollpase'
    function tableCollpase() {
        if ($('.tableCollapse').length > 0) {
            $('.tableCollapse').children().children().each(function(i) {
                $('.parent-' + i).on('click', function() {
                    $('.child-' + i).toggle();
                    $('.parent-' + i).find('.fa').toggleClass('fa-arrow-circle-down fa-arrow-circle-up');
                });
            });
        }
    }
    // collapse function for multi collapse-table '.tableMultiCollpase'
    function tableMultiCollpase() {
        if ($('.tableMultiCollpase').length > 0) {
            $('.tableMultiCollpase').children().children().each(function(i) {
                $('.parent-' + i).on('click', function() {
                    $('.child-' + i).toggle();
                    $('.parent-' + i).find('.fa').toggleClass('fa-arrow-circle-down fa-arrow-circle-up');
                });
            });
        }
    }

    tableCollpase();
});
