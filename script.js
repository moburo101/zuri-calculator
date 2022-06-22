
   var x = prompt("Type first number");
   var oper=prompt("Enter operator(e.g, +, -, /, *)");
   var y=prompt("Type second number");
    
    if(oper=="+"){
      z=Number(x)+Number(y);
    }
    else if(oper=="/"){
      z=Number(x)/Number(y);
    }
    else if(oper=="*"){
      z=Number(x)*Number(y);
    }
    else if(oper=="-"){
      z=Number(x)-Number(y);
    }

    alert(z);




  
  