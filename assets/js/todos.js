//Remove all the task by clicking on the button "Clear All"
$("#clear").on("click",function(){
	$("#container li").remove();
});

// Check Off Specific Todos By Clicking
$("#container ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("#container ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding Task On clicking the Buttton "Add Task"
$(" #addTask").on("click", function(){
   var task = $("#kaam").val();
   var date=  $("#tariq").val();

   if(task=="" && date == ""){
   	 alert("Task Cannot Empty !");
   }
   else if(task!="" && date==""){
   	$("#container ul").append("<li><span><i class='fa fa-times'></i></span> " + task +"</li>");
   	var task = $("#kaam").val("");
   	var date=  $("#tariq").val("");
   }
   	else{
   		$("#container ul").append("<li><span><i class='fa fa-times'></i></span> " + task +"  On: "+date + "</li>");
		var task = $("#kaam").val("");
   		var date=  $("#tariq").val("");
   	}
  }); 

//Click on "+" To Toggle The Text and Date Input
$("#toggle-form").click(function(){

	$("input[type=text]").fadeToggle();
	$("#tariq").fadeToggle();
});
// Click On "+" To Add Sample Task From Another Container

$("#sampletask li").on("click","span",function(){
 var para = $(this).parent().text();
$("#container ul").append("<li><span><i class='fa fa-times'></i></span> "+ para +"</li>")  
});