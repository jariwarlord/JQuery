$(document).ready(function(){
	
	$("#acKapa").on("click",function(){
	
		var konum=$("#ustPanel").css("top");
		
		if(konum=="0px")
		{
		 $(this).html("AÇ");
		 $("#ustPanel").animate({top:"-195px"},500);	
		}
		else
		{
		 $(this).html("KAPAT");
		 $("#ustPanel").animate({top:"0px"},500);	
		}
	});
	
});