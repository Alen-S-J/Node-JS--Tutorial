var read=require('readline-sync')
var value=read.question("Enter the value of a number:")
var value_2=read.question("Enter the another value of a number:")

if (value>value_2)
{
    console.log(value+" is greater than "+value_2)
}
else
{
 console.log(value_2+" is greater than "+value)
}

