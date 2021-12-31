!function ()
{
    document.querySelectorAll("a").forEach((elemento)=>{
        elemento.addEventListener('click',(event)=>{
            event.preventDefault();
            correrUnTupidoVelo();
            setTimeout(() => {
                location.assign(elemento.href);
            }, 1000);
        });
    });
    function correrUnTupidoVelo(){
        document.querySelector("#tupido-velo").classList.replace('entrada','salida');
    }
}();