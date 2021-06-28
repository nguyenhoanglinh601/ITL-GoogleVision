    function datePicker() {
        var dateControl = $('.datepickerBox');
        $('.resetDate').hide();
        $.each(dateControl, function() {
            if ($(this).val() != '') {
                $(this).next('.resetDate').show();
            }
        });
        dateControl.change(function() {
            if ($(this).val() != '') {
                $(this).next('.resetDate').show();
            }
        });
        dateControl.datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            dayOfWeekStart: 1
        });
        //reset datepicker
        $('.resetDate').click(function() {
            $(this).closest('.datepicker-box').find('.datepickerBox').val('');
            $(this).hide();
        });
    }

    function dateTimePicker() {
        var dateControl = $('.dateTimepickerBox');
        $('.resetDate').hide();
        $.each(dateControl, function() {
            if ($(this).val() != '') {
                $(this).next('.resetDate').show();
            }
        });
        dateControl.change(function() {
            if ($(this).val() != '') {
                $(this).next('.resetDate').show();
            }
        });
        dateControl.datetimepicker({
            format: 'd/m/Y H:i',
            dayOfWeekStart: 1
        });
        $.datetimepicker.setLocale('vi');
        $('.resetDate').click(function() {
            $(this).closest('.datepicker-box').find('.dateTimepickerBox').val('');
            $(this).hide();
        });
    }

    function dateRangePicker(className, rangeOption, startDate, endDate) {
        var dateRangeControl = $(className);
        var range_vi = {
            'Hôm nay': [moment(), moment()],
            'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            '7 ngày trước': [moment().subtract(6, 'days'), moment()],
            '30 ngày trước': [moment().subtract(29, 'days'), moment()],
            'Tháng này': [moment().startOf('month'), moment().endOf('month')],
            'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Năm nay': [moment().startOf('year'), moment()]
        };
        var range_en = {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'This year': [moment().startOf('year'), moment()]
        };
        var language_vi = {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Áp dụng",
            "cancelLabel": "Hủy",
            "fromLabel": "Từ ngày",
            "toLabel": "Đến ngày",
            "customRangeLabel": "Tùy chỉnh",
            "weekLabel": "T",
            "todayLabel": "Hôm nay",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ],
            "firstDay": 1,
            cancelLabel: 'Hủy bỏ'
        };
        var language_en = {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1,
            cancelLabel: 'Clear',
        };

    //set maxSpan of Daterangepicker
    // default limit 24 months
    // limit bookingDate, deliveryDate 6 months
    function maxRangeOption() {
        var controlId = $('.datepicker-box .form-control').attr('id');
        if (controlId == 'bookingDate' || controlId == 'deliveryDate') {
            return 6;
        } else {
            return 24;
        }
    }
        $('.resetDate').hide();
        //default empty input
        if (startDate == 'null' || endDate == 'null') {
            dateRangeControl.daterangepicker({
                "locale": language_vi,
            autoUpdateInput: false,
            opens: 'left',
            "maxSpan": {
                "months": maxRangeOption()
            },
            });
            dateRangeControl.next('.resetDate').addClass('not-required');
        } else {
            //picker have range default
            if (rangeOption == 'true') {
                dateRangeControl.daterangepicker({
                    "startDate": startDate,
                    "endDate": endDate,
                    "locale": language_vi,
                    "ranges": range_vi,
                    "alwaysShowCalendars": true,
                "maxSpan": {
                    "months": maxRangeOption()
                },
                });
            } else {
            console.log(className);
                //picker dont have range default
                dateRangeControl.daterangepicker({
                    "startDate": startDate,
                    "endDate": endDate,
                    "locale": language_vi,
                "maxSpan": {
                    "months": maxRangeOption()
                },
                });
            }
        }
        dateRangeControl.on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            $(this).next('.resetDate').show();
        });
        //reset range to default
        $('.resetDate').click(function(e, picker) {
            if ($(this).hasClass('not-required') == true) {
                $(this).closest('.datepicker-box').find(dateRangeControl).val('');
                $(this).closest('.datepicker-box').find(dateRangeControl).daterangepicker({
                    "locale": language_vi,
                    autoUpdateInput: false
                });
            } else {
                $(this).closest('.datepicker-box').find(dateRangeControl).val(startDate + ' - ' + endDate);
                $(this).closest('.datepicker-box').find(dateRangeControl).daterangepicker({
                    "startDate": startDate,
                    "endDate": endDate,
                    "locale": language_vi
                });
            }
            dateRangeControl.on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
                $(this).next('.resetDate').show();
            });
            $(this).hide();
        });
    }
    if($('.datepickerBox, .dateTimepickerBox').length > 0) {
        datePicker();
        dateTimePicker();
    }
    if($('.daterangePickerBox, #deptDate, #quotationDate, #feedbackDate, #effectiveDate, #expirationDate, #deliveryDate, #reportBookingDate, #reportReceiveDate').length > 0) {
        dateRangePicker('.daterangePickerBox', 'false', moment().subtract(29, 'days'), moment());
        dateRangePicker('#deptDate, #quotationDate, #feedbackDate', 'false', moment().subtract(17, 'months'), moment());
        dateRangePicker('#effectiveDate, #expirationDate, #deliveryDate', 'false', 'null', 'null');
        dateRangePicker('#reportBookingDate', 'false', moment().startOf('year'), moment());
        dateRangePicker('#reportReceiveDate', 'false', moment().startOf('year'), moment());
    }
    


