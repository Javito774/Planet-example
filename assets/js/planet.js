!function () {
    const info = location.search;
    const urlParams = new URLSearchParams(info);
    getNavList();
    getInfoPlaneta(urlParams.get("planet"));

    console.log(location);
    function getNavList() {
        const planetNames = Object.keys(planets)
        planetNames.forEach(planet => {
            planet == urlParams.get("planet") ? 
            document.querySelector("#planet-list").innerHTML += "<li active><a href='"+location.origin+location.pathname+"?planet="+planet+"'>"+ planet +"</a></li>" :
            document.querySelector("#planet-list").innerHTML += "<li><a href='"+location.origin+location.pathname+"?planet="+planet+"'>"+ planet +"</a></li>";
        });
        document.querySelectorAll("a").forEach((elemento)=>{
            elemento.addEventListener('click',(event)=>{
                event.preventDefault();
                correrUnTupidoVelo();
                setTimeout(() => {
                    location.assign(elemento.href);
                }, 1000);
            });
        });
    }
    
    function getInfoPlaneta(nombre) {
        document.querySelector("#planet-img").setAttribute("src", planets[nombre].imgPath);
        document.querySelector("#planet-name").innerHTML = planets[nombre].name;
        document.querySelector("#planet-description").innerHTML = planets[nombre].description;
        document.querySelector("#avg-planet-distance p").innerText = planets[nombre].distance.number;
        document.querySelector("#avg-planet-distance span").innerHTML = planets[nombre].distance.unidades;
        document.querySelector("#est-planet-travel-time p").innerText = planets[nombre].travel_time.number;
        document.querySelector("#est-planet-travel-time span").innerHTML = planets[nombre].travel_time.unidades;
    }
    
    function correrUnTupidoVelo(){
        document.querySelector("#tupido-velo").classList.replace('entrada','salida');
    }
}();