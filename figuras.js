
/*--------------ESTE ES EL CODIGO DEL CUADRADO--------------*/
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
perimetroCuadrado();
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

/*--------------ESTE ES EL CODIGO DEL TRIANGULO--------------*/
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriguanlo = 4;
// console.log("Los lados del triangulo mide: " + ladoTriangulo1 + "cm, " + ladoTriangulo2+ "cm, " + baseTriguanlo + "cm.");
// const alturalTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturalTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriguanlo;
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
perimetroTriangulo();
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriguanlo * alturalTriangulo / 2);
function areaTriangulo(base, altura){
    return ((base * altura) / 2);
}
areaTriangulo();
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

/*--------------ESTE ES EL CODIGO DEL CIRCULO--------------*/
console.group("Círculo");
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// const PI = Math.PI;
// console.log("El PI del circulo es: " + PI);

// const perimetroCirculo = (diametroCirculo * PI);
function perimetroCirculo(radio){
    return ((radio * 2) * Math.PI);
}
perimetroCirculo();
// console.log("El perímetro del circulo es: " + Math.round(perimetroCirculo) + "cm");

// const areaCirculo = (PI * (radioCirculo * radioCirculo));
function areaCirculo(radio){
    return (Math.PI * (radio * radio));
}
areaCirculo();
// console.log("El área del circulo es: " + Math.round(areaCirculo) + "cm");
console.groupEnd();

/*--------------AQUI INTERACTUAMOS CON EL HTML--------------*/

/*--------------------------------AQUI SE CALCULO SOLO LO DEL CUADRADO--------------------------------*/
function calcularPerimetroCuadrado(){
    //ESTA RECIBE EL VALOR DEL USUARIO
    const input = document.getElementById("inputCuadrado");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const value = input.value;

    const result = document.getElementById("resultadoCuadrado");
    const perimetro = perimetroCuadrado(Number(value));
    result.innerText = `The perimeter is: ${perimetro} cm`;
}

function calcularAreaCuadrado(){
    //ESTA RECIBE EL VALOR DEL USUARIO
    const input = document.getElementById("inputCuadrado");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const value = input.value;

    const result = document.getElementById("resultadoCuadrado");
    const area = areaCuadrado(Number(value));
    result.innerText = `The area is: ${area} cm²`;
}

/*--------------------------------AQUI SE CALCULO SOLO LO DEL TRIANGULO--------------------------------*/
function calcularPerimetroTriangulo(){
    /*------LADO 1------*/
    //ESTA RECIBE EL VALOR DEL USUARIO
    const input1 = document.getElementById("inputTrianguloSide1");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const side1 = input1.value;
    /*------LADO 2------*/
    const input2 = document.getElementById("inputTrianguloSide2");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const side2 = input2.value;
    /*------LADO 3------*/
    const input3 = document.getElementById("inputTrianguloBase");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const base = input3.value;

    const result = document.getElementById("resultadoTriangulo");
    const perimetro = perimetroTriangulo(Number(side1),Number(side2),Number(base));
    result.innerText = `The perimeter is: ${perimetro} cm`;
}
function calcularAreaTriangulo(){
    /*------BASE------*/
    const input1 = document.getElementById("inputTrianguloBase");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const base = input1.value;
    /*------ALTURA------*/
    const input2 = document.getElementById("inputTrianguloAltura");
    //ESTO LO CONVIERTE EN UN VALOR PARA PODER EVALUARLO
    const altura = input2.value;

    const result = document.getElementById("resultadoTriangulo");
    const area = areaTriangulo(Number(base),Number(altura));
    result.innerText = `The area is: ${area} cm²`;
}

/*--------------------------------AQUI SE CALCULO SOLO LO DEL CIRCULO--------------------------------*/
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputcirculoradio");
    const radio = input1.value;

    const result = document.getElementById("resultadocirculo");
    const perimetro = perimetroCirculo(radio);
    result.innerText = `The perimeter is: ${Math.round(perimetro)} cm`;
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("inputcirculoradio");
    const radio = input1.value;

    const result = document.getElementById("resultadocirculo");
    const area = areaCirculo(radio);
    result.innerText = `The perimeter is: ${Math.round(area)} cm²`;
}