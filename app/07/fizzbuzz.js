var fizzbuzz = function fizzbuzz(a){
if(a % 3 == 0){
if(a % 15 == 0){
return "fizzbuzz";
}else{
return "fizz";
}
}else if(a % 5 == 0){
if(a % 15 == 0){
return "fizzbuzz";
}else{
return "buzz";
}
}else{
return a;
}
};
