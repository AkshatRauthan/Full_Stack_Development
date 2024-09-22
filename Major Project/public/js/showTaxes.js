const taxSwitch = document.getElementById("flexSwitchCheckReverse");
const taxInfo = document.getElementsByClassName("tax-info");
taxSwitch.addEventListener("click", () => {
    for (info of taxInfo){
        if (info.style.display == "inline") info.style.display = "none"
        else info.style.display = "inline"
    }
});