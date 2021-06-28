$(document).ready(function () {
    //show filter-advance
    $('.filterAdvanceToggleBtn').on('click', function (e) {
        e.preventDefault();
        var filterRow = $(this).closest('tr');
        if (!filterRow.hasClass('shown')) {
            filterRow.addClass('shown');
            filterRow.siblings('.filter-advance-row').removeClass('hidden');
        } else {
            filterRow.removeClass('shown');
            filterRow.siblings('.filter-advance-row').addClass('hidden');
        }
    });
    // collapse function for single collapse-table '.tableCollpase'
    function tableDatatableCollapse(tableClass) {
        // Add event listener for opening and closing details
        $('.btn-collapse').on('click', function (e) {
            e.preventDefault();
            var tr = $(this).closest('tr');
            if (!tr.hasClass('shown')) {
                tr.addClass('shown');
                tr.siblings('.collapse-panel-row').removeClass('hidden');
            } else {
                tr.removeClass('shown');
                tr.siblings('.collapse-panel-row').addClass('hidden');
            }
        });
    }
    // collapse function for multi collapse-table '.tableMultiCollpase'
    $('.collapseToggleBtn').on('click', function (e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var id = tr.data('id');
        if (!tr.hasClass('shown')) {
            tr.addClass('shown');
            tr.siblings('tr[data-parent="' + id + '"]').removeClass('hidden');
        } else {
            tr.removeClass('shown');
            if (tr.hasClass('collapse-level-1')) {
                tr.siblings('tr').removeClass('shown').addClass('hidden');
            } else {
                tr.siblings('tr[data-parent="' + id + '"]').addClass('hidden');
            }
        }
    });
    //panel-collapse used in Buying-buying-per-trip
    $('.collapseControl').on('click', function (e) {
        e.preventDefault();
        var collapseTR = $(this).closest('.collapse-toggle-row');
        if (!collapseTR.hasClass('shown')) {
            collapseTR.addClass('shown');
            collapseTR.siblings('.collapse-block-row').removeClass('hidden');
        } else {
            collapseTR.removeClass('shown');
            collapseTR.siblings('.collapse-block-row').addClass('hidden');
        }
    });

    // add class '.selected' to the choosen icon in modal menu
    $('.result-icon').on('click', function (e) {
        e.preventDefault();
        $('.result-icon').removeClass('selected');
        $(this).addClass('selected');
    })

    tableDatatableCollapse('.tableCollapse');
});