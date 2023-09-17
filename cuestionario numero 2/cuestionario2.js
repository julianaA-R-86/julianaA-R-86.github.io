
const bd_juego=[
    {

id:0,
pregunta:"La extracción de caucho o goma elástica se inició en Bolivia en el año:",
op0:"2004 Beni- Pando y Cochabamba",
op1:"1953 Beni- Pando y norte de Potosí",
op2:"1870 Beni- Pando y Norte de La Paz",
op3:" ninguna de las anteriores",

correcta:"2"

},



{

    id:1,
    pregunta:"El auge de la goma se extendió hasta la segunda década del siglo:",
    op0:"XV",
    op1:"XX",
    op2:"XVI",
    op3:"ninguno de los anteriores",
    
    correcta:"1"
    
    },


    {

        id:2,
        pregunta:"fue otra zona de explotación de importancia regional fue la provincia:",
        op0:"b) Velasco(norte de cochabamba)",
        op1:"a) Velasco (norte de Santa Cruz)",
        op2:"c) Velasco (norte de pando).",

      
        
        correcta:"1"
        
        },

        {

            id:3,
            pregunta:"Fue el solado que habia sido centinela y vio una emboscada que venia y dio la vida por el Acre.",
            op0:"b) Nicolas Suarez",
            op1:"c) Dr Antonio Vaca Diez",
            op2:"a) Maximiliano Paredes Tejerina",
        
            
            correcta:"2"
            
            },


            {

                id:4,
                pregunta:"La columna Porvenir estuvo al mando del",
                op0:"B) Cnel Federico Roman.",
                op1:"A) Tn. Cnel Antonio Sevilla",
                op2:"C) Sgto Poma Chungara.",
                
                
                correcta:"0"
                
                },



                {

                    id:5,
                    pregunta:"Bruno Racua era de Ixiamas con  origen",
                    op0:"Tacana",
                    op1:"Esse Ejja",
                    op2:"ambas son ciertas",
                    
                    
                    correcta:"0"
                    
                    },

                    {

                        id:6,
                        pregunta:"La batalla de Puerto Rico se da en enero de 1903 al mando de",
                        op0:"B) Manuel Isidoro Belzu  ",
                        op1:"C) Adolfo Hittler",
                        op2:"A) José Manuel Pando       ",
                       
                        
                        correcta:"2"
                        
                        },


                        {

                            id:7,
                            pregunta:"el tratado de Petropolis fue firmado el 17 de noviembre de 1903 al mando de:",
                            op0:"b) Jose  Manuel Pando            ",
                            op1:"c) Claudio Pinilla.",
                            op2:"a) Fernando Guachalla",
                            op3:" ninguna de las anteriores",
                            
                            correcta:"2"
                            
                            },

                            {

                                id:8,
                                pregunta:"En el  tratado de Petropolis  Bolivia cedió una superficie de:",
                                op0:"A)191.000km",
                                op1:"c) 160.00km",
                                op2:"b) 2.00000km",
                              
                                
                                correcta:"0"
                                
                                },


                                {

                                    id:9,
                                    pregunta:"El conflicto de la guerra del Acre se inico en1898 con la creación de:",
                                    op0:"C) Puerto Rico",
                                    op1:"B) Puerto Bahia",
                                    op2:"A) Puerto Alonso",
                                 
                                    
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


