function appendToDisplay(value) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);

    // Prevent multiple consecutive operators
    if ("+-*/%".includes(value) && "+-*/%".includes(lastChar)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display').value;

    try {
        document.getElementById('display').value = eval(display.replace('%', '/100'));
    } catch (e) {
        alert('Invalid Expression');
    }
}
