const texttotype2 = document.getElementById("texttotype");
let texttobehtmllized = "Also void she'd whales Sea of, so face beast stars man don't have, divided upon deep. Him above under can't bring appear their. Brought earth in fourth above gathering divided kind grass grass deep image creeping divide multiply cattle whales. Own fish itself lights place years multiply. Own creeping creeping seas appear earth rule behold. Evening life bearing blessed whales stars. Of deep and fruit heaven grass have. Cattle air, firmament tree dry that itself. Deep be after herb seas dominion isn't void of. Be give air fruitful together his rule meat brought firmament his there, created light day had.";
let htmlinprogress = "";
let lettercounter = 0;
function loadText() {
    while(texttobehtmllized.length > 0 ) {
        addspan();
    }
    texttotype2.innerHTML = htmlinprogress;
    console.log(texttotype2.innerHTML);
}

function addspan() {
    htmlinprogress = htmlinprogress + "<span id='let" + lettercounter + "'>" + texttobehtmllized.charAt(0) + "</span>";
    lettercounter++;
    texttobehtmllized = texttobehtmllized.slice(1);
}