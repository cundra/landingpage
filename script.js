// Fungsi untuk membuka modal
document.getElementById("bukaModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

// Fungsi untuk menutup modal
document.getElementById("tutupModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});


var activeGroup1Element = null;
var activeGroup2Element = null;
var activeButton1 = null;
var activeButton2 = null;

function toggleGroup1Element(elementId, button) {
    var element = document.getElementById(elementId);

    if (activeGroup1Element === element) {
        element.style.display = "none";
        element.classList.remove("active-element");
        if (activeButton1) {
            activeButton1.classList.remove("active-button");
        }
        activeGroup1Element = null;
        activeButton1 = null;
    } else {
        if (activeGroup1Element) {
            activeGroup1Element.style.display = "none";
            activeGroup1Element.classList.remove("active-element");
            if (activeButton1) {
                activeButton1.classList.remove("active-button");
            }
        }
        element.style.display = "block";
        element.classList.add("active-element");
        button.classList.add("active-button");
        activeGroup1Element = element;
        activeButton1 = button;
    }
}

function toggleGroup2Element(elementId, button) {
    var element = document.getElementById(elementId);

    if (activeGroup2Element === element) {
        element.style.display = "none";
        element.classList.remove("active-element");
        if (activeButton2) {
            activeButton2.classList.remove("active-button");
        }
        activeGroup2Element = null;
        activeButton2 = null;
    } else {
        if (activeGroup2Element) {
            activeGroup2Element.style.display = "none";
            activeGroup2Element.classList.remove("active-element");
            if (activeButton2) {
                activeButton2.classList.remove("active-button");
            }
        }
        element.style.display = "block";
        element.classList.add("active-element");
        button.classList.add("active-button");
        activeGroup2Element = element;
        activeButton2 = button;
    }
}

$(document).ready(function () {
    $("#element1").show();
    toggleGroup1Element("element1", document.getElementById("button1"));

    // Tampilkan button5 dan element5
    $("#element5").show();
    toggleGroup2Element("element5", document.getElementById("button5"));
});