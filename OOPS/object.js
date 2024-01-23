var person = {
  name: "alan",
  age: 23,
  place: "thiruvalla",
  display: function () {
     this.name = "sabu";
    console.log(this.name);
  },
};

// Change the value of the 'name' property
person.display();

console.log(person);
