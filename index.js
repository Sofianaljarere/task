
var lang = ["Php", "Html", "CSS", "Java"];

document.getElementById("demo").innerHTML = lang;

function myFunction() {

   var text = "";
    for (var i = 0; i < lang.length; i++) {
      text += lang[i] + "<br>";
    }
  document.getElementById("demo").innerHTML =text;
}


var person = {fname:"Sufian", midN:"Mashhour" , lname:"AL-jarere", age:23}; 

function myFunction1(){

var txt = "";
for (var x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo1").innerHTML = txt;
}


var cars = ["BMW", "Volvo", "Saab", "Ford"];

document.getElementById("demo2").innerHTML = cars;

function myFunction2(){
var i = 0;
var text = "";
while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}

document.getElementById("demo2").innerHTML = text;
}

var text = ""
var i = 0;

function myFunction3(){

do {
  text += "<br> Wellcome to website " + i;
  i++;
}
while (i < 5);  

document.getElementById("demo3").innerHTML = text;
}

function myFunction4(){
x = 5; 
elem = document.getElementById("demo4"); 
elem.innerHTML = x;           
var x;
} 

function myFunction5(){
var x = function (a, b) {return a * b};
document.getElementById("demo5").innerHTML = x(4, 3);
}


function myFunction6(){

    var x = function (a, b) {return a * b};
    document.getElementById("demo6").innerHTML = x;
}

function myFunction7(){

    function calc (a,b,c = 3){

        return (a * b * c) / 1
    }

    document.getElementById("demo7").innerHTML = calc(3,1);


}


function myFunction8(){

    function outerfunction(){
        var outer = 100;

        function innerfun() {
            alert(outer);
            
        }
        return innerfun;
    }
    var func = outerfunction();
    func();
        
    }




    

    function myFunction9() {
      const message = document.getElementById("p01");
      message.innerHTML = "";
      let x = document.getElementById("demo9").value;
      try { 
        if(x == "")  throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x >=20)   throw "is  too  high";
        if(x >= 10)   throw "is high";
        if(x >= 5)  throw "is low";
        if(x < 5)  throw "is too low";
      }
      catch(err) {
        message.innerHTML = "Input " + err;
      }
      finally {
        document.getElementById("demo9").value = "";
      }
    }
    







   

    

       
    



    
    


       
    
    
