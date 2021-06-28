$(document).ready(function() {
    var a = (100000/300000) *100;
    $('#success-donut-chart').circliful({
        animation: 1,
        animationStep: 5,
        foregroundColor: '#cd0701',
        backgroundColor: '#1b3f91',
        foregroundBorderWidth: 20,
        backgroundBorderWidth: 20,
        fontColor: '#454545',
        percent: a,
        percentageTextSize: '30'
    });
    $('#customer-cancel-donut-chart').circliful({
        animation: 1,
        animationStep: 5,
        foregroundColor: '#cd0701',
        backgroundColor: '#1b3f91',
        foregroundBorderWidth: 20,
        backgroundBorderWidth: 20,
        fontColor: '#454545',
        percent: 50,
        percentageTextSize: '30'
    });
    $('#ftl-cancel-donut-chart').circliful({
        animation: 1,
        animationStep: 5,
        foregroundColor: '#cd0701',
        backgroundColor: '#1b3f91',
        foregroundBorderWidth: 20,
        backgroundBorderWidth: 20,
        fontColor: '#454545',
        percent: 50,
        percentageTextSize: '30'
    });
    //donut chart - report page
    $('.donutChart').each(function() {
        $(this).circliful({
            animation: 1,
            animationStep: 5,
            foregroundColor: '#cd0701',
            backgroundColor: '#1b3f91',
            foregroundBorderWidth: 20,
            backgroundBorderWidth: 20,
            fontColor: '#454545',
            percentageTextSize: '30',
        });
    });
});
