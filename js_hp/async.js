function sayHi ()
{
    console.log ("Hello");
}

// console.log ("world");

// setInterval(sayHi, 1000);


function limited_repeat ()
{
    const greet = ()=>
    {
        console.log ("hi for now");
    }
    const intr = setInterval (greet, 1000);
    setTimeout(clearInterval, 5000,intr);
}

// limited_repeat ()

function execXforYsecs (func, interval, duration)
{
    const intr = setInterval (func, interval);
    setTimeout (clearInterval, duration, intr);
}

// execXforYsecs (sayHi, 1000, 8000);


function delayCounter (target, wait)
{
    const printFunc = ()=>
    {
        let i = 1;
        const intr = setInterval(() => {
            console.log (i++);
            if (i == target)
                clearInterval (intr);
        }, wait);
    }
    return printFunc;
}


const printTest = delayCounter (50, 5000);


//printTest ();


function promised (value)
{
    const prm = new Promise ((resolve, reject)=>
    {
        console.log ("getting data from server ...");
        setTimeout(() => {
            resolve (value);
        }, 2000);
    });
    return prm;
}


const data  = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

const testPrm = promised (data);

// testPrm
// .then (value=>console.log (value));



class SecondClock 
{
    constructor (cb)
    {
        this.cb = cb;
        this.seconds = 1;
        this.intr;
    }
    start ()
    {
        this.intr = setInterval(() => {
           this.cb (this.seconds++);
       }, 1000);
    }
    reset ()
    {
        clearInterval (this.intr);
        this.seconds = 1;
    }
}

function callback (seconds)
{
        console.log ("thick " + seconds++);
}

const sclock = new SecondClock (callback);
// sclock.start ();

// setTimeout (()=>{
//     sclock.reset ();
//     console.log (sclock.seconds)
// } , 15000);



function debounce (callb)
{
    let count = 0;
    let date =new Date ().getTime ();

    let inFunc = (interval)=>
    {
        setTimeout(callb, interval, date);
        count = interval;
    }
    return (inFunc);
}

function clb (ref)
{
    let date = new Date ()
    console.log (date.getTime() - ref);
} 

const dbn = debounce (clb);
dbn (5000);
dbn (1000);
dbn (5000);