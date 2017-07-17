// Check Off Specific Todos By Clicking

$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
})


// Click on  X to delete ToDo Task
$("ul").on("click","span",function(event)
{
	event.stopPropagation();
	$(this).parent().fadeOut(500, function()
		{
			$(this).remove();
		});
})


// Adds Tasks to the ToDo list
$("input[type='text']").keypress(function(event){

	if(event.which === 13)
	{
		// if the enter key is pressed
		// this Variable will grab the test information
		var toDoText = $(this).val();	

		//create a new li and add to the Ul
		$('ul').append("<li><span><i class='fa fa-trash'> </i></span>" + toDoText + "</li>");
		$(this).val("");
	}
})


// Toogle Input 
$(".fa-plus").click((function(event) {
	$("input[type ='text']").fadeToggle()
	/* Act on the event */
}));