const images = Array.from (document.querySelectorAll ('.slide-in'));

window.addEventListener ('scroll', (e)=>
{
    debounceHandler (eventHandler, e);
});


function eventHandler (e)
{
    let minHeight;
    let maxHeight;
    let scroll;

    minHeight = offsetY (images[0]) + (images[0].clientHeight / 2);
    maxHeight = offsetY (images[0]) + (images[0].clientHeight * 2);
    scroll = window.innerHeight + window.scrollY;
    images.forEach (img=>{
        if (scroll > minHeight && scroll < maxHeight)
            console.log (img);
            //img.classList.add ('active');
        /*else    
            img.classList.remove ('active');*/
    });
   
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


function offsetY(elm)
{
    const rect =  elm.getBoundingClientRect ();
    return (rect.top + window.scrollY);
}


const debounceHandler = debounce (500);