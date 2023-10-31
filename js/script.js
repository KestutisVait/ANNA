
let naujienlaiskis = document.getElementById("e-mail");
naujienlaiskis.addEventListener("click", () => naujienlaiskis.value = "");// paspaudus ant laukelio isnuksta tekstas, rasoma is naujo

document.getElementsByClassName("pre_footer_button")[0].addEventListener("click", tikrintiEmaila);
function tikrintiEmaila(){
    let regex = /.+(\W)?.*@\w+\.\w+/ig// regex sablonas tikrinti el pasto strukturai
    let txt = document.getElementById("e-mail");
    if (regex.test(txt.value)){ // jei ivestas tekstas atitinka regex sablona tada el pasto adresasa suformuluotas teisingai
        //cia bus kodas siunciantis al pasto adresa i duombaze
        console.log("El. pastas tinka")
    }else{
        document.getElementById("e-mail").style.backgroundColor = "#fad3c8"// jei neteisingas ,nuspalvinu laukeli rausvai (klaida!).
        txt.value = "Įveskite tinkamą el. pašto adresą !"
    }   
}
// mygtuku eventai karuselei. pastumia kairen ir desinen.
document.getElementById("scroll_right").addEventListener("click", function(){
    document.getElementById("slider").scrollBy({
        left: 1,
        behavior: "smooth"
    })  
})
document.getElementById("scroll_left").addEventListener("click", function(){
    document.getElementById("slider").scrollBy({
        left: -1,
        behavior: "smooth"
    })  
})

