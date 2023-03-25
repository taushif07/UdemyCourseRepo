
// BMI Calculator :-- 

const weight = prompt("enter your weight (in kg)");
const height = prompt("enter your height (in metre)");

const bmiResultIndicator = (weight,height) => {
    const bmiValue = bmiCalculate(weight,height);

    if(bmiValue < 18.5){
        return (`Your BMI is ${bmiValue}, so you are underweight.`)
    }else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return (`Your BMI is ${bmiValue}, so you have a normal weight.`);
    }else if (bmiValue > 24.9) {
        return (`Your BMI is ${bmiValue}, so you are overweight.`);
    }
};

const bmiCalculate = (w,h) => {
    const bmiCal = (w/(h*h));

    return (Math.round(bmiCal));
}

const mybmiValue = bmiResultIndicator(weight,height);
alert(mybmiValue);
