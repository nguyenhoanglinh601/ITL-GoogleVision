$(document).ready(function () {
    //show edit-mode
    $('.showEditMode').on('click', function (e) {
        e.preventDefault();
        var tableditRow =  $(this).closest('tr,.edit-action');
        var tableViewBtn = $(this).closest('tr,.edit-action').find('.tableview-btn');
        var tableEditBtn = $(this).closest('tr,.edit-action').find('.tabledit-btn');
        var tableditSpan = $(this).closest('tr,.edit-action').find('.tabledit-span');
        var tableditControl = $(this).closest('tr,.edit-action').find('.tabledit-control');
        tableditRow.addClass('tabledit-edit-mode');
        tableViewBtn.hide();
        tableEditBtn.show();
        tableditSpan.hide();
        tableditControl.show();
    });
    //hide edit mode
    $('.hideEditMode').on('click', function (e) {
        e.preventDefault();
        var tableditRow = $(this).closest('tr,.edit-action');
        var tableViewBtn = $(this).closest('tr,.edit-action').find('.tableview-btn');
        var tableEditBtn = $(this).closest('tr,.edit-action').find('.tabledit-btn');
        var tableditSpan = $(this).closest('tr,.edit-action').find('.tabledit-span');
        var tableditControl = $(this).closest('tr,.edit-action').find('.tabledit-control');
        tableditRow.removeClass('tabledit-edit-mode');
        tableViewBtn.show();
        tableEditBtn.hide();
        tableditSpan.show();
        tableditControl.hide();
    });
});