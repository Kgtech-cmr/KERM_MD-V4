const { cmd } = require('../command'); // Assurez-vous que cmd est bien défini dans votre projet
const fetch = require('node-fetch'); // Vous devez installer 'node-fetch' pour effectuer les requêtes API (npm install node-fetch)

cmd({
    pattern: "calc", // Commande
    desc: "Perform a simple calculation",
    category: "utility", // Catégorie de la commande
    use: '.calc <expression>', // Exemple d'utilisation : .calc 1+1
    react: "🔢", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
    try {
        // Vérifier si une expression a été fournie
        if (!args.length) {
            return reply("❌ Please provide a calculation expression. Example: `.calc 1+1`");
        }

        // Récupérer l'expression du calcul
        const expression = args.join(' ');

        // URL de l'API de calcul
        const apiUrl = `https://kaiz-apis.gleeze.com/api/calculator?query=${encodeURIComponent(expression)}`;

        // Faire la requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification si la réponse contient un résultat
        if (data && data.result) {
            // Répondre avec le résultat du calcul
            await conn.sendMessage(from, { text: `🔢 **Result:** ${data.result}` }, { quoted: mek });
        } else {
            reply('❌ Unable to process the calculation. Please try again.');
        }
    } catch (e) {
        console.error(e);
        reply('❌ An error occurred while processing your request.');
    }
});