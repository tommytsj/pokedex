var callBackSuccess = function(data) {
console.log("donnees api",data)
var nom = document.getElementById("nom");
nom.innerHTML = data.name;
var id = document.getElementById("id");
var imgTag = document.getElementById('imgPokemon');
imgTag.setAttribute("src",data.sprites.front_default);
document.getElementById('Scroll').focus();
}



function buttonClickGET(){
    
    var queryLoc = document.getElementById("queryLoc").value;
    var url =`https://pokeapi.co/api/v2/pokemon/${queryLoc}`


    $.get(url,callBackSuccess).done(function() {



    })
    .fail(function() {
        alert("error");
    })
    .always(function(){

    });

}