var a=10
function hello()
{
     a=20
    function dey()
    {
        a=30
    }
    dey()
}
hello()
console.log(dey())