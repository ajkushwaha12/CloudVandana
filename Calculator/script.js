
        let display = document.getElementById('result');
        let expression = "";

        function appendToDisplay(value) {
            expression += value;
            display.value = expression;
        }

        function calculateResult() {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch (error) {
                display.value = "Error";
            }
        }

        function clearDisplay() {
            expression = "";
            display.value = "";
        }