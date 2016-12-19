(function ($){
$("#add").click(function () {
    $("#addhere").append('<button type="button" class="btn btn-default normal_btn">Button Added</button>');
});

$("#btn_add").click(function () {
    $("#add_gallery_btn").append('<div><button type="button" class="btn btn-default elements_btn">aaaaa</button></div>');
});


jQuery.each(jQuery('textarea[data-autoresize]'), function () {
    var offset = this.offsetHeight - this.clientHeight;

    var resizeTextarea = function (el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function () {
        resizeTextarea(this);
    }).removeAttr('data-autoresize');
})

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


}(jQuery));