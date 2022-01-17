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
    document.querySelector(".q4 .result").innerHTML = "";
    const q4 = document.querySelector(".q4");
    const year = document.querySelector(".q4 input").value;
    if (year > 0) {
        q4.appendChild(document.querySelector(".q4 .result").innerHTML = (2022 - year)+" años.")
    }else if(year == 0){
        q4.appendChild(document.querySelector(".q4 .result").innerHTML = year +" años.");
    }else{
        q4.appendChild(document.querySelector(".q4 .result").innerHTML = "Error");
    }
};

const fq5 = () =>{
    document.querySelector(".q5 .result").innerHTML = "";
    const q5 = document.querySelector(".q5");
    const peso = document.querySelector(".q5 input:first-of-type").value;
    const altura = document.querySelector(".q5 input:last-of-type").value;
    
    const res = peso/(parseFloat(altura)**2);
    q5.appendChild(document.querySelector(".q5 .result").innerHTML = `Tu BMI es: ${res}.`);
};

const fq6 = () =>{
    document.querySelector(".q6 .result").innerHTML = "";
    const q6 = document.querySelector(".q6");
    
    if (document.querySelector(".q6 input").value > 10){
        q6.appendChild(document.querySelector(".q6 .result").innerHTML = `El numero es mayor a 10.`);
    }else{
        q6.appendChild(document.querySelector(".q6 .result").innerHTML = `El numero es menor o igual a 10.`);
    }
    
};

const fq7 = () =>{
    document.querySelector(".q7 input").removeAttribute("style");
    document.querySelector(".q7 .result").innerHTML = "";
    const q7 = document.querySelector(".q7");
    
    random = Math.floor(Math.random()*10+1);
    
    if (random == document.querySelector(".q7 input").value){
        document.querySelector(".q7 input").setAttribute("style","background-color: lightgreen");
        q7.appendChild(document.querySelector(".q7 .result").innerHTML = "Felicitaciones, ese era!");
    }else{
        q7.appendChild(document.querySelector(".q7 .result").innerHTML = `El número era ${random}. Lo siento, intenta nuevamente!`);
    }
};

const fq8 = () =>{
    document.querySelector(".q8 .result").innerHTML = "";
    const q8 = document.querySelector(".q8");
    
    if (document.querySelector(".q8 input").value % 5 != 0){
        q8.appendChild(document.querySelector(".q8 .result").innerHTML = `No, el número ${document.querySelector(".q8 input").value} no es múltiplo de 5.`);
    }else{
        q8.appendChild(document.querySelector(".q8 .result").innerHTML = `Si, el número ${document.querySelector(".q8 input").value} es múltiplo de 5.`);
    }
};

const fq9 = () =>{
    document.querySelector(".q9 .result").innerHTML = "";
    const q9 = document.querySelector(".q9");
    
    if (document.querySelector(".q9 input").value < 10){
        q9.appendChild(document.querySelector(".q9 .result").innerHTML = `El numero es menor a 10.`);
    }else if (document.querySelector(".q9 input").value > 10){
        q9.appendChild(document.querySelector(".q9 .result").innerHTML = `El numero es mayor a 10.`);
    }else{
        q9.appendChild(document.querySelector(".q9 .result").innerHTML = `El numero es igual a 10.`);
    }
    
};

const fq10 = () =>{
    document.querySelector(".q10 .result").innerHTML = "";
    const q10 = document.querySelector(".q10");
    const peso = document.querySelector(".q10 input:first-of-type").value;
    const altura = document.querySelector(".q10 input:last-of-type").value;
    
    const res = peso/(parseFloat(altura)**2);
    if(res<1.85){
        q10.appendChild(document.querySelector(".q10 .result").innerHTML = `Tu BMI es: ${res.toFixed(2)}. "Bajo de peso".`);
    }else if(res>=1.85&&res<=24.9){
        q10.appendChild(document.querySelector(".q10 .result").innerHTML = `Tu BMI es: ${res.toFixed(2)}. "Normal".`);
    }else if(res>=25&&res<=29.9){
        q10.appendChild(document.querySelector(".q10 .result").innerHTML = `Tu BMI es: ${res.toFixed(2)}. "Sobrepeso".`);
    }else{
        q10.appendChild(document.querySelector(".q10 .result").innerHTML = `Tu BMI es: ${res.toFixed(2)}. "Obeso".`);
    }
};

const fq11 = () =>{
    document.querySelector(".q11 .result").innerHTML = "";
    const q11 = document.querySelector(".q11");
    
    if (document.querySelector(".q11 input").value % 3 == 0){
        if (document.querySelector(".q11 input").value % 5 == 0){
            q11.appendChild(document.querySelector(".q11 .result").innerHTML = `"bingbong".`);
        }else{
            q11.appendChild(document.querySelector(".q11 .result").innerHTML = `"bing".`);
        }
    }else if(document.querySelector(".q11 input").value % 5 == 0){
        q11.appendChild(document.querySelector(".q11 .result").innerHTML = `"bong."`);
    }else{
        q11.appendChild(document.querySelector(".q11 .result").innerHTML = `${document.querySelector(".q11 input").value}.`);
    }
};


const exercises = (excercise,fExcercise)=>{
    document.querySelector(`${excercise} button`).addEventListener("click",fExcercise);
}

exercises(".q1",fq1);
exercises(".q2",fq2);
exercises(".q3",fq3);
exercises(".q4",fq4);
exercises(".q5",fq5);
exercises(".q6",fq6);
exercises(".q7",fq7);
exercises(".q8",fq8);
exercises(".q9",fq9);
exercises(".q10",fq10);
exercises(".q11",fq11);




const boton1 = document.querySelector(".leaves button:nth-child(1)");

boton1.addEventListener("focus",()=>{
    document.querySelector(".leaf2").setAttribute("style","display:none");
    document.querySelector(".leaf1").setAttribute("style","display:block");
})
const boton2 = document.querySelector(".leaves button:nth-child(2)");

boton2.addEventListener("focus",()=>{
    document.querySelector(".leaf1").setAttribute("style","display:none");
    document.querySelector(".leaf2").setAttribute("style","display:block");
})

