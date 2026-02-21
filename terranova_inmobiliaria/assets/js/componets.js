const cargarComponente = async (selector, url) => {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
    } catch (error) {
        console.error(`Error al cargar el componente ${url}`, error);
    }   
}

document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("#header", "../components/header.html");
    cargarComponente("#footer", "../components/footer.html");
});