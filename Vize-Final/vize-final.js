$(document).ready(function(){
	$("#sonuc").hide();
	
	$("#btn").on("click",function(){
		
		var vizeNotu=Number($("#vize").val());
		var finalNotu=Number($("#final").val());
		var ortalama=(vizeNotu*0.4)+(finalNotu*0.6);
		//yazilimkodlama.com
		if(ortalama>=50 && finalNotu>=50)
			{
				$("#sonuc").css({
					color:"white",
					background:"green"
					//border:"#222222 8px solid"
				}).fadeIn(500).delay(1500).fadeOut(500);
				$("#sonuc").html("Geçtiniz. Ortalamanız : "+ortalama);
			}
		else if(ortalama>=50 && finalNotu<50)
			{
				$("#sonuc").css({
					color:"white",
					background:"#D55B5D"
					//border:"#222222 8px solid"
				}).fadeIn(500).delay(1500).fadeOut(500);
				$("#sonuc").html("Kaldınız. Final Notu 50'den düşük. Ortalamanız : "+ortalama);
			}
		else
			{
				$("#sonuc").css({
					color:"white",
					background:"#D55B5D"
					//border:"#222222 8px solid"
				}).fadeIn(500).delay(1500).fadeOut(500);
				//yazilimkodlama.com
				$("#sonuc").html("Kaldınız. Ortalamanız : "+ortalama);
				
			}
	});
	
});