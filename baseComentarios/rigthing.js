
function estrellas(){
     let unaEstrella = Number(document.getElementById('radio5').value);
     let dosEstrellas = Number(document.getElementById('radio4').value);
     let tresEstrellas = Number(document.getElementById('radio3').value);
     let cuatroEstrellas = Number(document.getElementById('radio2').value);
     let cincoEstrellas = Number(document.getElementById('radio1').value);
    
     let opcion = unaEstrella + dosEstrellas + tresEstrellas + cuatroEstrellas + cincoEstrellas;

     switch (opcion) {
         case 5:
             let caja = document.createElement('div');
             let titulo = document.createElement('h5');
             let linea = document.createElement('hr');
             linea.style.border = '1px solid #000';
             caja.appendChild(titulo);
             caja.appendChild(linea);
             titulo.appendChild(' ★★★★★ ');
             document.getElementById('publicacionEstrellas').appendChild(caja);
             break;

         case 4:
             let caja = document.createElement('div');
             let titulo = document.createElement('h5');
             let linea = document.createElement('hr');
             linea.style.border = '1px solid #000';
             caja.appendChild(titulo);
             caja.appendChild(linea);
             titulo.appendChild(' ★★★★');
             document.getElementById('publicacionEstrellas').appendChild(caja);
             break;
         
         case 3:
             let caja = document.createElement('div');
             let titulo = document.createElement('h5');
             let linea = document.createElement('hr');
             linea.style.border = '1px solid #000';
             caja.appendChild(titulo);
             caja.appendChild(linea);
             titulo.appendChild(' ★★★ ');
             document.getElementById('publicacionEstrellas').appendChild(caja);
             break;
         
         case 2:
             let caja = document.createElement('div');
             let titulo = document.createElement('h5');
             let linea = document.createElement('hr');
             linea.style.border = '1px solid #000';
             caja.appendChild(titulo);
             caja.appendChild(linea);
             titulo.appendChild( ' ★★ ');
             document.getElementById('publicacionEstrellas').appendChild(caja);
             break;

         case 1:
             let caja = document.createElement('div');
             let titulo = document.createElement('h5');
             let linea = document.createElement('hr');
             linea.style.border = '1px solid #000';
             caja.appendChild(titulo);
             caja.appendChild(linea);
             titulo.appendChild(' ★ ');
             document.getElementById('publicacionEstrellas').appendChild(caja);
             break;
     
         default:
             break;
     }
 }