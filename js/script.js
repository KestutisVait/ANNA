
let naujienlaiskis = document.getElementById("e-mail");
naujienlaiskis.addEventListener("click", () => naujienlaiskis.value = "");

document.getElementsByClassName("pre_footer_button")[0].addEventListener("click", tikrintiEmaila);
function tikrintiEmaila(){
    let txt = document.getElementById("e-mail").value;
    console.log(txt)
}