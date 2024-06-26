function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please enter both weight and height';
    }
}
