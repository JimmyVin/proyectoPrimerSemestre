function capturaComentario(){

    
    let comentario='';
    
    comentario = prompt('COMENTARIO-ingrese su comentario');

    document.getElementById('zonaComentarios').innerHTML=comentario;

    return comentario;
}
