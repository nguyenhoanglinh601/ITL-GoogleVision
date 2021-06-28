var image = document.getElementById('image-mode');
var actions = document.getElementById('edit-img-actions');
var cropper;
//Create crop img box
function cropperImg(originalImageURL) {
    //Crop product-img
    var imageview = document.getElementById('view-img-box');
    var cropBoxData;
    var canvasData;
    var urlImg;
    image.src = originalImageURL;
    cropper = new Cropper(image, {
        viewMode: 0,
        aspectRatio: 1 / 1,
        ready: function() {
            // Strict mode: set crop box data first
            cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
        }
    });
    $(document).on('click', '.edit-img-btn', function(e) {
        var data = {
            method: $(this).attr('data-method'),
            option: $(this).attr('data-option')
        };
        if (data.method) {
            switch (data.method) {
                case 'rotate':
                    cropper.rotate(data.option);
                    break;
                case 'zoom':
                    cropper.zoom(data.option);
                    break;
            }
        }
    });
}
$(document).on('click', '.cropImgControl', function(e) {
    e.preventDefault();
    var originalImageURL = $(this).closest('.gallery-img-item').find('.photo-content').attr('src');
    cropperImg(originalImageURL);
    $(this).closest('.gallery-img-item').addClass('imgEditing');
    $('#cropImgModal').modal('show');
});

$(document).ready(function() {
    $('.close_crop').on('click', function() {
        cropBoxData = cropper.getCropBoxData();
        canvasData = cropper.getCanvasData();
        cropper.destroy();
        $('#cropImgModal').modal('hide');
        $('.gallery-img-item').removeClass('imgEditing');
    });
    $("#get-img-btn").on('click', function(event) {
        event.preventDefault();
        urlImg = cropper.getCroppedCanvas().toDataURL('');
        console.log(urlImg);
        $('#cropImgModal').modal('hide');
        if ($('.gallery-img-item').hasClass('imgEditing')) {
            $('.gallery-img-item.imgEditing').find('.photo-content').attr('src', urlImg);
        }
        $('.gallery-img-item').removeClass('imgEditing');
        cropBoxData = cropper.getCropBoxData();
        canvasData = cropper.getCanvasData();
        cropper.destroy();
    });
});
//Upload Img
function filePreview(input) {
    if(input.files && input.files[0]) {
        var reader = new FileReader();
        var photoContent = $(input.closest('.gallery-img-item')).find('.photo-content')
        reader.onload = function(e) {
            photoContent.attr('src', this.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function uploadImg() {
    $('.uploadControl').change(function() {
        filePreview(this);
    });
}
uploadImg();
