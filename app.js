function encriptar() {
   document.getElementById("ocultar-imagen").style.display="none";
   document.getElementById("resultado-mensaje").style.display="block";
   let textoIngresado=  document.getElementById("mensaje").value.toLowerCase();
   
   const diccionario = {a:'ai',e:'enter',i:'imes',o:'ober',u:'ufat'};
     if (textoIngresado != "") {
        textoIngresado = textoIngresado.toString();
        let z = textoIngresado.replace(/a|e|i|o|u/gi,function(matched){
        return diccionario[matched];
        });console.log(typeof z);
        mensajeResultado.innerHTML = z;
        }
        else{
            alert("ingrese un texto");
        };
}

function desencriptacion() {
    document.getElementById("ocultar-imagen").style.display="none";
    document.getElementById("resultado-mensaje").style.display="block";
    let textoIngresado=  document.getElementById("mensaje").value.toLowerCase();

    const diccionario = {ai:'a',enter:'e',imes:'i',ober:'o',ufat:'u'};
    if (textoIngresado != "") {
      textoIngresado = textoIngresado.toString();
      let x = textoIngresado.replace(/ai|imes|enter|ober|ufat/gi,function(matched){
        return diccionario[matched];
      });console.log(typeof x);
      mensajeResultado.innerHTML = x;
      }
        else{
            alert("ingrese un texto");
        };
    } 

function copiar() {
    let copiarMensaje = document.getElementById("mensajeResultado");
        copiarMensaje.select();
        document.execCommand("copy");
}