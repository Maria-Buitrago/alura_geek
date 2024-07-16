import { conexionApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]"); 

function crearCard(id,titulo, tecnica, imagen){
    
    const card = document.createElement("div");
    card.className="marco-fluor";

     card.innerHTML=`<img src="${imagen}" alt="Imagen cuadro" class="imagen-cuadro">
        <p class="titulo-cuadro">"${titulo}"</p>
        <p class="tecnica">"${tecnica}"</p>
        <button class="eliminar" data-id="${id}">
            <div class="icono-papelera">
                <img src="img/icons8-papelera-emoji-48.png" alt="Eliminar">
            </div>
        </button>`;
    
    
    const botonEliminar =card.querySelector(".eliminar");
    botonEliminar.addEventListener("click", () => {
        conexionApi.borrarCuadro(id)
        .then(() => {
            card.remove();
        })
        .catch(err => console.log(err));
    });

    lista.appendChild(card);
    return card;
}

const cuadro = async () => {
    try{
        const listaApi= await conexionApi.listarCuadros()

        listaApi.forEach(card => {
            lista.appendChild(
                crearCard(
                    card.id,
                    card.titulo,
                    card.tecnica,
                    card.imagen)
                );
    });

    } catch(error) {
        console.log(error)
    };

};

cuadro()
