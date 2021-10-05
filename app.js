window.onload = () => {
    let button = document.getElementById("btn");
    button.addEventListener("click", calculateBmi);
}


function calculateBmi() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("result");
    let name = document.getElementById("name").value;

    if (height === '' || isNaN(height) || height < 0) {
        result.innerHTML = "Please provide a valid height";
    } else if (weight === '' || isNaN(weight) || weight < 0) {
        result.innerHTML = "Please provide a valid weight";
    } else {
        let bmi = (weight / (height * height)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `${name}'s BMI is ${bmi}. You are underweight`;
        } else if (bmi > 18.4 && bmi < 25) {
            result.innerHTML = `${name}'s BMI is ${bmi}. You are normal`;
        } else if (bmi > 24.9 && bmi < 30) {
            result.innerHTML = `${name}'s BMI is ${bmi}. You are overweight`;
        } else {
            result.innerHTML = `${name}'s BMI is ${bmi}. You are obesity`;
        }
    }
}