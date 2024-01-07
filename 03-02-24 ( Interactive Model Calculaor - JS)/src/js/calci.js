let panel = document.querySelector(".panel");
panel.focus()

function appendToPanel(char) {
    panel.value = panel.value + char;
    panel.focus()
}

function clearPanel() {
    console.log("value");
    panel.value = '';
}

function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return expression;
    }
}

function delLastValue() {
    console.log("ty")
    panel.value = panel.value.substring(0, panel.value.length - 1);
}

function calculateValue() {
    console.log("value calculated");
    panel.value = calculate(panel.value);
}