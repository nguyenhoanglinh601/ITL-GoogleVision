$(document).ready(function() {
    function dropdownSelect() {
        $('.dropdownSelect').each(function() {
            if($(this).attr('data-placeholder')) {
                var dataPlaceholder = $(this).attr('data-placeholder');
                $(this).select2({
                    placeholder: dataPlaceholder,
                    allowClear: true,
                    width: '100%',
                    language: "vi",
                    dropdownParent: $(this).parent()
                });
                //Reset button
                $(this).data('select2').$dropdown.find('.select2-dropdown').append('<div class="reset-dropdown"><button class="btn btn-sm btn-reset-dropdown">Reset</button></div>');
                //Search input 
                $("select").on("select2:open", function(event) {
                    $('input.select2-search__field').attr('placeholder', 'Search...');
                });
                $(this).data('select2').$dropdown.find('.select2-search--dropdown').append('<i class="icon-search"></i>');
            } else {
                $(this).select2({
                    width: '100%',
                    language: "vi",
                    dropdownParent: $(this).parent()
                });
            }
        });
    }
    dropdownSelect();
//sellect all
    $("#select2-all").select2();
    $("#check-all-select2").click(function(){
        if($("#check-all-select2").is(':checked') ){
            $("#select2-all > option").prop("selected","selected");
            $("#select2-all").trigger("change");
        }else{
            $("#select2-all > option").removeAttr("selected");
             $("#select2-all").trigger("change");
         }
    });
});