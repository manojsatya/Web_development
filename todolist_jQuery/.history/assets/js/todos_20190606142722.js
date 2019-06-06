// check off specific Todos by clicking
$("li").click(function(){
    $(this).toggleClass("selected");

});
    
// click on X to delete to-do
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})