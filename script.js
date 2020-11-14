let marks = 90;

if (marks < 35){
    console.log(typeof  +'FAIL')
}else if(marks ==35){
    console.log('JUST PASS')
}else if(marks < 60){
    console.log('SECOND CLASS')
}else if(marks < 80){
    console.log('FIRST CLASS')
}else{
    console.log('DISTINCTION')
}

switch(true){
  case marks <35:
    console.log('FAIL');
    break;

  case marks ==35:
   console.log('JUST PASS');
   break;

  case marks < 60:
   console.log('SECOND CLASS');
   break;
   
  case marks < 80:
    console.log('FIRST CLASS');
    break;

  default:
    console.log('DISTINCTION');
    break; 
}