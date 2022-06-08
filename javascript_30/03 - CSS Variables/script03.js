const spacing_elm = document.getElementById ("spacing");
const blur_elm = document.getElementById ("blur");
const color = document.getElementById ("base");
const style_controller = getComputedStyle (document.documentElement);
const root = document.documentElement;


spacing_elm.addEventListener ('input', ()=>
{
    root.style.setProperty ('--spacing', spacing_elm.value + "px");
});

blur_elm.addEventListener ('input', ()=>
{
  root.style.setProperty ('--blur', blur_elm.value + "px");
});

color.addEventListener ('input', ()=>
{
   root.style.setProperty ('--base-bg', color.value);
});