function startQuiz(){
    document.getElementById("btnstart").onclick = window.location.href = "quiz.html";

}

function showOptions(){

    var optionsWindow = document.getElementById("options");
    if (optionsWindow.style.display == "none"){
        optionsWindow.style.display = "initial";
    }
    else{
        optionsWindow.style.display = "none";
    }
}

function saveOptions(){
    var optionsWindow = document.getElementById("options");
    var dyslexia = document.getElementById("dyslexia");
    var darkmode = document.getElementById("darkmode")
    if(optionsWindow.style.display == "initial"){
        if(dyslexia.checked == true && darkmode.checked == true){
            webstyle.setAttribute("href","stylesheets/dyslexicDM.css");
            localStorage.setItem("dyslexicDM", 1);
        }
        else if(dyslexia.checked == true){
            webstyle.setAttribute("href","stylesheets/dyslexic.css");
            localStorage.setItem("dyslexic", 1);
            localStorage.setItem("darkmode", 0);
            localStorage.setItem("dyslexicDM", 0);
        }
        else if(darkmode.checked == true){
            webstyle.setAttribute("href","stylesheets/darkmode.css");
            localStorage.setItem("darkmode", 1);
            localStorage.setItem("dyslexic", 0);
            localStorage.setItem("dyslexicDM", 0);
        }
        else{
            localStorage.setItem("dyslexicDM", 0);
            localStorage.setItem("dyslexic", 0);
            localStorage.setItem("darkmode", 0);
            webstyle.setAttribute("href","stylesheets/styling.css");
        }
    }
        optionsWindow.style.display = "none";
        location.reload();
}

function loadOptions(){
    if(localStorage.getItem("dyslexicDM") == 1){
        webstyle.setAttribute("href","stylesheets/dyslexicDM.css")
        document.getElementById("dyslexia").checked = true;
        document.getElementById("darkmode").checked = true;
    }
    else if(localStorage.getItem("dyslexic") == 1){
        webstyle.setAttribute("href","stylesheets/dyslexic.css");
        document.getElementById("dyslexia").checked = true;
    }
    else if(localStorage.getItem("darkmode") == 1){
        webstyle.setAttribute("href","stylesheets/darkmode.css");
        document.getElementById("darkmode").checked = true;
    }
    else{
        webstyle.setAttribute("href","stylesheets/styling.css");
    }
}

function colourfulSecret(){
    var code = prompt("Experience the moment.");
    if(localStorage.getItem("dyslexicDM") == 1){
        if(code == "watch?v=OQSNhk5ICTI"){
            webstyle.setAttribute("href","stylesheets/rain.css")
        }
    }
}



function getScore(){
    var points = document.querySelectorAll('[value=correct]:checked').length

    document.getElementById("result").innerHTML = "Your final result is " + points + "/15!";
}