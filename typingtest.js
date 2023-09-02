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
    console.log("Typed text:" + enteredtext + "\nNow typed char:" + enteredtext.charAt(textlength - 1));
    //console.log("Typed innerHTML:" + textinput.innerHTML);
    if (key === "Backspace") {
        backspace();
        return 0;
    }
    else if (key === " ") {
        console.log("Space pressed");
        if(enteredtext.charAt(textlength-1) === " ") {
            if(textinput.innerHTML.indexOf("</pre>") === -1) {
                textinput.innerHTML = "<pre>" + textinput.innerText.slice(0, -1 ) + " " + "</pre>";
            }
            else {
                /*if((enteredtext.charAt(0) != texttotype.innerText.charAt(0)) && (enteredtext.charAt(0) === " ")) {
                    textinput.innerHTML = textinput.innerHTML.slice(0,5) + textinput.innerHTML.slice(6);
                    console.log(textinput.innerText);
                }*/
                textinput.innerHTML = textinput.innerHTML.slice(0, (textinput.innerHTML.indexOf("</pre>")-1)) + " </pre>";
                //console.log(textinput.innerText);
                //console.log("Typed innerHTML:" + textinput.innerHTML);
            }
        }
    }
    if (texttotype.innerText.length < textlength) {
        restricttyping();
        return 0;
    }

    if (issamechar(textinput.innerText, textinput.innerText.length)) {
        console.log("CORRECT");
        indicatecorrect();
    }
    else {
        console.log("INCORRECT");
        indicatewrong();
    }

    let range = document.createRange();//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(textinput);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    let selection = window.getSelection();//get the selection object (allows you to change selection)
    selection.removeAllRanges();//remove any selections already made
    selection.addRange(range);//make the range you have just created the visible selection
    
    console.log("AFTER EVALUATION \n--------------------------------------");
    console.log("Typed innerHTML:" + textinput.innerHTML);
    console.log("Typed innerText:" + textinput.innerText);
    console.log("--------------------------------------");
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