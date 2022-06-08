const clock = document.querySelector (".clock-face");
console.log (clock)

function transform_function()
{
    let deg;

    deg = 1;
    const test = ()=>
    {
        clock.style.transform = `rotate(-${deg}deg)`;
        deg++;
    }
    return test;
}

const trans = transform_function ();
const intr = setInterval (trans, 1000);
