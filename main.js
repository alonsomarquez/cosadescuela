const form = document.querySelector(".form-create")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const post = document.querySelector("#post").value;
    const safe = document.querySelector(".post-content");
    safe.innerHTML += `<div class="post">
            <p>id: 00</p>
            <p>${post}</p>
            <button>editar</button>
            <button>eliminar</button>
            <p>meow meow</p>
        </div>`;
})