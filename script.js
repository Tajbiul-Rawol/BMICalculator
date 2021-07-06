let button = document.getElementById('button');
button.addEventListener('click', ()=>{

    let cm = document.getElementById("cm").value;
    let kg = document.getElementById("kg").value;
    
    if (cm.length == 0) {
        document.getElementById("cmerror").innerHTML = "Height cannot be empty!";
        return 0;
    }
    if (kg.length == 0) {
        document.getElementById("kgerror").innerHTML = "Weight cannot be empty!";
        return 0;
    }
    document.getElementById("cmerror").innerHTML = " ";
    document.getElementById("kgerror").innerHTML = " ";
    
    let bmi = ((kg / (cm*cm))*10000).toFixed(2); 
    document.getElementById("result").innerHTML = bmi;

    
});