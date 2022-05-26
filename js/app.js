var jsonUrl = 'https://raw.githubusercontent.com/JeremiHeredia1/Curriculum-Viate-TI51/master/Info.json';
function getData()
{
    fetch(jsonUrl)
    .then(response =>response.json())
    .then (data=>dataVar(data));  
    
}

curriculumTemplate = `

<div class="cuadro-blanco" id="datos">
<div class="grid">
    <div class="columna-derecha">

        <div class="cuadro-verde">
            <h2 class="titulos">Contacto</h2>
            <p><span class="bold-span">Nombre:  {nombre}</span></p>
            <p><span class="bold-span">Edad: 19</span></p>
            <p><span class="bold-span">Fecha de nacimiento: {fecha} </span></p>
            <p><span class="bold-span">Número de telf: {felef}</span></p>
            <p><span class="bold-span">Correo: {correo}</span></p>
        </div>
        <div class="cuadro-verde">
            <h2 class="titulos">Quien soy</h2>
            <p>{quienSoy}</p>
        </div>
        <div class="cuadro-verde">
            <h2 class="titulos">Escolaridad</h2>
            <p><span class="bold-span">Escuela: {escuela} </span></p>
            <p><span class="bold-span">Grado de estudio: {grado}</span></p>
            <p><span class="bold-span">Fecha de ingreso: {ingreso}</span></p>
            <p><span class="bold-span">Fecha de conclusión: {conclu}</span></p>
        </div>

        <div class="cuadro-verde">
            <h2 class="titulos">Paqueteria office</h2>
            <p>
                <ul>
                    <li>{office1}</li>
                    <li>{office2}</li>
                    <li>{office3}</li>
                </ul>
            </p>
        </div>

    </div>  
    <div class="columna-izquierda">
        <div class="cuadro-verde">
            <h2 class="titulos">Experiencia labora</h2>
            <p><span class="bold-span">Empresa: {empresa}</span></p>
            <p><span class="bold-span">Puesto: {puesto}</span></p>
            <p><span class="bold-span">Fecha de ingreso: {ingreso2}</span></p>
            <p><span class="bold-span">Fecha de termino: {termino}</span></p>
            <p><span class="bold-span">Responsabilidades: {responsabilidades}</span></p>
        </div>
        
        <div class="cuadro-verde">
            <h2 class="titulos">Lenguajes de programación</h2>
            <p>
                <ul>
                    <li>{lenguaje1}</li>
                    <li>{lenguaje2}</li>
                    <li>{lenguaje3}</li>
                    <li>{lenguaje4}</li>
                </ul>
            </p>
        </div>

        <div class="cuadro-verde">
            <h2 class="titulos">Base de datos que domina</h2>
            <p>
                <li>{database1}</li>
                <li>{database2}</li>
                <li>{database3}</li>
            </p>
        </div>
    </div>
</div>
</div>

`;

function dataVar(data)
{
    var Nombre = data.nombre;
    var Fecha = data.fechaNacimiento;
    var numero = data.telefono;
    var correo = data.correo;
    var sobreMi = data.Resumen;
    var escuela = data.educacion[0].escuela;
    var gradoEs = data.educacion[0].gradoEstudio;
    var ingreso = data.educacion[0].fechaIngreso; 
    var conclu = data.educacion[0].fechaTermino;
    var office1 = data.paqueteria[0];
    var office2 = data.paqueteria[1];
    var office3 = data.paqueteria[2];
    var empresa = data.experienciaLaboral[0].empresa;
    var puesto = data.experienciaLaboral[0].Puesto;
    var ingreso2 = data.experienciaLaboral[0].fechaIngreso;
    var termino = data.experienciaLaboral[0].fechaTermino;
    var responsabilidades = data.experienciaLaboral[0].responsabilidades;
    var lenguaje1 = data.lenguages[0];
    var lenguaje2 = data.lenguages[1];
    var lenguaje3 = data.lenguages[2];
    var lenguaje4 = data.lenguages[3];
    var database1 = data.baseDeDatos[0];
    var database2 = data.baseDeDatos[1];
    var database3 = data.baseDeDatos[2];
    
    var hola =curriculumTemplate;
    //-----------------------------------
    var hola = hola.replace("{nombre}", Nombre);
    var hola =hola.replace("{fecha}", Fecha);
    var hola = hola.replace("{felef}", numero);
    var hola = hola.replace("{correo}", correo);
    var hola = hola.replace("{quienSoy}",sobreMi );
    var hola = hola.replace("{escuela}", escuela);
    var hola = hola.replace("{grado}", gradoEs);
    var hola = hola.replace("{ingreso}", ingreso);
    var hola = hola.replace("{conclu}", conclu);
    var hola = hola.replace("{office1}", office1);
    var hola = hola.replace("{office2}", office2);
    var hola = hola.replace("{office3}", office3);
    var hola = hola.replace("{empresa}", empresa);
    var hola = hola.replace("{puesto}", puesto);
    var hola = hola.replace("{ingreso2}", ingreso2);
    var hola = hola.replace("{termino}", termino);
    var hola = hola.replace("{responsabilidades}", responsabilidades);
    var hola = hola.replace("{lenguaje1}", lenguaje1);
    var hola = hola.replace("{lenguaje2}", lenguaje2);
    var hola = hola.replace("{lenguaje3}", lenguaje3);
    var hola = hola.replace("{lenguaje4}", lenguaje4);
    var hola = hola.replace("{database1}", database1);
    var hola = hola.replace("{database2}", database2);
    var hola = hola.replace("{database3}", database3);
    document.getElementById('datos').innerHTML += hola;
}


getData();