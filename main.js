const form = document.querySelector(".form-create")
let cont = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const post = document.querySelector("#post").value;
    const safe = document.querySelector(".post-content");
    safe.innerHTML += `<div class="post">
            <p>id: ${cont}</p>
            <p>${post}</p>
            <button>editar</button>
            <button>eliminar</button>
        </div>`;
        cont++;
});