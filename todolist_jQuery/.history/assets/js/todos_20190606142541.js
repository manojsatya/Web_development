// check off specific Todos by clicking
$("li").click(function(){
    $(this).toggleClass("selected");

});
    
// click on X to delete to-do
$("span").click(function(){
    $(this).parent().fadeOut().remove();
})