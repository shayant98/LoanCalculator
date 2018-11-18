//lsiten for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)



//Calculate Results
function calculateResults(e) {
    console.log('Calculating');


    //UI Vars
    const ammount = document.getElementById('ammount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monlthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(ammount.value);
    const calculatedInterest = parseFloat(interest.value / 100 / 12);
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monlthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
    } else {
        showError('Check your numbers')

    }


    e.preventDefault();
}

function showError(error) {
    //create a div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    //add Class
    errorDiv.className = 'alert alert-danger';

    //create text Node and append to div
    errorDiv.appendChild(document.createTextNode(error))

    //insert error above heading
    card.insertBefore(errorDiv, heading)


    //clear error after 3 seconds
    setTimeout(ClearError, 3000);

}

//clear Error

function ClearError() {
    document.querySelector('.alert').remove()
}