function event_counter ()
{
    let counter = 0;
    let ref = getDate ();

    const innerFunc = ()=>
    {
        console.log (getDate () - ref);
        document.addEventListener ("scroll", ()=>{
            counter++;
        });
        console.log (counter);
    }
    return innerFunc;
}

const testDb = event_counter ();

testDb ();