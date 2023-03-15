console.log("calculadora")
function sumar(){
     let result = 0;
     let formulario=document.forms['formulario'];
     let a=formulario['a'];
     let b=formulario['b'];
     result=parseInt(a.value)+parseInt(b.value);
     respuesta(result);

}
function restar(){
     let result = 0;
     let formulario=document.forms['formulario'];
     let a=formulario['a'];
     let b=formulario['b'];
     result=parseInt(a.value)-parseInt(b.value); 
     respuesta(result);
}
function multiplicar(){
     let resultado=0;
     let formulario=document.forms['formulario'];
     let a=formulario['a'];
     let b=formulario['b'];
     resultado=parseInt(a.value)*parseInt(b.value); 
     respuesta(resultado);
}
function dividir() {
     let resultado=0;
     let formulario=document.forms['formulario'];
     let a=formulario['a'];
     let b=formulario['b'];
     resultado=Math.floor(parseInt(a.value)/parseInt(b.value));
     respuesta(resultado);
}
function respuesta(resp) {
     document.getElementById('res').innerHTML=resp;
}