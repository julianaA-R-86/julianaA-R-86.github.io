
alert("Hola mi nombre es R.I, 😁 soy un programa creado por la maestra Juliana Apaza Roca 🐹, mi proposito es brindarte examenes que puedas resolver 🙌😊, y que puedas aprender de la manera mas facil posible suerte")
let usuario = prompt("¿Cuál es tu nombre completo y apellido?. 😊 ");
alert("mucho gusto!.😊😘:  " + usuario )
let ia = prompt("ahora es tu turno, deacuerdo 😊 " + usuario + " debes de asignarme un apodo o nombre, que sea apropiado plis 😁😊");
alert("increible me gusta mi apodo ❤️ " + ia + " ahora prosigamos " + usuario );
let año = prompt("que año cursas 🤷‍♂️😁 " + usuario )

alert ("bueno continuemos con este examen" + año + " del área de Ciencias Sociales de la maestra Juliana Apaza Roca 😊🙌")
alert(`buena suerte con el examen de 😁😘 ${año}, ${usuario}`)





const bd_juego=[
    {

id:0,
pregunta:"¿Cuando se inicio y finalizo la guerra del chaco?",
op0:"inicio el 9 de septiembre de 1932 y finalizo el 12 de junio de 1935",
op1:"inicio el 9 de septiembre de 1932 y finalizo el 12 de junio de 1934",
op2:"inicio el 9 de septiembre de 1932 y finalizo el 12 de junio de 1933",
op3:" ninguna de las anteriores",

correcta:"0"

},



{
    id:1,
    pregunta: " ¿Cuanto km perdio en la guerra del chaco?",
    op0:"240mil km",
    op1:"250mil km",
    op2:"260mil km",
    correcta:"0"
    },


    {

        id:2,
        pregunta:"¿Cuando se firmo el tratado de paz y amistad?",
        op0:"21 de julio de 1937",
        op1:"21 de julio de 1938",
        op2:"21 de julio de 1940",
        correcta:"1"
        
        },

        {

            id:3,
            pregunta:"¿Quien le ayudo a bolivia en la guerra del chaco?",
            op0:"la mision militar checos lo Vaca",
            op1:"la mision militar peruana ",
            op2:"la mision militar colombiana",
        
            
            correcta:"0"
            
            },


            {

                id:4,
                pregunta:"¿Quien era el presidente de bolivia durante la guerra del chaco?",
                op0:"Daniel Zalamanca Urei ",
                op1:"Zarate Willca",
                op2:"Severo Fernadez",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta:"¿Quien era el general durante la guerra del chaco?",
                    op0:"Hans lanchi",
                    op1:"Hans kunt",
                    op2:"hans dimitri",
                    
                    
                    correcta:"1"
                    
                    },

                    {

                        id:6,
                        pregunta:"¿Que cambio trajo la guerra del chaco?",
                        op0:"el final del periodo conservador",
                        op1:"el final del periodo liberal",
                        op2:"el final del periodo imperialista",
                       
                        
                        correcta:"0"
                        
                        },


                        {

                            id:7,
                            pregunta:"¿Quienes comprendian la generacion de 3 pasos al frente?",
                            op0:"jovenes cadetes de 16 a 20 años",
                            op1:"jovenes cadetes de 16 a 25 años",
                            op2:"jovenes cadetes de 16 a 23 años",
                            
                            correcta:"0"
                            
                            },

                            {

                                id:8,
                                pregunta:"¿Cual era la mision de 3 pasos al frente?",
                                op0:"Era guiar a los reclutas sin experiencia militar",
                                op1:"Era guiar a los reclutas con experiencia militar",
                                op2:"Era guiar a los reclutas con experiencia en caballeria",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta:"¿En donde y en que fecha nacio Enrique Suarez Dicker?",
                                    op0:"nacio en cachuela esperanza en 1917",
                                    op1:"nacio en cachuela esperanza en 1918",
                                    op2:"nacio en cachuela esperanza en 1919",
                                 
                                    
                                    correcta:"2"
                                    
                                    }, 
                                    


                
]



// para guardar las respuestas elegidas

let respuestas=[];

let cantiCorrectas=0;

let numPregunta=0;


function cargarPreguntas() 


{

    const pregunta=bd_juego [numPregunta];

    const contenedor =document.createElement("div");

    contenedor.className="contenedor-preguntas";
    contenedor.id=pregunta.id;
    

const h2= document.createElement("h2");


h2.textContent = pregunta.id + 1 +" .- " + pregunta.pregunta;
contenedor.appendChild(h2);
const opciones = document.createElement("div");


const label1=crearLabel("0",pregunta.op0);
const label2=crearLabel("1",pregunta.op1);
const label3=crearLabel("2",pregunta.op2);


opciones.appendChild(label1);
opciones.appendChild(label2);
opciones.appendChild(label3);

contenedor.appendChild(opciones);
document.getElementById("juego").appendChild(contenedor);



}



function crearLabel(num,txtOpcion) 
{
    const label=document.createElement("label");

label.id= "1" +numPregunta + num;


const input=document.createElement("input");
input.setAttribute("type","radio");
input.name="p" + numPregunta;



input.setAttribute("onclick", "seleccionar("+numPregunta+","+num+")");


const span=document.createElement("span");
const correccion=document.createElement("span");
correccion.id="p" + numPregunta+num;


span.textContent=txtOpcion;
label.appendChild(input);
label.appendChild(span);
label.appendChild(correccion);

return label;



}



for(i=0; i < bd_juego.length;i++) 
{
    cargarPreguntas();

    numPregunta++;
}



function seleccionar(pos,opElegida) {
respuestas[pos]=opElegida;


}


let corregir =document.getElementById("corregir");
corregir.onclick=function() 

{

    for(i=0; i < bd_juego.length;i++) 

    {

        const pregunta=bd_juego[i];
        if(pregunta.correcta == respuestas[i])

        {
            cantiCorrectas++;
            let idCorreccion ="p"+ i + pregunta.correcta;

            document.getElementById(i).className="contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML="&check;";
            document.getElementById(idCorreccion).className="acierto";
        }
        


        else 


        {
            let id="p" + i + respuestas[i];
            let idCorreccion="p" + i + pregunta.correcta;

            document.getElementById(i).className="contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML="&#x2715;";
            document.getElementById(id).className="no-acierto";
            document.getElementById(idCorreccion).innerHTML="&check;";
            document.getElementById(idCorreccion).className="acierto";

        }
    }



    let inputs = document.getElementsByTagName("input");
    for(i=0; i<inputs.length;i++) 
    {

        inputs[i].disabled=true;
    }





    window.scrollTo(0,0);

    h2 =document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);

}

