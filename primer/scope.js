
function Class_test(name)
{
    this.name = name;
}
Class_test.prototype.ask = ()=>{
    console.log ("how are you today ? " + this.name);
}

var person = new Class_test ("yassir");
person.ask();


class Student {
    constructor (name)
    {
        this.name = name;
    }
    greet ()
    {
        console.log ("hello " + this.name);
    }
    ask (topic)
    {
        if (topic.includes ("weather"))
        {
            console.log ("how is the weather today ?");
        }
        else if (topic.includes ("name"))
        {
            console.log ("what is your name ?");
        }
        else if (topic.includes ("age"))
        {
            console.log ("how old are you" + this.name);
        }
    }
}

var std_1 = new Student("yassir");

std_1.greet();
std_1.ask("age");