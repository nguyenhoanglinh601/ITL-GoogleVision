$(document).ready(function() {
    function getDataToModal() {
        var title = '';
        var desc = '';
        var priority = '';
        var goods_lot = '';
        var file_path = '';
        var file_name = '';
        $('.tableFeedback').find('.table-title-col').on('click', function() {
            title = $(this).children().text();
            desc = $(this).siblings('.table-col-desc').text();
            priority = $(this).siblings('.table-col-priority').text();
            goods_lot = $(this).siblings('.table-col-goodslot').children().text();
            var file_path = $(this).siblings('.table-col-file').text();
            file_name = file_path.substring(file_path.lastIndexOf('/') + 1);
            $("#detail-feedback-modal").find('.title').text(title);
            $("#detail-feedback-modal").find('.desc').text(desc);
            $("#detail-feedback-modal").find('.priority').text(priority);
            $("#detail-feedback-modal").find('.goods_lot').text(goods_lot);
            $("#detail-feedback-modal").find('.file-name').val(file_name);
            $("#detail-feedback-modal").find('.file-link').attr('href', file_path);
        });
    }

    function tableDatatable() {
        //datatable full option
        var table = $('.listviewDatatable').DataTable({
            "dom": '<"table-top"f>r<"table-scrollable"t><"table-footer row"<"col-md-4"i><"col-md-3 text-right"l><"col-md-5"p>><"clear">',
            // 'dom' : "Bfrtip",
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
                    "previous": "Trang trước",
                    "next": "Trang kế",
                    "last": "Trang cuối",
                    "first": "Trang đầu"
                }
            },
            "order": [],
            "columnDefs": [{
                "orderable": false,
                "targets": ['no-sort']
            }],
            "drawCallback": function(settings) {
                getDataToModal();
            }

        });

        table.on('order.dt search.dt', function() {
            if ($(this).find('td.tableIndexCol').length) {
                table.column('.tableIndexCol', { search: 'applied', order: 'applied' }).nodes().each(function(cell, i) {
                    cell.innerHTML = i + 1;
                });
            }
        }).draw();
        //datatable on modal
        $('.modalHasDatatable').on('shown.bs.modal', function() {
            //Get the datatable which has previously been initialized
            var dataTable = $('.listviewDatatable').DataTable();
            //recalculate the dimensions
            dataTable.columns.adjust();
        });
    }

    function tableDatatableWithoutOption(tenclass, option1, option2, option3, option4, option5) {
        $(tenclass).DataTable({
            "bLengthChange": option1,
            "bPaginate": option2,
            "bInfo": option3,
            "searching": option4,
            "ordering": option5,
        });
    }

    function tableDatatableWithoutSort() {
        var table = $('.tableDatatableWithoutSort').DataTable({
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
            "data": testdata.data,
            select: "single",
            "columns": [
                { "data": "name" },
                { "data": "position" },
                { "data": "office" },
                { "data": "salary" },
                {
                    "className": 'table-action-col',
                    "orderable": false,
                    "data": null,
                    "defaultContent": '',
                    "render": function() {
                        return `<a class="btn btn-ftl-icon text-normal btn-collapse" href="" data-toggle="modal" title="Chi tiết">
                                    <i class="icon-chevron-down"></i>
                                </a>
                                <a class="btn btn-ftl-icon text-normal" href="#edit-ward-modal" data-toggle="modal" title="Chỉnh sửa">
                                    <i class="icon-edit-3"></i>
                                </a>
                                <a class="btn btn-ftl-icon text-danger" href="#remove-modal" data-toggle="modal" title="Xóa">
                                    <i class="icon-trash-2"></i>
                                </a>`;
                    },
                    width: "80px"
                }
            ],
        });

        if($('.tb-toggle').length > 0) {
            $('.tb-toggle').on('click', function(e) {

                // Get the column API object
                var column = table.column($(this).attr('data-column'));
                if ($(this).find("input").prop("checked")) {
                    column.visible(false);
                } else {
                    column.visible(true);
                }
                // Toggle the visibility
                // column.visible( ! column.visible() );
            });
        }
        // Add event listener for opening and closing details
        $('.tableDatatableWithoutSort tbody').on('click', '.table-action-col .btn-collapse', function() {
            var tr = $(this).closest('tr');
            var tdi = tr.find("i");
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
                tdi.first().removeClass('icon-chevron-up');
                tdi.first().addClass('icon-chevron-down');
            } else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
                tdi.first().removeClass('icon-chevron-down');
                tdi.first().addClass('icon-chevron-up');
            }
        });

        table.on("user-select", function(e, dt, type, cell, originalEvent) {
            if ($(cell.node()).hasClass("details-control")) {
                e.preventDefault();
            }
        });
    }

    function format(d) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr>' +
            '<td>Full name:</td>' +
            '<td>' + d.name + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extension number:</td>' +
            '<td>' + d.extn + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extra info:</td>' +
            '<td>And any further details here (images etc)...</td>' +
            '</tr>' +
            '</table>';
    }

    var testdata = {
        "data": [{
                "name": "Tiger Nixon",
                "position": "System Architect",
                "salary": "$320,800",
                "start_date": "2011/04/25",
                "office": "Edinburgh",
                "extn": "5421"
            },
            {
                "name": "Garrett Winters",
                "position": "Accountant",
                "salary": "$170,750",
                "start_date": "2011/07/25",
                "office": "Tokyo",
                "extn": "8422"
            },
            {
                "name": "Ashton Cox",
                "position": "Junior Technical Author",
                "salary": "$86,000",
                "start_date": "2009/01/12",
                "office": "San Francisco",
                "extn": "1562"
            },
            {
                "name": "Cedric Kelly",
                "position": "Senior Javascript Developer",
                "salary": "$433,060",
                "start_date": "2012/03/29",
                "office": "Edinburgh",
                "extn": "6224"
            },
            {
                "name": "Airi Satou",
                "position": "Accountant",
                "salary": "$162,700",
                "start_date": "2008/11/28",
                "office": "Tokyo",
                "extn": "5407"
            },
            {
                "name": "Brielle Williamson",
                "position": "Integration Specialist",
                "salary": "$372,000",
                "start_date": "2012/12/02",
                "office": "New York",
                "extn": "4804"
            },
            {
                "name": "Herrod Chandler",
                "position": "Sales Assistant",
                "salary": "$137,500",
                "start_date": "2012/08/06",
                "office": "San Francisco",
                "extn": "9608"
            },
            {
                "name": "Rhona Davidson",
                "position": "Integration Specialist",
                "salary": "$327,900",
                "start_date": "2010/10/14",
                "office": "Tokyo",
                "extn": "6200"
            },
            {
                "name": "Colleen Hurst",
                "position": "Javascript Developer",
                "salary": "$205,500",
                "start_date": "2009/09/15",
                "office": "San Francisco",
                "extn": "2360"
            },
            {
                "name": "Sonya Frost",
                "position": "Software Engineer",
                "salary": "$103,600",
                "start_date": "2008/12/13",
                "office": "Edinburgh",
                "extn": "1667"
            },
            {
                "name": "Jena Gaines",
                "position": "Office Manager",
                "salary": "$90,560",
                "start_date": "2008/12/19",
                "office": "London",
                "extn": "3814"
            },
            {
                "name": "Quinn Flynn",
                "position": "Support Lead",
                "salary": "$342,000",
                "start_date": "2013/03/03",
                "office": "Edinburgh",
                "extn": "9497"
            },
            {
                "name": "Charde Marshall",
                "position": "Regional Director",
                "salary": "$470,600",
                "start_date": "2008/10/16",
                "office": "San Francisco",
                "extn": "6741"
            },
            {
                "name": "Haley Kennedy",
                "position": "Senior Marketing Designer",
                "salary": "$313,500",
                "start_date": "2012/12/18",
                "office": "London",
                "extn": "3597"
            },
            {
                "name": "Tatyana Fitzpatrick",
                "position": "Regional Director",
                "salary": "$385,750",
                "start_date": "2010/03/17",
                "office": "London",
                "extn": "1965"
            },
            {
                "name": "Michael Silva",
                "position": "Marketing Designer",
                "salary": "$198,500",
                "start_date": "2012/11/27",
                "office": "London",
                "extn": "1581"
            },
            {
                "name": "Paul Byrd",
                "position": "Chief Financial Officer (CFO)",
                "salary": "$725,000",
                "start_date": "2010/06/09",
                "office": "New York",
                "extn": "3059"
            },
            {
                "name": "Gloria Little",
                "position": "Systems Administrator",
                "salary": "$237,500",
                "start_date": "2009/04/10",
                "office": "New York",
                "extn": "1721"
            },
            {
                "name": "Bradley Greer",
                "position": "Software Engineer",
                "salary": "$132,000",
                "start_date": "2012/10/13",
                "office": "London",
                "extn": "2558"
            },
            {
                "name": "Dai Rios",
                "position": "Personnel Lead",
                "salary": "$217,500",
                "start_date": "2012/09/26",
                "office": "Edinburgh",
                "extn": "2290"
            },
            {
                "name": "Jenette Caldwell",
                "position": "Development Lead",
                "salary": "$345,000",
                "start_date": "2011/09/03",
                "office": "New York",
                "extn": "1937"
            },
            {
                "name": "Yuri Berry",
                "position": "Chief Marketing Officer (CMO)",
                "salary": "$675,000",
                "start_date": "2009/06/25",
                "office": "New York",
                "extn": "6154"
            },
            {
                "name": "Caesar Vance",
                "position": "Pre-Sales Support",
                "salary": "$106,450",
                "start_date": "2011/12/12",
                "office": "New York",
                "extn": "8330"
            },
            {
                "name": "Doris Wilder",
                "position": "Sales Assistant",
                "salary": "$85,600",
                "start_date": "2010/09/20",
                "office": "Sidney",
                "extn": "3023"
            },
            {
                "name": "Angelica Ramos",
                "position": "Chief Executive Officer (CEO)",
                "salary": "$1,200,000",
                "start_date": "2009/10/09",
                "office": "London",
                "extn": "5797"
            },
            {
                "name": "Gavin Joyce",
                "position": "Developer",
                "salary": "$92,575",
                "start_date": "2010/12/22",
                "office": "Edinburgh",
                "extn": "8822"
            },
            {
                "name": "Jennifer Chang",
                "position": "Regional Director",
                "salary": "$357,650",
                "start_date": "2010/11/14",
                "office": "Singapore",
                "extn": "9239"
            },
            {
                "name": "Brenden Wagner",
                "position": "Software Engineer",
                "salary": "$206,850",
                "start_date": "2011/06/07",
                "office": "San Francisco",
                "extn": "1314"
            },
            {
                "name": "Fiona Green",
                "position": "Chief Operating Officer (COO)",
                "salary": "$850,000",
                "start_date": "2010/03/11",
                "office": "San Francisco",
                "extn": "2947"
            },
            {
                "name": "Shou Itou",
                "position": "Regional Marketing",
                "salary": "$163,000",
                "start_date": "2011/08/14",
                "office": "Tokyo",
                "extn": "8899"
            },
            {
                "name": "Michelle House",
                "position": "Integration Specialist",
                "salary": "$95,400",
                "start_date": "2011/06/02",
                "office": "Sidney",
                "extn": "2769"
            },
            {
                "name": "Suki Burks",
                "position": "Developer",
                "salary": "$114,500",
                "start_date": "2009/10/22",
                "office": "London",
                "extn": "6832"
            },
            {
                "name": "Prescott Bartlett",
                "position": "Technical Author",
                "salary": "$145,000",
                "start_date": "2011/05/07",
                "office": "London",
                "extn": "3606"
            },
            {
                "name": "Gavin Cortez",
                "position": "Team Leader",
                "salary": "$235,500",
                "start_date": "2008/10/26",
                "office": "San Francisco",
                "extn": "2860"
            },
            {
                "name": "Martena Mccray",
                "position": "Post-Sales support",
                "salary": "$324,050",
                "start_date": "2011/03/09",
                "office": "Edinburgh",
                "extn": "8240"
            },
            {
                "name": "Unity Butler",
                "position": "Marketing Designer",
                "salary": "$85,675",
                "start_date": "2009/12/09",
                "office": "San Francisco",
                "extn": "5384"
            },
            {
                "name": "Howard Hatfield",
                "position": "Office Manager",
                "salary": "$164,500",
                "start_date": "2008/12/16",
                "office": "San Francisco",
                "extn": "7031"
            },
            {
                "name": "Hope Fuentes",
                "position": "Secretary",
                "salary": "$109,850",
                "start_date": "2010/02/12",
                "office": "San Francisco",
                "extn": "6318"
            },
            {
                "name": "Vivian Harrell",
                "position": "Financial Controller",
                "salary": "$452,500",
                "start_date": "2009/02/14",
                "office": "San Francisco",
                "extn": "9422"
            },
            {
                "name": "Timothy Mooney",
                "position": "Office Manager",
                "salary": "$136,200",
                "start_date": "2008/12/11",
                "office": "London",
                "extn": "7580"
            },
            {
                "name": "Jackson Bradshaw",
                "position": "Director",
                "salary": "$645,750",
                "start_date": "2008/09/26",
                "office": "New York",
                "extn": "1042"
            },
            {
                "name": "Olivia Liang",
                "position": "Support Engineer",
                "salary": "$234,500",
                "start_date": "2011/02/03",
                "office": "Singapore",
                "extn": "2120"
            },
            {
                "name": "Bruno Nash",
                "position": "Software Engineer",
                "salary": "$163,500",
                "start_date": "2011/05/03",
                "office": "London",
                "extn": "6222"
            },
            {
                "name": "Sakura Yamamoto",
                "position": "Support Engineer",
                "salary": "$139,575",
                "start_date": "2009/08/19",
                "office": "Tokyo",
                "extn": "9383"
            },
            {
                "name": "Thor Walton",
                "position": "Developer",
                "salary": "$98,540",
                "start_date": "2013/08/11",
                "office": "New York",
                "extn": "8327"
            },
            {
                "name": "Finn Camacho",
                "position": "Support Engineer",
                "salary": "$87,500",
                "start_date": "2009/07/07",
                "office": "San Francisco",
                "extn": "2927"
            },
            {
                "name": "Serge Baldwin",
                "position": "Data Coordinator",
                "salary": "$138,575",
                "start_date": "2012/04/09",
                "office": "Singapore",
                "extn": "8352"
            },
            {
                "name": "Zenaida Frank",
                "position": "Software Engineer",
                "salary": "$125,250",
                "start_date": "2010/01/04",
                "office": "New York",
                "extn": "7439"
            },
            {
                "name": "Zorita Serrano",
                "position": "Software Engineer",
                "salary": "$115,000",
                "start_date": "2012/06/01",
                "office": "San Francisco",
                "extn": "4389"
            },
            {
                "name": "Jennifer Acosta",
                "position": "Junior Javascript Developer",
                "salary": "$75,650",
                "start_date": "2013/02/01",
                "office": "Edinburgh",
                "extn": "3431"
            },
            {
                "name": "Cara Stevens",
                "position": "Sales Assistant",
                "salary": "$145,600",
                "start_date": "2011/12/06",
                "office": "New York",
                "extn": "3990"
            },
            {
                "name": "Hermione Butler",
                "position": "Regional Director",
                "salary": "$356,250",
                "start_date": "2011/03/21",
                "office": "London",
                "extn": "1016"
            },
            {
                "name": "Lael Greer",
                "position": "Systems Administrator",
                "salary": "$103,500",
                "start_date": "2009/02/27",
                "office": "London",
                "extn": "6733"
            },
            {
                "name": "Jonas Alexander",
                "position": "Developer",
                "salary": "$86,500",
                "start_date": "2010/07/14",
                "office": "San Francisco",
                "extn": "8196"
            },
            {
                "name": "Shad Decker",
                "position": "Regional Director",
                "salary": "$183,000",
                "start_date": "2008/11/13",
                "office": "Edinburgh",
                "extn": "6373"
            },
            {
                "name": "Michael Bruce",
                "position": "Javascript Developer",
                "salary": "$183,000",
                "start_date": "2011/06/27",
                "office": "Singapore",
                "extn": "5384"
            },
            {
                "name": "Donna Snider",
                "position": "Customer Support",
                "salary": "$112,000",
                "start_date": "2011/01/25",
                "office": "New York",
                "extn": "4226"
            }
        ]
    };

    //Table fixed head
    $(".tableBodySlimScroll").slimScroll({
        height: '150px',
        color: '#a9a9a9',
        railOpacity: 1,
        size: '5px',
        distance: '5px',
        wheelStep: 5,
        allowPageScroll: true,
    });

    tableDatatable();
    tableDatatableWithoutOption('.listviewDatatableWithoutOption', false, false, false, false, true);
    tableDatatableWithoutOption('.listviewDataDisablePagination', false, false, false, true, false);
    tableDatatableWithoutSort();
});
