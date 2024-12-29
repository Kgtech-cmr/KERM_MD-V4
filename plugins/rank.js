const { cmd } = require('../command');

// Simulated in-memory storage for user levels
const userLevels = {};

// Function to calculate level based on XP
const calculateLevel = (xp) => Math.floor(0.1 * Math.sqrt(xp));

cmd({
    pattern: "rank",  // Adjusted to rank
    desc: "Check the level of a user.",
    react: "📊",
    category: "utility",
    use: ".rank [@mention or reply]",
    filename: __filename,
}, async (conn, mek, m, { reply, isGroup, mentionedJid }) => {
    try {
        let target;

        // Determine the target user
        // Case 1: If there's a mention, use the mentioned user.
        if (mentionedJid?.length > 0) {
            target = mentionedJid[0]; // First mentioned user
        } 
        // Case 2: If the user is replying to a message, use the sender of the quoted message.
        else if (m.quoted && m.quoted.sender) {
            target = m.quoted.sender; // User who sent the quoted message
        } 
        // Case 3: If neither mention nor reply, use the sender of the command.
        else {
            target = m.sender; // Default to the sender if no mention or reply
        }

        if (!target) {
            return reply("❌ Please mention a user or reply to their message to check their rank.");
        }

        // Initialize user data if not present
        if (!userLevels[target]) {
            userLevels[target] = { experience: 0, messages: 0 };
        }

        // Simulate experience gain
        const userData = userLevels[target];
        userData.messages += 1;
        userData.experience += Math.floor(Math.random() * 10) + 5;

        const level = calculateLevel(userData.experience);
        const nextLevelXP = Math.pow((level + 1) / 0.1, 2);
        const currentLevelXP = Math.pow(level / 0.1, 2);
        const progressPercent = Math.floor(((userData.experience - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100);
        const progressBar = "⭐".repeat(progressPercent / 10) + "⚪".repeat(10 - progressPercent / 10);

        // URL of the image for the rank
        const levelImageURL = "https://files.catbox.moe/rrgoyh.jpeg"; // Replace with your desired image URL
        
        // Send rank information in text and image
        const caption = `📊 *Rank Information*\n\n👤 *User*: @${
            target.split("@")[0]
        }\n🔝 *Level*: ${level}\n🔄 *Progression*: ${progressPercent}%\n${progressBar}\n📩 *Messages Sent*: ${
            userData.messages
        }\n✨ *XP*: ${userData.experience}\n\n> 🧞‍♂️POWERED BY KERM🧞‍♂️`;

        // Send the image and caption together
        await conn.sendMessage(
            m.chat,
            { image: { url: levelImageURL }, caption, mentions: [target] },
            { quoted: mek }
        );

    } catch (error) {
        console.error("Error in rank command:", error);
        reply("❌ An error occurred while fetching the rank. Please try again.");
    }
});
cmd({
    pattern: "rang", // Nom de la commande
    desc: "Get rank image for the user", // Description de la commande
    category: "fun", // Catégorie de la commande
    use: '.rang', // Exemple d'utilisation : .rank
    react: "💎", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
    try {
        // Récupérer le nom de l'utilisateur (par exemple, à partir du message ou du profil)
        const username = sender.pushname || 'User'; // Si le nom est disponible, l'utiliser, sinon 'User'

        // Préparer les données pour l'API
        const level = 102; // Niveau de l'utilisateur (vous pouvez ajuster cela selon votre logique)
        const rank = 563; // Rang de l'utilisateur (vous pouvez ajuster cela selon votre logique)
        const xp = 71032; // XP actuel de l'utilisateur (ajustez selon votre logique)
        const requiredXP = 95195; // XP nécessaire pour atteindre le prochain niveau (ajustez selon votre logique)
        const status = 'online'; // Statut de l'utilisateur (ajustez selon votre logique)
        const avatarUrl = 'https://i.imgur.com/P36dq5j.jpeg'; // URL de l'avatar de l'utilisateur

        // URL de l'API avec les paramètres requis
        const apiUrl = `https://kaiz-apis.gleeze.com/api/rank?level=${level}&rank=${rank}&xp=${xp}&requiredXP=${requiredXP}&nickname=${encodeURIComponent(username)}&status=${encodeURIComponent(status)}&avatar=${encodeURIComponent(avatarUrl)}`;

        // Faire la requête à l'API pour récupérer l'image de rang
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification de la réponse de l'API
        if (data && data.url) {
            const imageUrl = data.url; // URL de l'image de rang

            // Envoyer l'image avec un caption
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: `Here is your rang image, ${username}!\n> 🍒KERM_MD-V4🍒`
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch rang image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        reply('❌ An error occurred while processing your request.');
    }
});