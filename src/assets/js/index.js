// $(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});
$(function() {
   // makeModelAnimated();
})
makeModelAnimated();
function makeModelAnimated()
{
    debugger
    $(".modal").each(function(l) {
        debugger
        $(this).on("show.bs.modal", function(l) {
            debugger
            var o = $(this).attr("data-easein");
            "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ?
                $(".modal-dialog").velocity("callout." + o) : "tada" == o ?
                $(".modal-dialog").velocity("callout." + o) : "flash" == o ?
                $(".modal-dialog").velocity("callout." + o) : "bounce" == o ?
                $(".modal-dialog").velocity("callout." + o) : "swing" == o ?
                $(".modal-dialog").velocity("callout." + o) :
                $(".modal-dialog").velocity("transition." + o)
        })
    });
}