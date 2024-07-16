async function listarCuadros(){
    //const conexion= await fetch("http://localhost:3001/cuadros");
    const conexion= await fetch("https://alura-geek-api-delta.vercel.app/cuadros");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

//Aquí debemos indicar el método y qué tipo de archivo se estará enviando
async function enviarCuadro(titulo, tecnica, imagen){
    return await fetch("https://alura-geek-api-delta.vercel.app/cuadros",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            tecnica:tecnica,
            imagen:imagen
        })
    })
};

const borrarCuadro = async (id) => {
    try{
        const res= await fetch(`https://alura-geek-api-delta.vercel.app/cuadros/${id}`,{
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
}

export const conexionApi={
    listarCuadros,
    enviarCuadro,
    borrarCuadro
}
