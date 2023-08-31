const texttotype = document.getElementById("texttotype");
const textinput = document.getElementById("testspace");

let key;


textinput.onkeydown = function (event) {
    key = event.key;
};




function evaluatetyping() {
    let enteredtext = textinput.innerText;
    enteredtext = enteredtext.split(/\s+/).join(" ");
    let textlength = enteredtext.length;
    console.log("Typed text:" + enteredtext +"9"+ "\nNow typed char:" + enteredtext.charAt(textlength - 1));
    if (key === "Backspace") {
        backspace();
        return 0;
    }
    else if (key === " ") {
        console.log("Space pressed");
        if(enteredtext.charAt(textlength-1) === " ") {
            if(textinput.innerHTML.indexOf("</pre>") === -1) {
                textinput.innerHTML = textinput.innerHTML.slice(0, -2 ) + "<pre>" + " " + "</pre>";
            }
            else {
                textinput.innerHTML = textinput.innerHTML.slice(0, ((textinput.innerHTML.indexOf("</pre>"))-1 )) + " " + "</pre>";
            }
        }
    }
    if (texttotype.innerText.length < textlength) {
        restricttyping();
        return 0;
    }

    if (issamechar(enteredtext, textlength)) {
        console.log("CORRECT");
        indicatecorrect();
    }
    else {
        console.log("INCORRECT");
        indicatewrong();
    }

    /*let element = textinput;
    let selected = window.getSelection();
    let range = document.createRange();
    range.setStart(element.childNodes[0], textinput.innerText.length);
    range.collapse(true);
    selected.removeAllRanges();
    selected.addRange(range); 
    element.focus();*/
}

function restricttyping() {
    //console.log("Inside restricttyping function");
    textinput.setAttribute("contenteditable", "false");
    textinput.innerText = textinput.innerText.slice(0, -1);
}

let lettercount = 0;

function backspace() {
    //console.log("Inside backspace function");
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
    //console.log("Inside indicatecorrect function");
    document.getElementById("let" + lettercount).classList.add("lettercorrect");
    lettercount++;
}
function indicatewrong() {
    //console.log("Inside indicatewrong function");
    //textinput.innerText = textinput.innerText.slice(0, (textinput.innerText.length - 1)) + texttotype.innerText.charAt(textinput.innerText.length - 1);
    document.getElementById("let" + lettercount).classList.add("letterwrong");
    lettercount++;
}

function issamechar(text, length) {
    //console.log("Inside issamechar function");
    if (length > 0) {
        if (text.charAt(length - 1) === texttotype.innerText.charAt(length - 1)) {
            console.log("Same letter");
            return true;
        }
    }
    //console.log("different letter");
    return false;
}