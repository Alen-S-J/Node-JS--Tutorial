function person(name,age,place){
this.name=name
this.age=age
this.place=place
this.display=function(){
    console.log("name:"+this.name," age:"+this.age,"place",this.age)
}
}

var alan=new person("alan","44","kochi")
var sabu=new person("sabu","52","thiruvalla")

alan.display()
sabu.display()