const valuPass = document.getElementById("valuPass")
const inputBox1 = document.getElementById("inputBox1")
const inputBox2 = document.getElementById("inputBox2")
const btn = document.getElementById("btn")

btn.onclick = () => {
    const inputValu1 = inputBox1.value;
    const inputValu2 = inputBox2.value;
    if (inputValu1 == "" && inputValu2 == "") {
        valuPass.innerText = "Fill the box with any number";
    }
    else if (inputValu1 > inputValu2) {
        valuPass.innerText = `Input1= ${inputValu1}`;
    }
    else if (inputValu1 < inputValu2) {
        valuPass.innerText = `Input2= ${inputValu2}`;
    }
    else {
        valuPass.innerText = "Both Side Are Equal";
    }
};