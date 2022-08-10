$(document).ready(function(){
    $("#topla").on("click",function(){
    var sayi1=Number($("#s1").val());
    var sayi2=Number($("#s2").val());
    var toplam=sayi1+sayi2;
    $("#sonuc").val(toplam);
    });
    });