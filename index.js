
async function fetchData() {
  try {
    const response = await fetch("http://localhost:3004/posts", {
      
    });
    console.log("Respuesta de fetch:", response);
    

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

const addNewData = async () => {
  let newPost = {
    imageUrl: document.getElementById('post-url').value,
    img: document.getElementById('post-title').value,
    body: document.getElementById('post-description').value
  }
  try {
    const response = await fetch("http://localhost:3004/posts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost) 
    });

    if (!response.ok) {
      throw new Error("Error al agregar el post: " + response.status);
    }

    fetchData();
  }catch(error){
    console.error('No se pudo agregar el post '+ error);
    
  }
}

const publishPost = document.getElementById('publish-post');
publishPost.addEventListener("click", addNewData);
window.addEventListener('DOMContentLoaded', fetchData);






