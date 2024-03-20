
const oddNumbers = [];
const evenNumbers = [];

function submitInteger() {
    let userInput = parseInt(document.getElementById('integerInput').value);

    if (!isNaN(userInput)) {
        if (userInput % 2 === 0) {
            evenNumbers.push(userInput);
        } else {
            oddNumbers.push(userInput);
        }

        document.getElementById('oddNumbers').innerHTML =`${oddNumbers.join(', ')}`;
        document.getElementById('evenNumbers').innerHTML =`${evenNumbers.join(', ')}`;

        document.getElementById('integerInput').value = '';

        // Check if 25 integers have been entered
        if (oddNumbers.length + evenNumbers.length === 25) {
            document.getElementById('integerInput').disabled = true;
        }
    } else {
        alert("Invalid input. Please enter a valid integer.");
    }
}

function Odd() {
    const oddSum = oddNumbers.reduce((sum, num) => sum + num, 0);
    document.getElementById("calOdd").value = oddSum;
}

function Even() {
    const evenSum = evenNumbers.reduce((sum, num) => sum + num, 0);
    document.getElementById("calEven").value = evenSum;
}