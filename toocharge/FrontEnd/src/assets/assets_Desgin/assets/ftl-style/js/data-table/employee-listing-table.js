var employee_list = {
    "data": [{
            "stt": "1",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "2",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "3",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "4",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "5",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "6",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "7",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "8",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "9",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "10",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        },
        {
            "stt": "11",
            "code": "P00000043",
            "name-vi": "Hà Nội",
            "name-en": "Hanoi",
            "area": "Miền Bắc",
            "country": "Việt Nam",
            "status": "active"
        }
    ]
};

function format(d) {
    return '<div class="detail-panel-block" style="display: block">' +
                '<div class="row detail-row">' +
                    '<div class="col-xs-6">' +
                        '<span>District: Bình Chánh</span>' +
                        '<span>Province/City: Hồ Chí Minh</span>' +
                        '<span>Country: Việt Nam</span>' +
                    '</div>' +
                    '<div class="col-xs-6">' +
                        '<span>Branch: Chi nhánh Đà Nẵng</span>' +
                        '<div class="signature-img">' + 
                            '<img src="../assets/ftl-style/images/icons/img-default.png"' +
                        '</div>' +
                    '</div>'
               '</div>' +
            '</div>'
}

function tableDatatableCollapse() {
    var table = $('#employee-listing-table').DataTable({
        "searching": false,
        "dom": '<"table-top"f>r<"table-scrollable"t><"table-footer row"<"col-md-4"i><"col-md-3 text-right"l><"col-md-5"p>><"clear">',
        "language": {
            "search": '',
            "searchPlaceholder": 'Tìm kiếm',
            "info": 'Hiển thị _START_ đến _END_ của _TOTAL_ dòng',
            "lengthMenu": 'Hiển thị <select class="form-control">' +
                '<option value="10">10 dòng/trang</option>' +
                '<option value="20">50 dòng/trang</option>' +
                '<option value="30">100 dòng/trang</option>' +
                '</select>',
            "paginate": {
                "sPrevious": "", // This is the link to the previous page
                "sNext": "", // This is the link to the next page
            },
            "sProcessing": '<div class="text-center"><img src="../assets/ftl-style/images/icons/loading-icon.gif"></div>',
            "emptyTable": '<div class="text-center"><div class="m-t-20"><img src="../assets/ftl-style/images/icons/no-data-icon.png"></div><p class="m-t-20 m-b-20">Không có dữ liệu</p></div>'
        },
        "order": [],
        "columnDefs": [{
            "orderable": false,
            "targets": ['no-sort']
        }],
        "orderCellsTop": true,
        "data": testdata.data,
        "columns": [
            {
                "className": "text-center",
                "data": "stt"
            },
            { "data": "code" },
            { "data": "name-vi" },
            { "data": "name-en" },
            { "data": "area" },
            { "data": "country" },
            {
                "className": "no-sort text-center",
                "data": "active",
                "render": function() {
                    return `<input type="checkbox" class="js-switch" checked />`;
                }
            },
            {
                "className": 'table-action-col',
                "orderable": false,
                "orderCellsTop": true,
                "data": null,
                "defaultContent": '',
                "render": function() {
                    return `<a class="btn btn-ftl-icon btn-collapse" href="" data-toggle="modal" title="Chi tiết">
                                <i class="icon-chevron-down"></i>
                            </a>
                            <a class="btn btn-ftl-icon btn-edit" href="#edit-ward-modal" data-toggle="modal" title="Chỉnh sửa">
                                <i class="icon-edit-3"></i>
                            </a>
                            <a class="btn btn-ftl-icon btn-delete" href="#remove-modal" data-toggle="modal" title="Xóa">
                                <i class="icon-trash-2"></i>
                            </a>`;
                },
                width: "80px"
            }
        ],
    });

    // Add event listener for opening and closing details
    $('#employee-listing-table tbody').on('click', '.table-action-col .btn-collapse', function() {
        var tr = $(this).closest('tr');
        var tdi = tr.find('i');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
            tdi.first().removeClass('icon-chevron-up');
            tdi.first().addClass('icon-chevron-down');
        } else {
            // Open this row
            row.child(format(row.data()), 'collapse-panel-row').show();
            tr.addClass('shown');
            tdi.first().removeClass('icon-chevron-down');
            tdi.first().addClass('icon-chevron-up');
        }
    });
}
tableDatatableCollapse();