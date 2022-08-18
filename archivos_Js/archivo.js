 //PRIMERA ENTREGA DEL PROYECTO FINAL

//SE FILTRAN SOLO LOS BOTINES QUE SEAN DEL TIPO QUE BUSCA EL USUARIO, BASADOS EN EL TERRENO


//ARRAY BOTINES
const botines=[
    //f11
    {
        codigo:"2345123",
        nombre:"BOTINES NIKE MERCURIAL IVV",
        terreno:"f11",
        precio:35000
    },
    {
        codigo:"9099777",
        nombre:"BOTINES NIKE MERCURIAL SUPERFLY V",
        terreno:"f11",
        precio:32700
    },
    {
        codigo:"12121212",
        nombre:"BOTINES NIKE TIEMPO G7",
        terreno:"f11",
        precio:38900
    },
    //botines f5
    {
        codigo:"2345124",
        nombre:"BOTINES NIKE TIEMPO G9",
        terreno:"f5",
        precio:21500
    },
    {
        codigo:"9099775",
        nombre:"BOTINES NIKE MERCURIAL CR7 EDITION",
        terreno:"f5",
        precio:19700
    },
    {
        codigo:"12121216",
        nombre:"BOTINES NIKE MERCURIAL IV",
        terreno:"f5",
        precio:18900
    },
    //botines jr
    {
        codigo:"2345127",
        nombre:"BOTINES NIKE MERCURIAL IV JR",
        terreno:"f11",
        precio:22000
    },
    {
        codigo:"9099778",
        nombre:"BOTINES NIKE MERCURIAL IIV JR",
        terreno:"f11",
        precio:20700
    },
    {
        codigo:"12121219",
        nombre:"BOTINES NIKE MERCURIAL CR7 VII JR",
        terreno:"f11",
        precio:21500
    }    
];



//PRIMERA PARTR
//LE PEDIMOS AL USUARIO LO QUE BUSCA
let tipoBuscado = prompt(`Ingrese el tipo de botin (f11 o f5) que está buscando:`).toLowerCase();
const buscado = botines.filter(botin => botin.terreno == tipoBuscado);
console.table(buscado)


//SEGUNDA PARTE
//QUE EL USUASRIO INGRESE LO QUE PUEDE GASTAR Y SE LE MUESTRA LAS OPCIONES QUE TIENE
let saldo = parseInt(prompt(`Ingrese lo que desea gastar y se le mostrarán las opciones:`))
const opciones = botines.filter(botin => botin.precio <= saldo) 
if (saldo < 18900) {
    alert(`Lo sentimos. Su saldo es insuficiente`)
}
console.table(opciones)






