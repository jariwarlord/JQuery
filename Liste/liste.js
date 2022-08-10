// www.yazilimkodlama.com
$(document).ready(function(){
 
    var dersler=["C#","C++","ASP.NET","PHP","HTML","CSS","JAVASCRIPT","JQUERY"];
     
    $("#ekle").on("click",function(){
     
    $("#ders-liste").empty(); //Listeyi boşalt
     
    for(var i=0;i<dersler.length;i++)
    {
    $("#ders-liste").
    append($("<li>"+dersler[i]+"</li>")) // Listeye ekleme
    }
    })
    });