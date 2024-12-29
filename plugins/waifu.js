const { cmd } = require('../command'); // Assurez-vous que cmd est bien défini dans votre projet
const fetch = require('node-fetch'); // Assurez-vous que node-fetch est installé dans votre projet

cmd({
    pattern: "waifu", // Nom de la commande
    desc: "Send a random Waifu image", // Description de la commande
    category: "fun", // Catégorie de la commande
    use: '.waifu', // Exemple d'utilisation : .waifu
    react: "💖", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
    try {
        // URL de l'API pour obtenir une image de waifu
        const apiUrl = 'https://kaiz-apis.gleeze.com/api/waifu';

        // Faire la requête à l'API pour récupérer l'image de waifu
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification de la réponse de l'API
        if (data && data.url) {
            const imageUrl = data.url; // Récupérer l'URL de l'image de waifu

            // Envoyer l'image avec le caption
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your waifu image\n> 🍒KERM_MD-V4🍒'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch waifu image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        reply('❌ An error occurred while processing your request.');
    }
});