const form = document.querySelector('form');
//this usecase will give empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";

    }
    else {
        //BMI = weight (kg) / (height (m))²
        const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
        resultMessage(BMI, results);

    }

})
const resultMessage = (bmiValue, results) => {

    if (bmiValue < 18.6) {
        results.innerHTML = `<span>${bmiValue}: Under Weight</span>`
    }
    else if (bmiValue > 18.6 && bmiValue <= 24.9) {
        results.innerHTML = `<span>${bmiValue}: Normal Weight</span>`
    }
    else if (bmiValue > 24.9) {
        results.innerHTML = `<span>${bmiValue}: Over Weight</span>`
    }
}