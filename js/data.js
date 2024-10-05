let data = document.getElementById("data");

document.addEventListener("DOMContentLoaded", function () {
    
    data.innerHTML = localStorage.getItem("input");

    console.log(localStorage.getItem("input"))

})