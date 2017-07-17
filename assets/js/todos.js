// Check Off Specific Todos By Clicking

$("li").click(function()
{
	console.log($(this).css("color"));
	// if it's gray
	if($(this).css("color") === "rgb(128, 128, 128)")
		{
			// turn it black
			$(this).css({

				color : "black",
				textDecoration : "none"
			})
		}
	else
		{
			// turn it gray
			$(this).css({
				color : "gray",
				textDecoration : "line-through"
			})
		}
})