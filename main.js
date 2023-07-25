function evalFunc(textString) {
    let uservar = document.getElementById("uservar").value;
    let varval = document.getElementById("uservarval").value;
  
    let expCheck = textString.replaceAll("^", "**");
    let sqrtCheck = expCheck.replaceAll("sqrt", "Math.sqrt");
    let sinCheck = sqrtCheck.replaceAll("sin", "Math.sin");
    let cosCheck = sinCheck.replaceAll("cos", "Math.cos");
    let tanCheck = cosCheck.replaceAll("tan", "Math.tan");
    let piCheck = tanCheck.replaceAll("pi", "Math.PI");
    let eCheck = piCheck.replaceAll("e", "Math.E");
  
    uservar
      ? (eCheck = eCheck.replaceAll(String(uservar), String(varval)))
      : undefined;
  
    console.log(eCheck);
    try {
      console.log(eval(eCheck));
    } catch (e) {
      alert(e);
    }
  
    let ans = parseFloat(eval(eCheck));
  
    ans = ans.toFixed(4);
  
    return String(ans);
  }

function onNumPressed(button_num) {
  document.getElementById("inputbox").value += button_num;
}

function onSignPressed(symbol) {
  document.getElementById("inputbox").value += symbol;
}

function onEqualPressed(value) {
  let uservar = document.getElementById("uservar").value;
  if (uservar === "e" || uservar === "pi") {
    alert("Error Cannot use reserved variable name !!!");
    return;
  }

  let ans = evalFunc(document.getElementById("inputbox").value);
  document.getElementById("resultbox").textContent = ans;
}

function clearRecent() {
  let len = document.getElementById("inputbox").value.length;
  document.getElementById("inputbox").value = document
    .getElementById("inputbox")
    .value.substring(0, len - 1);
}
function clearAll() {
  document.getElementById("inputbox").value = "";
  document.getElementById("resultbox").textContent = "Result";
}

function addvar() {
  let uservar = document.getElementById("uservar").value;
  if (uservar === "e" || uservar === "pi") {
    alert("Error Cannot use reserved variable name !!!");
    return;
  }
  document.getElementById("inputbox").value += uservar;
}
