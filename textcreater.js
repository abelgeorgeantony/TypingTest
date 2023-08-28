const texttotype2 = document.getElementById("texttotype");
let texttobehtmllized = "Haveq";
let htmlinprogress = "";
let lettercounter = 0;
function loadText() {
    while(!(texttobehtmllized.charAt(1) === "q")) {
        addspan();
    }
    texttotype2.innerHTML = htmlinprogress;
    console.log(texttotype2.innerHTML);
}

function addspan() {
    htmlinprogress = htmlinprogress + "<span id='letter" + lettercounter + "'>" + texttobehtmllized.charAt(0) + "</span>";
    lettercounter++;
    texttobehtmllized.slice(1);
}