var leapYear = function leapYear(a){
if(typeof(a) == "number"){
  if(a == 0){
    return false;
  }
  else if(a % 400 == 0){
    return true;
  }else{
    if(a % 100 == 0){
      return false;
    }
    else{
      if(a % 4 == 0){
        return true;
      }else{
        return false;
      }
    }
  }
}else{
  return false;
}
};

leapYear(100);
