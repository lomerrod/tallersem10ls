const btn = document.getElementById("buttonText");


btn.addEventListener("click", function (){

    let input = document.getElementById("inputText");

    localStorage.setItem("input", input.value);

    console.log(localStorage.getItem("input"));

})