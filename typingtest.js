const texttotype = document.getElementById("texttotype");
const textinput = document.getElementById("testspace");

let key;


textinput.onkeydown = function(event) {
    key = event.keyCode || event.charCode;

};


function evaluatetyping() {
    const enteredtext = textinput.value;
    const textlength = enteredtext.length;
    if( key === 8 || key === 46 ) {
        backspace(textlength);
        return 0;
    }
    else {
        if(texttotype.innerText.length < textlength) {
            restricttyping();
            return 0;
        }
    
        if(issamechar(enteredtext,textlength)) {
            console.log("CORRECT");
            indicatecorrect();
        }
        else {
            indicatewrong();
            console.log("INnnnnnnnnnnCORRECT");
        }
    }
}

function restricttyping() {
    textinput.value = textinput.value.slice(0, -1);
}

function backspace(len) {
    colorprint = colorprint.substr(0,(colorprint.lastIndexOf("<span")-1)) + texttotype.innerText.substr(len-1);
}


let colorprint = texttotype.innerHTML;
let letterclasscounter=0;
// texttotype.innerText.substr(0, (textinput.value.length-1))
function indicatecorrect() {
    if(colorprint.lastIndexOf("</span>") === -1) {
        texttotype.innerHTML = colorprint.substr(0,(textinput.value.length-1))+"<span style='background-color:green' class=\"colorletter"+letterclasscounter+"\">"+textinput.value.substr((textinput.value.length-1),(textinput.value.length))+"</span>"+texttotype.innerText.substr((textinput.value.length));
    }
    else {
        texttotype.innerHTML = colorprint.substr(0,(colorprint.lastIndexOf("</span>")+6))+"<span style='background-color:green' class=\"colorletter"+letterclasscounter+"\">"+textinput.value.substr((textinput.value.length-1),(textinput.value.length))+"</span>"+texttotype.innerText.substr((textinput.value.length));
    }
    colorprint = texttotype.innerHTML;
    letterclasscounter++;
    console.log(colorprint);
}
function indicatewrong() {
    textinput.value = textinput.value.substr(0, (textinput.value.length-1)) + texttotype.innerText.charAt(textinput.value.length-1);
    if(colorprint.lastIndexOf("</span>") === -1) {
        texttotype.innerHTML = colorprint.substr(0,(textinput.value.length-1))+"<span style='background-color:red' class=\"colorletter"+letterclasscounter+"\">"+textinput.value.substr((textinput.value.length-1),(textinput.value.length))+"</span>"+texttotype.innerText.substr((textinput.value.length));
    }
    else {
        texttotype.innerHTML = colorprint.substr(0,(colorprint.lastIndexOf("</span>")+6))+"<span style='background-color:red' class=\"colorletter"+letterclasscounter+"\">"+textinput.value.substr((textinput.value.length-1),(textinput.value.length))+"</span>"+texttotype.innerText.substr((textinput.value.length));
    }
    colorprint = texttotype.innerHTML;
    letterclasscounter++;
    console.log(colorprint);
}

function issamechar(text,length) {
    if(text.charAt(length - 1) === texttotype.innerText.charAt(length - 1)) {
        return true;
    }
    return false;
}