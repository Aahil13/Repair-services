for (let i = 0; i < document.querySelectorAll(".responsive img").length; i++) {
    document.querySelectorAll(".responsive img")[i].addEventListener("click", function (){
        var attributes = this.getAttribute("alt");
        viewPort(attributes);
      })
}

function viewPort(main) {
    switch (main) {
        case "phone":
            document.querySelectorAll("main")[0].classList.toggle("change-view-p");
            break;
        case "laptop":
            document.querySelectorAll("main")[0].classList.toggle("change-view-l");
            break;
        case "desktop":
            document.querySelectorAll("main")[0].classList.toggle("change-view-d");
            break;
        case "tablet":
            document.querySelectorAll("main")[0].classList.toggle("change-view-t");
            break;
        default:(key)
            break;
    }
}

document.querySelector(".burger").addEventListener("click", function (){
    document.querySelector(".invisible-side").classList.add("invisible");
    document.querySelector("body").classList.add("background");
});

document.querySelector(".invisible-side .close").addEventListener("click", function (){
    document.querySelector(".invisible-side").classList.remove("invisible");
    document.querySelector("body").classList.remove("background");
});






