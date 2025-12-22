// ==========================
// FAKE API (LOCAL)
// ==========================

const API = (() => {

    const posts = [
        {
            id: 1,
            title: "nuestra logo",
            description: "Estamos emocionados de anunciar nuestro sitio web.",
            image: "./assets/logo.png",
            date: "2025-12-21T00:00:00Z"
        },
        {
            id: 2,
            title: "Programa de Educación 2025",
            description: "Lanzamos nuestro programa educativo anual con talleres gratuitos para jóvenes y adultos.",
            image: "./assets/ballon.png",
            date: "2024-12-10T14:30:00Z"
        },
        {
            id: 3,
            title: "actividad para jovenes",
            description: "Únete a nuestra campaña para llevar alegría y esperanza.",
            image: "./assets/image.png",
            date: "2024-12-05T09:00:00Z"
        }
    ];

    const getPosts = async () => {
        // imitation  API
        return new Promise(resolve => {
            setTimeout(() => resolve(posts), 200);
        });
    };

    return { getPosts };
})();
