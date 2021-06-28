var province_list = {
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

$('#province-listing-table').DataTable({
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
    "data": province_list.data,
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
            "data": "status",
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
                return `<a class="btn btn-ftl-icon btn-edit" href="#edit-ward-modal" data-toggle="modal" title="Chỉnh sửa">
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
