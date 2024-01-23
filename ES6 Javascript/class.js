class sample{
    halo(){
        console.log("hellooo gooys")
    }
}
class hello extends sample { //extends-that holds the idea of get all elements of main class 
    constructor(num1,num2){
        super()//to the access the models of base class and sub class  
        this.num1=num1
        this.num2=num2
    }

 hello(){
    console.log("hello world: "+(this.num1+this.num2))//this -it is a keyword that tells about the referenceing the datatypes
 }



}
let hey=new hello(10,20)// new - It is a keyword that tells about creation of object 
hey.hello()
hey.halo()