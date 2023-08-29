const texttotype = document.getElementById("texttotype");
const textinput = document.getElementById("testspace");

let key;


textinput.onkeydown = function(event) {
    key = event.keyCode || event.charCode;
};




function evaluatetyping() {
    console.log(textinput.value);
    let enteredtext = textinput.value;
    let textlength = enteredtext.length;
    if( key === 8 || key === 46 ) {
        backspace();
        return 0;
    }
    else {
        if (texttotype.innerText.length < textlength) {
            restricttyping("end");
            return 0;
        }

        if (issamechar(enteredtext, textlength)) {
            console.log("CORRECT");
            indicatecorrect();
        }
        else {
            indicatewrong();
            console.log("INnnnnnnnnnnCORRECT");
        }
    }
}

function restricttyping(mode) {
    if(mode === "time") {
        textinput.setAttribute("readonly");
    }
    else {
        textinput.value = textinput.value.slice(0, -1);
    }
    
}

let lettercount = 0;

function backspace() {
    //console.log(texttotype.innerHTML);
    if (lettercount > 0) {
        lettercount--;
        if (document.getElementById("let" + lettercount).classList.contains("lettercorrect")) {
            document.getElementById("let" + lettercount).classList.remove("lettercorrect");
        }
        else {
            document.getElementById("let" + lettercount).classList.remove("letterwrong");
        }
    }
}



function indicatecorrect() {
    document.getElementById("let" + lettercount).classList.add("lettercorrect");
    lettercount++;
}
function indicatewrong() {
    textinput.value = textinput.value.substr(0, (textinput.value.length - 1)) + texttotype.innerText.charAt(textinput.value.length - 1);

    document.getElementById("let" + lettercount).classList.add("letterwrong");
    lettercount++;
}

function issamechar(text, length) {
   // if(length>0){
        if (text.charAt(length - 1) === texttotype.innerText.charAt(length - 1)) {
            return true;
        }
   // }
    return false;
}