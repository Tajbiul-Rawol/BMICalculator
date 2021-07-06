let button = document.getElementById('button');
button.addEventListener('click', ()=>{

    let cm = document.getElementById("cm").value;
    let kg = document.getElementById("kg").value;

    let bmi = ((kg / (cm*cm))*10000).toFixed(2); 

    document.getElementById("result").innerHTML = bmi;
});