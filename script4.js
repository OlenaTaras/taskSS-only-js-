var array='0503733237';
var arr=array.split("");
arr.sort();
//alert(arr);

var n='0';

//document.addEventListener("number")


var count=0;



 function CountSameElement(array, n){
 	

 		for(i in arr){
    	if(arr[i]===n){count=count+1;}else{count=count};
    };
    return(count);
 }
 
 var c=CountSameElement(arr, n);
 console.log(c);
