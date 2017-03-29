
//Task 3





/*

var image = document.getElementById('image');
image.addEventListener('click',  function(){
  
   this.style.height = '500px';
   this.style.width= '500px';
});
*/

var str="aa%%%..";
//document.getElementById("str").innerHTML=str;
var a=str.split("");

a.sort();

var rezult = {};

for(k in a){
var element=a[k];
var count=0;

		function Counting(element){   //Функція що рахує кількість повторів
		for(i=0;i<a.length;i++){
  	  	if (element===a[i]) {count=count+1;
  	  					
  	  						}else{count=count;}
    	}; 
     
    	return(count);
		};


rezult[element]=Counting(element);
};

//Фукнція виводить обєкт


function alertObj(rezult) { 
    var str = ""; 
    for(k in rezult) { 
        str += k+": "+ rezult[k]+"\r\n"; 
    } ;
    return(str); 
} ;

console.log(rezult);

//document.getElementById("rezult").innerHTML=alertObj(rezult);
/*
var images = document.getElementById('image');

images = require( '../functions/functionscale.js' );
*/



