let url="https://api.spotify.com/v1/artists/1cUpGtXcSQsovNYEZOQgOG/top-tracks?market=US";

let token= "Bearer BQDBK4hY7lc1oUVQM1dj72hz207B8n5VxAGOCSMupiuc7-CAs2fkDeQQqFU-pQfmrvwDAwBpPLrAv-wFa-wL5-UEczmhIQCqlPeUqIwJDAdVt7fZCgEfFYwjWI9IJ9ABch3CDiZckKGJzms35TIDySPYplfSvtc"


let parametros={
    method:"GET",
    headers:{"Authorization":token}
}


fetch(url, parametros)
.then(respuesta=>respuesta.json ())
.then(datos=>seleccionarinformacion(datos))


function seleccionarinformacion(datos){

   
    console.log(datos.tracks[0].album.images[0].url);
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[0].name);


    let cancion=document.getElementById("cancion1");
    cancion.src=datos.tracks[0].preview_url;
    
    
    
    

}