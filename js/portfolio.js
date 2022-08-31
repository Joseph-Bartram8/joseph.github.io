function menuClick(element)
{
    resetMenus();
    document.getElementById(element.id).className = "d_submenu d_submenu_selected";
    resetCopy();
    switch (element.id)
    {
        case "mWeb":
            document.getElementById("copyWeb").style.display = "block";
            break;
        case "mCSharp":
            document.getElementById("copyCSharp").style.display = "block";
            break;
        case "mUnity":
            document.getElementById("copyUnity").style.display = "block";
            break;
            
    }
}

function resetMenus()
{
    document.getElementById("mWeb").className = "d_submenu";
    document.getElementById("mCSharp").className = "d_submenu";
    document.getElementById("mUnity").className = "d_submenu";
}

function resetCopy()
{
    document.getElementById("copyWeb").style.display = "none";
    document.getElementById("copyCSharp").style.display = "none";
    document.getElementById("copyUnity").style.display = "none";
}

function showCard1() {
    document.getElementById('menu_button2').checked = true;
    document.getElementById('overlayClose').style.display = "block";
}

function showCard2() {
    document.getElementById('menu_button3').checked = true;
    document.getElementById('overlayClose1').style.display = "block";
}

function showCard3() {
    document.getElementById('menu_button4').checked = true;
    document.getElementById('overlayClose2').style.display = "block";
}

function closeOverlay() {
    document.getElementById('overlayClose').style.display = "none";
    document.getElementById('overlayClose1').style.display = "none";
    document.getElementById('overlayClose2').style.display = "none";
}