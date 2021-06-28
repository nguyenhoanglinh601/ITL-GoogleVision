$(document).ready(function() {
    function messageNotifi() {
        toastr.options = {
            "closeButton": true,
            "positionClass": "toast-top-right",
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr.success('Chúc mừng bạn đã đổi mật khẩu thành công!');
    }
    $('#changePwForm').on('submit', function() {
        localStorage.fadeMessage = "1";
    });
    if ("fadeMessage" in localStorage) {
        console.log('dm');
        messageNotifi();
        delete localStorage.fadeMessage;
    }
});
