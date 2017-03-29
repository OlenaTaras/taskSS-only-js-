//Task 2






var num=5678901; 

var rezult=0;

function FinalSumOfDigit(num){
function sumOfDigit(x){
var a=String(x).split("");
for(i=0;i<a.length;i++){
var number = parseFloat(a[i]);
rezult=number+rezult
}
return(rezult)
};

var rezultat=sumOfDigit(num);

if (rezultat>9){
rezult=0;
var finalrezultat=sumOfDigit(rezultat);
}else{
finalrezultat=rezultat
};
return(finalrezultat);
};


console.log(num);
console.log(FinalSumOfDigit(num));

