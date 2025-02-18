window.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3004/posts");

    if (!response.ok) {
      throw new Error("Error en la red: " + response.status);
    }

    const data = await response.json();
    console.log("Datos recibidos:", data);

    renderPosts(data); 
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}


const renderPosts = (arrayData) => {

    const sectionPosts = document.getElementById('section-posts');
    arrayData.forEach(post => {
        const postCards = document.createElement('div');
        postCards.innerHTML = /*html*/`
        <img src="${post.imageUrl}" alt="${post.img}">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
            
        `
        sectionPosts.appendChild(postCards);
    });
}




