let outputEl = document.getElementById('output');

function display(num) {
    outputEl.value += num;
    
};
function calculate() {
    try {
        outputEl.value = eval(outputEl.value);
    }
    catch(error){
        alert('Enter valid Input');
    }
}
function clr(){
    outputEl.value = "";
}
function del(){
    outputEl.value = outputEl.value.slice(0,-1);
}

