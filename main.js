const form = document.getElementById("form-campos");

function compara(numeroA,numeroB){
    const valueA = Number(numeroA);
    const valueB = Number(numeroB);

    if(valueA > valueB){
        return "maior";
    } else if(valueA === valueB){
        return "igual";
    } else{
        return "menor";
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const campoA = document.getElementById("campo-A");
    const campoB = document.getElementById("campo-B");
    const mensagemsucesso = document.querySelector(".success-message")
    const mensagemerro = document.querySelector(".error-message")

    if(compara(campoA.value,campoB.value) === "maior"){
        mensagemerro.innerHTML = `O campo A é <b>maior</b> que o campo B |  <b>${campoA.value}</b> é <b>maior</b> que <b>${campoB.value}</b> .`;
        mensagemerro.style.display = "block";
        mensagemsucesso.style.display = "none";
    } else if(compara(campoA.value,campoB.value) === "igual"){
        mensagemerro.innerHTML = `O campo A é <b>igual</b> ao campo B |  <b>${campoA.value}</b> é <b>igual</b> a <b>${campoB.value}</b> . `;
        mensagemerro.style.display = "block";
        mensagemsucesso.style.display = "none";
    } else{
        mensagemsucesso.innerHTML = `O campo A é <b>menor</b> que o campo B |  <b>${campoA.value}</b> é <b>menor</b> que <b>${campoB.value}</b> . `;
        mensagemsucesso.style.display = "block";
        mensagemerro.style.display = "none";
    }

    campoA.value = ""
    campoB.value = ""
})