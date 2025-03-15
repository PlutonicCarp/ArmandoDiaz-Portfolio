function addRecomendation() {
    const name = document.getElementById("recommender-name").value;
    const message = document.getElementById("recommender-message").value;
    
    // Validar que los campos no estén vacíos
    if (name.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    const container = document.getElementById("recomendations-list");
    
    // Crear la nueva recomendación
    const newRecomendation = document.createElement("div");
    newRecomendation.classList.add("recomendation-card");

    newRecomendation.innerHTML = `
        <ul>
            <h3>${name}</h3>
            <img src="./img/default-profile.png" alt="Profile Picture">
            <p>${message}</p>
        </ul>
    `;

    // Agregar la nueva recomendación al contenedor
    container.appendChild(newRecomendation);

    // Limpiar los campos del formulario
    document.getElementById("recommender-name").value = "";
    document.getElementById("recommender-message").value = "";

    // Mostrar una alerta de éxito
    alert("Recommendation added successfully!");
}