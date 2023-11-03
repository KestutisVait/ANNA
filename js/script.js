
let naujienlaiskis = document.getElementById("e-mail");
if (naujienlaiskis){
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
}

if(document.getElementById("scroll_right")){
    sliderControl("scroll_right", 1);
    sliderControl("scroll_left", -1);
}
/**
 * uzdeda mygtukui eventListener ir
 * kontroliuoja i kuria puse stumiasi karusele
 * @param {string} scroll_direction element id
 * @param {number} amount 1 | -1
 * @example sliderControl("scroll_left", -1)
 */
function sliderControl(scroll_direction, amount){
    document.getElementById(scroll_direction).addEventListener("click", function(){
        document.getElementById("slider").scrollBy({
            left: amount,
            behavior: "smooth"
        })  
    })
}
document.getElementById("hamburger_meniu").addEventListener("click", meniuOff);
flag = true;
function meniuOff(){
    let hamburger = document.getElementById("hamburger_meniu");
    let mygtukai = document.getElementsByClassName("drop_content")[0];
    let menu = document.getElementsByClassName("nav")[0]; 
    if(hamburger = flag){
        mygtukai.style.display = "flex";
        mygtukai.style.flexDirection = "column";
        mygtukai.style.alignItems = "center";
        mygtukai.style.marginLeft = "-3.1rem";
        menu.style.paddingBottom = "10rem";
    }else{
        mygtukai.style.display = "none";
        menu.style.paddingBottom = "0";
    }
    flag = !flag;
}