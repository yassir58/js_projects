function test_func ()
{
    var test = 12;
    return (this.test * 2);
}
test_func.test = 10
console.log (test_func.test);
console.log (test_func());