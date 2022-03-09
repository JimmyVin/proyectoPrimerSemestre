

function commentBox(){
    
    
    var calificacion=document.getElementById('ratting').value;
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
    
 
	if(name =="" || comment ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
        var las_starts=document.createElement('h4');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
        var estrellas = '';
        var usuarios = 0;
        var ratting = 0;
        if (calificacion==5) {
           estrellas = '★★★★★';
           usuarios += 1;
           ratting += calificacion;
        }
        if (calificacion==4) {
            estrellas = '★★★★';
            usuarios += 1;
            ratting += calificacion;
        }
        if (calificacion==3) {
            estrellas = '★★★';
            usuarios += 1;
            ratting += calificacion;

        }
        if (calificacion==2) {
            estrellas = '★★';
            usuarios += 1;
            ratting += calificacion;
        }
        if (calificacion==1) {
            estrellas = '★';
            usuarios += 1;
            ratting += calificacion;

        }
        
        var total = ratting/usuarios;
        if (total<=5 && total>4) {
            document.getElementById('promedio').innerHTML = '★★★★★';
            
         }
         if (total<=4 && total>3) {
             document.getElementById('promedio').innerHTML = '★★★★';
             
         }
         if (total<=3 && total>2) {
             document.getElementById('promedio').innerHTML = '★★★';
          
 
         }
         if (total<=2 && total>1    ) {
             document.getElementById('promedio').innerHTML = '★★';
         
         }
         if (total<=1) {
             document.getElementById('promedio').innerHTML = '★';
       
 
         }
       

        
    
        var txt_estrellas=document.createTextNode(estrellas);
        var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);

        
		el_name.appendChild(txt_name);
        las_starts.appendChild(txt_estrellas);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';

        parent.appendChild(el_line);
		parent.appendChild(el_name);
        parent.appendChild(las_starts);
		parent.appendChild(el_message);
        
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
        
	}
    
} 

function alertas(){
    var nombre = document.getElementById('Nombre').value;
    alert('Te damos la bienvenida a New Tecnology. Usuario: '+nombre+'\nGracias por registrarte,\nDisfrute del recorrido en la pagina');
}


function alerta2(){
    var nombre = document.getElementById('usuario').value;
    alert('Te damos la bienvenida a New Tecnology. Usuario: '+nombre+'\ndisfrute del recorrido en la pagina');
}