$("#add").click(function () {
		$("#addhere").append('<button type="button" class="btn btn-default normal_btn">Button Added</button>');
});

$("#btn_add").click(function () {
		$("#add_gallery_btn").append('<div><button type="button" class="btn btn-default elements_btn">aaaaa</button></div>');
});


// jQuery.each(jQuery('textarea[data-autoresize]'), function() {
//     var offset = this.offsetHeight - this.clientHeight;
 
//     var resizeTextarea = function(el) {
//         jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
//     };
//     jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
// })

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});