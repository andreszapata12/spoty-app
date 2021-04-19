let url="https://accounts.spotify.com/api/token";


let llave1= "grant_type=client_credentials";
let llave2= "client_id=23580285b9034ffb9e7c66ac669a708e";
let llave3= "client_secret=bf318ea6e8c0478489f8193a462af23b";


let parametros={

    method:"post",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body: llave1+"&"+llave2+"&"+llave3

}


fetch(url,parametros)

.then(respuesta=>respuesta.json())
.then(datos=>traerCanciones(datos))



function traerCanciones(datosToken){
    let token="Bearer "+datosToken.access_token;
    let url="https://api.spotify.com/v1/artists/1cUpGtXcSQsovNYEZOQgOG/top-tracks?market=US";
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
    


    let imagen1=document.getElementById("imagen1");
    imagen1.src=datos.tracks[0].album.images[0].url
    let audio1=document.getElementById("audio1");
    audio1.src=datos.tracks[0].preview_url;
    let titulo1=document.getElementById("titulo1");
    

     
    let imagen2=document.getElementById("imagen2");
    imagen2.src=datos.tracks[1].album.images[0].url;
    let audio2=document.getElementById("audio2");
    audio2.src=datos.tracks[1].preview_url;
    let titulo2=document.getElementById("titulo2");
  
    

    let imagen3=document.getElementById("imagen3");
    imagen3.src=datos.tracks[2].album.images[0].url;
    let audio3=document.getElementById("audio3");
    audio3.src=datos.tracks[2].preview_url;
    let titulo3=document.getElementById("titulo3");
  
    let imagen4=document.getElementById("imagen4");
    imagen4.src=datos.tracks[3].album.images[0].url;
    let audio4=document.getElementById("audio4");
    audio4.src=datos.tracks[3].preview_url;
    let titulo4=document.getElementById("titulo4");
    

    
    let imagen5=document.getElementById("imagen5");
    imagen5.src=datos.tracks[4].album.images[0].url;
    let audio5=document.getElementById("audio5");
    audio5.src=datos.tracks[4].preview_url;
    let titulo5=document.getElementById("titulo5");


    let imagen6=document.getElementById("imagen6");
    imagen6.src=datos.tracks[5].album.images[0].url;
    let audio6=document.getElementById("audio5");
    audio6.src=datos.tracks[5].preview_url;
    let titulo6=document.getElementById("titulo6");
 


    
    
    
    
    

}
    

       
    }
    function seleccionarinformacion(datos){
  



    }