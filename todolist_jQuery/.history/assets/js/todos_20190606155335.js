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
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        // grab the new todo from val
        var todoText = $(this).val();
        // create a new li
        $("ul").append("<li>This is new li</li>")
    }
});