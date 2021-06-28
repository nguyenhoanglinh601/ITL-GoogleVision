$(document).ready(function() {
    // LINE CHART
    //chart of dashboard
    // format data for date: yyyy-mm-dd
    if ($("#dashboard-chart").length > 0) {
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'dashboard-chart',
            // Chart data records -- each entry in this array corresponds to a point on the chart.
            data: [
                { y: '2017-07', a: 100},
                { y: '2017-08', a: 75},
                { y: '2017-09', a: 50},
                { y: '2017-10', a: 75},
                { y: '2017-11', a: 50},
                { y: '2017-12', a: 100},
                { y: '2018-01', a: 50},
                { y: '2018-02', a: 100},
                { y: '2017-08', a: 75},
                { y: '2017-09', a: 50},
                { y: '2017-10', a: 75},
                { y: '2017-11', a: 50},
                { y: '2017-12', a: 100},
                { y: '2018-01', a: 50},
                { y: '2018-02', a: 100},
                { y: '2017-07', a: 100},
                { y: '2017-08', a: 75},
                { y: '2017-09', a: 50},
                { y: '2017-10', a: 75},
                { y: '2017-11', a: 50},
                { y: '2017-12', a: 100},
                { y: '2018-01', a: 50},
                { y: '2018-02', a: 100},
                { y: '2017-08', a: 75},
                { y: '2017-09', a: 50},
                { y: '2017-10', a: 75},
                { y: '2017-11', a: 50},
                { y: '2017-12', a: 100},
                { y: '2018-01', a: 50},
                { y: '2018-02', a: 100},
                { y: '2018-02', a: 100}
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Sản lượng'],
            resize: true,
            parseTime: false,
            xLabelAngle: 45,
            gridTextSize: 10,
        });
    }
    //chart of report
    if ($("#report-booking-chart").length > 0) {
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'report-booking-chart',
            // Chart data records -- each entry in this array corresponds to a point on the chart.
            data: [
                { y: '2017-07', a: 100},
                { y: '2017-08', a: 75},
                { y: '2017-09', a: 50},
                { y: '2017-10', a: 75},
                { y: '2017-11', a: 50},
                { y: '2017-12', a: 100},
                { y: '2018-01', a: 50},
                { y: '2018-02', a: 100}
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Sản lượng'],
            resize: true,
            parseTime: false,
            xLabelAngle: 45,
            gridTextSize: 10,
        });
    }
    if ($("#report-debt-chart").length > 0) {
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'report-debt-chart',
            // Chart data records -- each entry in this array corresponds to a point on the chart.
            data: [
                { y: '2017-07', a: 100},
                { y: '2017-08', a: 75},
                { y: '2017-09', a: 50},
                { y: '2017-10', a: 75},
                { y: '2017-11', a: 50},
                { y: '2017-12', a: 100},
                { y: '2018-01', a: 50},
                { y: '2018-02', a: 100}
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Sản lượng'],
            resize: true,
            parseTime: false,
            xLabelAngle: 45,
            gridTextSize: 10,
        });
    }
    if ($("#report-cont-chart").length > 0) {
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'report-cont-chart',
            // Chart data records -- each entry in this array corresponds to a point on the chart.
            data: [
                { y: '2006', a: 100},
                { y: '2007', a: 75},
                { y: '2008', a: 50},
                { y: '2009', a: 75},
                { y: '2010', a: 50},
                { y: '2011', a: 75},
                { y: '2012', a: 100}
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Sản lượng'],
            resize: true,
            parseTime: false,
            xLabelAngle: 45,
            gridTextSize: 10,
        });
    }
});
