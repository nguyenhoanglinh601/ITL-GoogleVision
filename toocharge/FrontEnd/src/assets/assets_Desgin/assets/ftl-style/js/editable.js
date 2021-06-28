$(document).ready(function () {
    //show edit-mode
    $('.showRowEditMode').on('click', function (e) {
        e.preventDefault();
        var tableditRow = $(this).closest('.edit-row-action');
        var tableViewBtn = $(this).closest('.edit-row-action').find('.rowview-btn');
        var tableEditBtn = $(this).closest('.edit-row-action').find('.rowedit-btn');
        var tableditSpan = $(this).closest('.edit-row-action').find('.rowedit-span');
        var tableditControl = $(this).closest('.edit-row-action').find('.rowedit-control');
        tableditRow.addClass('rowedit-edit-mode');
        tableViewBtn.hide();
        tableEditBtn.show();
        tableditSpan.hide();
        tableditControl.show();
    });
    //hide edit mode
    $('.hideRowEditMode').on('click', function (e) {
        e.preventDefault();
        var tableditRow = $(this).closest('.edit-row-action');
        var tableViewBtn = $(this).closest('.edit-row-action').find('.rowview-btn');
        var tableEditBtn = $(this).closest('.edit-row-action').find('.rowedit-btn');
        var tableditSpan = $(this).closest('.edit-row-action').find('.rowedit-span');
        var tableditControl = $(this).closest('.edit-row-action').find('.rowedit-control');
        tableditRow.removeClass('rowedit-edit-mode');
        tableViewBtn.show();
        tableEditBtn.hide();
        tableditSpan.show();
        tableditControl.hide();
    });
});