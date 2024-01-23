// let d=new Date()
// console.log('hello')
// for(i=0;i<100;i++)    -> this indicates the process of synchronous in javascript
// {
//     console.log('loop')
// }


// var soup=d.getSeconds()
// var process_time=new Date()-soup
// console.log(process_time)


// function longtask(milliSecondTime){
//     d=new Date()
//     while((new Date-d)<=milliSecondTime){

//     }
// }
// function end(){
//     console.log('end')
// }
// console.log('started')
// setTimeout(end,45)// SetTimeOut(function_name,parameter_value) -> asynchronus process
// console.log("started");
// setTimeout(end, 45);
// console.log("started");
// setTimeout(end, 45);
// console.log("started");
// setTimeout(end, 45);
// console.log("started");
// setTimeout(end, 45);

var hello=(data)=>{
    console.log('data:'+data)
}
var hey=function(callback){

    console.log('hey working')

    callback("jesus is great")
}
hey(hello)