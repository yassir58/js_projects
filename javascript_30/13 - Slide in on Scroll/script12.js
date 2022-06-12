const images = Array.from (document.querySelectorAll ('.slide-in'));

window.addEventListener ('scroll', (e)=>
{
    debounceHandler (eventHandler, e);
});


function eventHandler (e)
{
    console.dir (window.scrollY);
}

function debounce (delay)
{
    let timeoutId;
    return (callback, arg)=>
    {
        clearTimeout (timeoutId);
        timeoutId = setTimeout (callback, delay, arg);
    };
}


const debounceHandler = debounce (1000);