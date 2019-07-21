//Variables de operación
var operandoa;
var operandob;
var operacion;
var operandobn;

var Calculadora={
  //Función de inicio
  init: function(){

  //variables
  var resultado=document.getElementById("display");
  var on=document.getElementById("on");
  var signo=document.getElementById("sign");
  var raiz=document.getElementById("raiz");
  var dividir=document.getElementById("dividido");
  var siete=document.getElementById("7");
  var ocho=document.getElementById("8");
  var nueve=document.getElementById("9");
  var multiplicar=document.getElementById("por");
  var cuatro=document.getElementById("4");
  var cinco=document.getElementById("5");
  var seis=document.getElementById("6");
  var restar=document.getElementById("menos");
  var uno=document.getElementById("1");
  var dos=document.getElementById("2");
  var tres=document.getElementById("3");
  var cero=document.getElementById("0");
  var punto=document.getElementById("punto");
  var igual=document.getElementById("igual");
  var sumar=document.getElementById("mas");

    //Eventos

  uno.addEventListener('mousedown',function () {
    uno.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="1";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"1";
        digitos();
        console.log(resultado.textContent);
      }
  })
  uno.addEventListener('mouseup',function () {
    uno.setAttribute("style", "transform:scale(1,1)");
  })

  dos.addEventListener('mousedown',function () {
    dos.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="2";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"2";
        digitos();
        console.log(resultado.textContent);
      }
  })
  dos.addEventListener('mouseup',function () {
      dos.setAttribute("style", "transform:scale(1,1)");
  })

  tres.addEventListener('mousedown',function () {
    tres.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="3";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"3";
        digitos();
        console.log(resultado.textContent);
      }
  })
  tres.addEventListener('mouseup',function () {
    tres.setAttribute("style", "transform:scale(1,1)");
  })

  cuatro.addEventListener('mousedown',function () {
    cuatro.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="4";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"4";
        digitos();
        console.log(resultado.textContent);
      }
  })
  cuatro.addEventListener('mouseup',function () {
    cuatro.setAttribute("style", "transform:scale(1,1)");
  })

  cinco.addEventListener('mousedown',function () {
      cinco.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="5";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"5";
        digitos();
        console.log(resultado.textContent);
      }
  })
  cinco.addEventListener('mouseup',function () {
      cinco.setAttribute("style", "transform:scale(1,1)");
  })

  seis.addEventListener('mousedown',function () {
      seis.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="6";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"6";
        digitos();
        console.log(resultado.textContent);
      }
  })
  seis.addEventListener('mouseup',function () {
      seis.setAttribute("style", "transform:scale(1,1)");
  })

  siete.addEventListener('mousedown',function () {
      siete.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="7";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"7";
        digitos();
        console.log(resultado.textContent);
      }
  })
  siete.addEventListener('mouseup',function () {
      siete.setAttribute("style", "transform:scale(1,1)");
  })

  ocho.addEventListener('mousedown',function () {
      ocho.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="8";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"8";
        digitos();
        console.log(resultado.textContent);
      }
  })
  ocho.addEventListener('mouseup',function () {
      ocho.setAttribute("style", "transform:scale(1,1)");
  })

  nueve.addEventListener('mousedown',function () {
      nueve.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="9";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"9";
        digitos();
        console.log(resultado.textContent);
      }
  })
  nueve.addEventListener('mouseup',function () {
      nueve.setAttribute("style", "transform:scale(1,1)");
  })

  cero.addEventListener('mousedown',function () {
      cero.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if (resultado.textContent=="0") {
        resultado.textContent="0";
        console.log(resultado.textContent);
      }
      else {
        resultado.textContent=resultado.textContent+"0";
        digitos();
        console.log(resultado.textContent);
      }
  })
  cero.addEventListener('mouseup',function () {
      cero.setAttribute("style", "transform:scale(1,1)");
  })

  punto.addEventListener('mousedown',function () {
      punto.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      console.log(resultado.textContent.indexOf("."));
      if (resultado.textContent.indexOf(".")=="-1") {
      resultado.textContent=resultado.textContent+".";
      }
  })
  punto.addEventListener('mouseup',function () {
      punto.setAttribute("style", "transform:scale(1,1)");
  })

  signo.addEventListener('mousedown',function () {
      signo.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      console.log(resultado.textContent);
      if (resultado.textContent>0){
        resultado.textContent="-"+resultado.textContent
      }
      else {
        resultado.textContent=Math.abs(resultado.textContent)
      }
  })
  signo.addEventListener('mouseup',function () {
      signo.setAttribute("style", "transform:scale(1,1)");
  })

  on.addEventListener('mousedown',function () {
      on.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      resetear()
  })
  on.addEventListener('mouseup',function () {
      on.setAttribute("style", "transform:scale(1,1)");
  })

  sumar.addEventListener('mousedown',function () {
      sumar.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      operandoa=resultado.textContent;
      operacion="+";
      limpiar();
  })
  sumar.addEventListener('mouseup',function () {
      sumar.setAttribute("style", "transform:scale(1,1)");
  })

  restar.addEventListener('mousedown',function () {
      restar.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      operandoa=resultado.textContent;
      operacion="-";
      limpiar();
  })
  restar.addEventListener('mouseup',function () {
      restar.setAttribute("style", "transform:scale(1,1)");
  })

  multiplicar.addEventListener('mousedown',function () {
      multiplicar.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      operandoa=resultado.textContent;
      operacion="*";
      limpiar();
  })
  multiplicar.addEventListener('mouseup',function () {
      multiplicar.setAttribute("style", "transform:scale(1,1)");
  })

  dividir.addEventListener('mousedown',function () {
      dividir.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      operandoa=resultado.textContent;
      operacion="/";
      limpiar();
  })
  dividir.addEventListener('mouseup',function () {
      dividir.setAttribute("style", "transform:scale(1,1)");
  })

  igual.addEventListener('mousedown',function () {
      igual.setAttribute("style", "transform:scale(0.95,0.95)");
      console.log("aplicar escala");
      if(operandob=="0"){
        operandob=resultado.textContent;
        console.log("Operando b no definido");
      }
      else {
        if(operandob){
          console.log("Secuencia de Operaciones");
        }
        else {
          operandob=resultado.textContent;
          console.log("Operando b no definido");
        }
      }
      resolver();
    })

    igual.addEventListener('mouseup',function () {
        igual.setAttribute("style", "transform:scale(1,1)");
    })

    //Funciones

    function limpiar(){
      resultado.textContent="";
    }

    function resetear(){
      resultado.textContent="0";
      operandoa="0";
      operandob="0";
      operacion="";
      console.log(resultado.textContent);
    }

    function digitos(){
      if (resultado.textContent.length=8){
        resultado.textContent=resultado.textContent.substring(0,8);
      }
    }

    function resolver(){
      var res=0;
      switch (operacion){
        case "+":
          res=parseFloat(operandoa)+parseFloat(operandob);
          break;
        case "-":
          res=parseFloat(operandoa)-parseFloat(operandob);
          break;
        case "*":
          res=parseFloat(operandoa)*parseFloat(operandob);
          break;
        case "/":
          res=parseFloat(operandoa)/parseFloat(operandob);
          break;
      }
      resultado.textContent=res;
      operandoa=resultado.textContent;
      console.log("nuevo operandob resolver");
      console.log(operandob);
      digitos();
    }
  }
}
Calculadora.init();
