const elements = document.getElementsByClassName("key");

for (let key of elements)
{
    let keyValue;
    let audio;

    keyValue = key.dataset.key;
    key.addEventListener ("click", ()=>
    {
        key.classList.add("playing");
        audio = document.querySelector (`[data-keyId=${'"' + keyValue + '"'}]`);
        audio.play ()
        setTimeout (()=>
        {
            key.classList.remove ("playing");
        }, 70);
        console.log (key.dataset.key)
    })
}