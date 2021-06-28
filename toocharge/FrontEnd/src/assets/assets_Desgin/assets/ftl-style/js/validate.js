$(document).ready(function() {
	jQuery.validator.addMethod("noSpace", function(value, element) { 
		return value.indexOf(" ") < 0 && value != ""; 
	}, "No space please and don't leave it empty");
	// 1. Validate support phone call
	var requestPhoneCall_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			requestTitle: {
				required: true,
				noSpace: true
			},
			requestStartDate: "required",
		},
		messages: {
			requestTitle: {
				required: "Vui lòng nhập tiêu đề",
				noSpace: "Khoảng trắng không được phép"
			},
			requestStartDate: "Vui lòng chọn thời gian",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var requestPhoneCall_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			requestTitle: {
				required: true,
				noSpace: true
			},
			requestStartDate: "required",
		},
		messages: {
			requestTitle: {
				required: "Please enter title",
				noSpace: "No space please and don't leave it empty",
			},
			requestStartDate: "Please enter date time",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var requestPhoneCallForm = $("#requestPhoneCallForm");
	requestPhoneCallForm.validate(requestPhoneCall_en);

	// 2. Validate request metting
	var requestMeeting_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			requestMeetingTitle: "required",
			requestMeetingStartDate: "required",
			requestMeetingLocation: "required",
		},
		messages: {
			requestMeetingTitle: "Vui lòng nhập tiêu đề",
			requestMeetingStartDate: "Vui lòng chọn thời gian",
			requestMeetingLocation: "Vui lòng nhập địa điểm",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var requestMeeting_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			requestMeetingTitle: "required",
			requestMeetingStartDate: "required",
			requestMeetingLocation: "required",
		},
		messages: {
			requestMeetingTitle: "Please enter title",
			requestMeetingStartDate: "Please enter start time",
			requestMeetingLocation: "Please enter location",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var requestMeetingForm = $("#requestMeetingForm");
	requestMeetingForm.validate(requestMeeting_vi);

	// 3. Validate create request order
	var createRequest_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			createRequestQuantity: {
				required: true,
				digits: true,
			},
			createRequestStartDate: "required",
			createRequestReceiveItem: "required",
			createRequestLoadItem: "required",
			createRequestEndDate: "required",
		},
		messages: {
			createRequestQuantity: {
				required: "Vui lòng nhập số lượng",
				digits: "Vui lòng nhập đúng định dạng",
			},
			createRequestStartDate: "Vui lòng chọn ngày bắt đầu",
			createRequestReceiveItem: "Vui lòng chọn ngày nhận hàng",
			createRequestLoadItem: "Vui lòng chọn ngày bốc/ dỡ hàng",
			createRequestEndDate: "Vui lòng chọn ngày kết thúc",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var createRequest_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			createRequestQuantity: {
				required: true,
				digits: true,
			},
			createRequestStartDate: "required",
			createRequestReceiveItem: "required",
			createRequestLoadItem: "required",
			createRequestEndDate: "required",
		},
		messages: {
			createRequestQuantity: {
				required: "Please enter quantity",
				digits: "Please enter the correct format",
			},
			createRequestStartDate: "Please enter start time",
			createRequestReceiveItem: "Please choose day receive item",
			createRequestLoadItem: "Please choose day of loading item",
			createRequestEndDate: "Please enter finish day",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var createRequestForm = $("#createRequestForm");
	createRequestForm.validate(createRequest_vi);

	// 4. Validate edit request order
	var editRequest_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			editRequestQuantity: {
				required: true,
				digits: true,
			},
			editRequestStartDate: "required",
			editRequestReceiveItem: "required",
			editRequestLoadItem: "required",
			editRequestEndDate: "required",
		},
		messages: {
			editRequestQuantity: {
				required: "Vui lòng nhập số lượng",
				digits: "Vui lòng nhập đúng định dạng",
			},
			editRequestStartDate: "Vui lòng chọn ngày bắt đầu",
			editRequestReceiveItem: "Vui lòng chọn ngày nhận hàng",
			editRequestLoadItem: "Vui lòng chọn ngày bốc/ dỡ hàng",
			editRequestEndDate: "Vui lòng chọn ngày kết thúc",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var editRequest_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			createRequestQuantity: {
				required: true,
				digits: true,
			},
			createRequestStartDate: "required",
			createRequestReceiveItem: "required",
			createRequestLoadItem: "required",
			createRequestEndDate: "required",
		},
		messages: {
			createRequestQuantity: {
				required: "Please enter quantity",
				digits: "Please enter the correct format",
			},
			createRequestStartDate: "Please enter start time",
			createRequestReceiveItem: "Please choose day receive item",
			createRequestLoadItem: "Please choose day of loading item",
			createRequestEndDate: "Please enter finish day",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var editRequestForm = $("#editRequestForm");
	editRequestForm.validate(editRequest_vi);

	// 5. Validate add contactform
	var addContact_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			addContactName: "required",
			addContactPhone: {
				required: true,
				minlength: 10,
				maxlength: 11,
				digits: true,
			},
			addContactEmail: {
				email: true,
			},
		},
		messages: {
			addContactName: "Vui lòng nhập tên",
			addContactPhone: {
				required: "Vui lòng nhập số điện thoại",
				digits: "Chỉ được nhập số",
				minlength: "Số điện thoại ít nhất 10 chữ số",
				maxlength: "Số điện thoại không lớn hơn 11 chữ số",
			},
			addContactEmail: "Vui lòng nhập đúng định dạng mail",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var addContact_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			addContactName: "required",
			addContactPhone: {
				required: true,
				minlength: 10,
				maxlength: 11,
				digits: true,
			},
			addContactEmail: {
				email: true,
			},
		},
		messages: {
			addContactName: "Please enter your name",
			addContactPhone: {
				required: "Please enter a phone number",
				digits: "Input is only number",
				minlength: "Phone number is at least 10 digits",
				maxlength: "Phone number is not greater than 11 digits",
			},
			addContactEmail: "Please enter the correct mail format",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var addContactForm = $("#addContactForm");
	addContactForm.validate(addContact_vi);
	
	// 6. Validate edit contactform
	var editContact_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			editContactName: "required",
			editContactPhone: {
				required: true,
				minlength: 10,
				maxlength: 11,
				digits: true,
			},
			editContactEmail: {
				email: true,
			},
		},
		messages: {
			editContactName: "Vui lòng nhập tên",
			editContactPhone: {
				required: "Vui lòng nhập số điện thoại",
				digits: "Chỉ được nhập số",
				minlength: "Số điện thoại ít nhất 10 chữ số",
				maxlength: "Số điện thoại không lớn hơn 11 chữ số",
			},
			editContactEmail: "Vui lòng nhập đúng định dạng mail",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var editContact_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			editContactName: "required",
			editContactPhone: {
				required: true,
				minlength: 10,
				maxlength: 11,
				digits: true,
			},
			editContactEmail: {
				email: true,
			},
		},
		messages: {
			editContactName: "Please enter your name",
			editContactPhone: {
				required: "Please enter a phone number",
				digits: "Input is only number",
				minlength: "Phone number is at least 10 digits",
				maxlength: "Phone number is not greater than 11 digits",
			},
			editContactEmail: "Please enter the correct mail format",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var editContactForm = $("#editContactForm");
	editContactForm.validate(editContact_vi);

	// 7. Validate change password
	var changePwForm_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			oldPW: "required",
			newPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
			},
			confirmNewPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
				equalTo: '#newPW',
			},
		},
		messages: {
			oldPW: "Mật khẩu cũ không được để trống",
			newPW: {
				required: "Mật khẩu mới không được để trống",
				minlength: "Mật khẩu ít nhất 6 ký tự",
				maxlength: "Mật khẩu không vượt quá 32 ký tự",
			},
			confirmNewPW: {
				required: "Mật khẩu mới không được để trống",
				minlength: "Mật khẩu ít nhất 6 ký tự",
				maxlength: "Mật khẩu không vượt quá 32 ký tự",
				equalTo: "Mật khẩu chưa trùng khớp",
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var changePwForm_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			oldPW: "required",
			newPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
			},
			confirmNewPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
				equalTo: '#newPW',
			},
		},
		messages: {
			oldPW: "Old password is not empty",
			newPW: {
				required: "New password is not empty",
				minlength: "The password at least 6 characters",
				maxlength: "Password pass out of 32 characters",
			},
			confirmNewPW: {
				required: "New password is not empty",
				minlength: "The password at least 6 characters",
				maxlength: "Password pass out of 32 characters",
				equalTo: "Match not match password",
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var changePwForm = $("#changePwForm");
	changePwForm.validate(changePwForm_vi);

	// 8. Validate change default password
	var changeDefaultPwForm_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			oldDefaultPW: "required",
			newDefaultPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
			},
			confirmNewDefaultPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
				equalTo: '#newDefaultPW',
			},
		},
		messages: {
			oldDefaultPW: "Mật khẩu cũ không được để trống",
			newDefaultPW: {
				required: "Mật khẩu mới không được để trống",
				minlength: "Mật khẩu ít nhất 6 ký tự",
				maxlength: "Mật khẩu không vượt quá 32 ký tự",
			},
			confirmNewDefaultPW: {
				required: "Mật khẩu mới không được để trống",
				minlength: "Mật khẩu ít nhất 6 ký tự",
				maxlength: "Mật khẩu không vượt quá 32 ký tự",
				equalTo: "Mật khẩu chưa trùng khớp",
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var changeDefaultPwForm_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			oldDefaultPW: "required",
			newDefaultPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
			},
			confirmNewDefaultPW: {
				required: true,
				minlength: 6,
				maxlength: 32,
				equalTo: '#newPW',
			},
		},
		messages: {
			oldDefaultPW: "Old password is not empty",
			newDefaultPW: {
				required: "New password is not empty",
				minlength: "The password at least 6 characters",
				maxlength: "Password pass out of 32 characters",
			},
			confirmNewDefaultPW: {
				required: "New password is not empty",
				minlength: "The password at least 6 characters",
				maxlength: "Password pass out of 32 characters",
				equalTo: "Match not match password",
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var changeDefaultPwForm = $("#changeDefaultPwForm");
	changeDefaultPwForm.validate(changeDefaultPwForm_vi);

	// 9. Validate create feedback
	var createFeedback_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			createFeedbackTitle: {
				required: true,
				noSpace: true
			},
			createFeedbackDesc: "required",
			createFeedbackPackage: "required",
			fileUpload: {
				required: true,
				accept:"application/pdf,image/jpeg,image/png",
                filesize: 2000000   //max size 200 kb
			}
		},
		messages: {
			createFeedbackTitle: {
				required: "Vui lòng nhập tiêu đề",
				noSpace: "Khoảng trắng không được phép"
			},
			createFeedbackDesc: "Vui lòng nhập mô tả",
			createFeedbackPackage: "Vui lòng chọn lô hàng",
			fileUpload: {
				required: "Vui lòng tải lên file đính kèm",
				accept: "Chỉ chấp nhận các file: *.pdf, *.png, *.jpg",
				filesize: "Dung lượng tối đa: là 200kb",
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "fileUpload" )
			    error.insertAfter(".input-large");
		},
	};
	var createFeedback_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			createFeedbackTitle: {
				required: true,
				noSpace: true
			},
			createFeedbackDesc: "required",
			createFeedbackPackage: "required",
			fileUpload: {
				required: true,
				accept:"application/pdf,image/jpeg,image/png",
                filesize: 2000000   //max size 200 kb
			},
		},
		messages: {
			createFeedbackTitle: {
				required: "Please enter title",
				noSpace: "No space please and don't leave it empty"
			},
			createFeedbackDesc: "Please enter description",
			createFeedbackPackage: "Please choose goods lot",
			fileUpload: {
				required: "Please choose a file to upload",
				accept: "accept: *.pdf, *.png, *.jpg",
				filesize: "Max size: 200kb",
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "fileUpload" )
			    error.insertAfter(".input-large");
		},
	};
	var createFeedbackForm = $("#createFeedbackForm");
	createFeedbackForm.validate(createFeedback_vi);

	// 10. Validate orrder create page
	var orderCreatePage_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			orderCreateCodeBooking: "required",
			orderCreateReceiver: "required",
		},
		messages: {
			orderCreateCodeBooking: "Vui lòng nhập mã booking",
			orderCreateReceiver: "Vui lòng chọn tên người liên hệ",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var orderCreatePage_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			orderCreateCodeBooking: "required",
			orderCreateReceiver: "required",
		},
		messages: {
			orderCreateCodeBooking: "Please enter your booking code",
			orderCreateReceiver: "Please choose a contact name",
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var orderCreatePage = $("#orderCreatePage");
	orderCreatePage.validate(orderCreatePage_vi);

	// 11. Validate orrder create page
	var lockScreenPage_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			pwLockScreen: {
				required: true,
				minlength: 6
			}
		},
		messages: {
			pwLockScreen: {
				required: "Vui lòng nhập password",
				minlength: "Mật khẩu ít nhất 6 ký tự"
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "pwLockScreen" )
			    error.insertAfter(".input-group");
		}
	};
	var lockScreenPage_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			pwLockScreen: {
				required: true,
				minlength: 6
			}
		},
		messages: {
			pwLockScreen: {
				required: "Password is required",
				minlength: "The password at least 6 characters"
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "pwLockScreen" )
			    error.insertAfter(".input-group");
		}
	};
	var formLockScreen = $("#formLockScreen");
	formLockScreen.validate(lockScreenPage_vi);

	// 12. Validate orrder create page
	var formLogin_vi = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			username: {
				required: true,
				minlength: 6
			},
			password: {
				required: true
			}
		},
		messages: {
			username: {
				required: "Vui lòng tài khoản",
				minlength: "Tài khoản ít nhất 6 ký tự"
			},
			password: {
				required: "Vui lòng nhập mật khẩu"
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var formLogin_en = {
		errorElement: 'span', //default input error message container
		errorClass: 'help-block help-block-error', // default input error message class
		focusInvalid: false, // do not focus the last invalid input
		ignore: "", // validate all fields including form hidden input
		rules: {
			username: {
				required: true,
				minlength: 6
			},
			password: {
				required: true
			}
		},
		messages: {
			username: {
				required: "Username is required",
				minlength: "The password at least 6 characters"
			},
			password: {
				required: "Password is required"
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		}
	};
	var formLogin = $("#formLogin");
	formLogin.validate(formLogin_vi);
});