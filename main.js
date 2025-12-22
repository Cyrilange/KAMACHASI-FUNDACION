window.addEventListener("DOMContentLoaded", async () => {
    await loadPosts();
    observePosts();
});

// ==========================
// POSTS
// ==========================
async function loadPosts() {
    const posts = await API.getPosts();
    const container = document.getElementById("postsContainer");
    container.innerHTML = "";

    if (!posts || posts.length === 0) {
        container.innerHTML = "<p class='no-posts'>No hay noticias por el momento.</p>";
        return;
    }

    posts.forEach(post => {
        container.appendChild(createPost(post));
    });

    observePosts();
}

function createPost(post) {
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
        ${post.image ? `<img src="${post.image}" class="post-image" alt="${post.title}">` : ""}
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-description">${post.description}</p>
            <p class="post-date">${formatDate(post.date)}</p>
        </div>
    `;

    return div;
}

function formatDate(dateString) {
    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date(dateString));
}

function observePosts() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".post").forEach(post => observer.observe(post));
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ==========================
// MODALES LEGAL / PRIVACY
// ==========================
function openLegalModal(e) {
    e.preventDefault();
    document.getElementById('legalModal').classList.add('active');
}

function closeLegalModal() {
    document.getElementById('legalModal').classList.remove('active');
}

function openPrivacyModal(e) {
    e.preventDefault();
    document.getElementById('privacyModal').classList.add('active');
}

function closePrivacyModal() {
    document.getElementById('privacyModal').classList.remove('active');
}

// Fermer modal si on clique en dehors
window.onclick = function(event) {
    const legalModal = document.getElementById('legalModal');
    const privacyModal = document.getElementById('privacyModal');
    if (event.target == legalModal) {
        closeLegalModal();
    }
    if (event.target == privacyModal) {
        closePrivacyModal();
    }
};


