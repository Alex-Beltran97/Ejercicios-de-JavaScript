const fq1 = ()=>{
    document.querySelector(".q1 .result").innerHTML = "";
    const q1 = document.querySelector(".q1");
    const palabra = prompt("Ingresa aquí una palabra:");
    q1.appendChild(document.querySelector(".result").innerHTML = palabra);
};

const fq2 = ()=>{
    document.querySelector(".q2 .result").innerHTML = "";
    const q2 = document.querySelector(".q2");
    const palabra = prompt("Ingresa aquí tu nombre:");
    q2.appendChild(document.querySelector(".q2 .result").innerHTML = `Hola ${palabra}!`);
};

const fq3 = ()=>{
    document.querySelector(".q3 .result").innerHTML = "";
    const q3 = document.querySelector(".q3");
    const num1 =  parseInt(document.querySelector(".q3 input:first-of-type").value);
    const num2 =  parseInt(document.querySelector(".q3 input:last-of-type").value);
    q3.appendChild(document.querySelector(".q3 .result").innerHTML = num1+num2);
};

const fq4 = ()=>{
    document.querySelector(".q3 .result").innerHTML = "";
    const q4 = document.querySelector(".q4");
    q4.appendChild(document.querySelector(".q4 .result").innerHTML = (2022 - document.querySelector(".q4 input").value)+" años.");
};

document.querySelector(".q1 button").addEventListener("click",fq1);
document.querySelector(".q2 button").addEventListener("click",fq2);
document.querySelector(".q3 button").addEventListener("click",fq3);
document.querySelector(".q4 button").addEventListener("click",fq4);
