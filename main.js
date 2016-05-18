 
 
 var y = 0;
  if (function f(){}) {
    y += typeof f;// y= y+typeof f ; funksiya teyin olunmayib.
  }
  console.log(y);//netice 0undefined , 
  
  
  //2
  
   var myArr =  ['a','b','c','d','e','f'];
	myArr.length=0;//birinci usul.
	myArr.splice(0, myArr.length);//ikinci usul
   console.log(myArr);
   
   
   //3
  
   var bar = true;//boolean algebra;
	console.log(bar + 0);  //true=1; 1+0=1
	console.log(bar + "xyz");  // true burda string kimi tanilir = string;
	console.log(bar + true);  // true =1 (false=0) 1+1=2;
	console.log(bar + false);// false =0; 1+0=1;

	//4
	var salary = "1000$";

 (function () {
	 
	 var salary = "5000$";
     console.log("Original salary was " + salary);

     

     console.log("My New Salary " + salary);
 })();	 // qeyd olunan funksiya ozunu cagiran funksiyasi kimi tanilir 'self-invoking functions' , onun ucun global var lazim deyil. o onu oxumayacaq . Oxunma yuxardan ashaqi . Buna esasen 1 salary undefenid kimi qeyd olunacaq.