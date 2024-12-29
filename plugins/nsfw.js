const { cmd } = require('../command'); // Assurez-vous que cmd est bien défini dans votre projet
const axios = require('axios');

cmd({
    pattern: "nsfw", // Nom de la commande
    desc: "Display a list of NSFW options",
    category: "fun",
    use: '.nsfw',
    react: "🔥", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Liste des options NSFW
        const nsfwList = `
*[{• KERM MD V4 NSFW🤤🔞•}]*

1️⃣ *EJACULATION*
2️⃣ *PENIS*
3️⃣ *EREC*
4️⃣ *NUDE*
5️⃣ *SEX*
6️⃣ *CUTE*
7️⃣ *ORGASM*
8️⃣ *ANAL*
9️⃣ *SUSPENSION*
1️⃣0️⃣ *KISS*
1️⃣1️⃣ *FUCK*
1️⃣2️⃣ *WAIFU*
1️⃣3️⃣ *NEKO*

*_Simply type the number corresponding to the option you'd like to choose._*`;

        // URL de l'image à envoyer
        const imageUrl = 'https://i.ibb.co/j8hv83f/Manul-Ofc-X.jpg';

        // Envoi de la liste avec l'image et la légende
        await conn.sendMessage(from, {
            text: nsfwList,
            caption: 'Choose one from the list above!',
            image: { url: imageUrl }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "ejaculation", // Nom de la commande
    desc: "Fetch a NSFW image related to the command",
    category: "fun",
    use: '.ejaculation',
    react: "🔥",
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API
        const apiURL = `https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=ejaculation`;
        
        // Récupérer l'image via l'API
        const response = await axios.get(apiURL);

        if (response.data && response.data.image_url) {
            const imageUrl = response.data.image_url;

            // Envoi de l'image avec le caption
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: `Here your ${command} image 🔞🍆🍑.\n> KERM🍑🔞.`,
            }, { quoted: mek });
        } else {
            await reply('❌ No image found for this category.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while fetching the image.');
    }
});
cmd({
    pattern: "penis", // Nom de la commande
    desc: "Fetch a NSFW image related to the command",
    category: "fun",
    use: '.penis',
    react: "🍑",
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API
        const apiURL = `https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=penis_under_skirt`;
        
        // Récupérer l'image via l'API
        const response = await axios.get(apiURL);

        if (response.data && response.data.image_url) {
            const imageUrl = response.data.image_url;

            // Envoi de l'image avec le caption
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: `Here your ${command} image 🔞🍆🍑.\n> KERM🍑🔞.`,
            }, { quoted: mek });
        } else {
            await reply('❌ No image found for this category.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while fetching the image.');
    }
});
cmd({
    pattern: "erec", // Nom de la commande
    desc: "Fetch a NSFW image related to the command",
    category: "fun",
    use: '.erec',
    react: "🍑",
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API
        const apiURL = `https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=erect_nipple`;
        
        // Récupérer l'image via l'API
        const response = await axios.get(apiURL);

        if (response.data && response.data.image_url) {
            const imageUrl = response.data.image_url;

            // Envoi de l'image avec le caption
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: `Here your ${command} image 🔞🍆🍑.\n> KERM🍑🔞.`,
            }, { quoted: mek });
        } else {
            await reply('❌ No image found for this category.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while fetching the image.');
    }
});
cmd({
    pattern: "nude", // Nom de la commande
    desc: "Display a nude NSFW image",
    category: "fun",
    use: '.nude',
    react: "🔥", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "nude"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=nude';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your nude NSFW image 🔞🔥.\n> KERM🔥🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "sex", // Nom de la commande
    desc: "Display a NSFW sex image",
    category: "fun",
    use: '.sex',
    react: "🔥", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "sex"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=sex';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your sex NSFW image 🔞🔥.\n> KERM🔥🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "cute", // Nom de la commande
    desc: "Display a NSFW cute image",
    category: "fun",
    use: '.cute',
    react: "🌸", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "cute"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=cute';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your cute NSFW image 🔞💖.\n> KERM💖🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "orgasm", // Nom de la commande
    desc: "Display a NSFW orgasm image",
    category: "fun",
    use: '.orgasm',
    react: "💥", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "orgasm"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=orgasm';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your orgasm NSFW image 🔞💥.\n> KERM💥🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "anal", // Nom de la commande
    desc: "Display a NSFW anal image",
    category: "fun",
    use: '.anal',
    react: "🔥", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "anal_sex"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=anal_sex';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your anal NSFW image 🔞🔥.\n> KERM🔥🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "suspension", // Nom de la commande
    desc: "Display a NSFW suspension image",
    category: "fun",
    use: '.suspension',
    react: "🔥", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "suspension"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=suspension';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your suspension NSFW image 🔞🔥.\n> KERM🔥🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "kiss", // Nom de la commande
    desc: "Display a NSFW kissing image",
    category: "fun",
    use: '.kiss',
    react: "💋", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // URL de l'API pour obtenir l'image de la catégorie "kissing_while_penetrated"
        const apiUrl = 'https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=kissing_while_penetrated';

        // Faire une requête à l'API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification des données reçues
        if (data && data.image) {
            const imageUrl = data.image; // URL de l'image reçue depuis l'API

            // Envoi de l'image dans le chat
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your kiss NSFW image 🔞💋.\n> KERM💋🔞.'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        await reply('❌ An error occurred while processing your request.');
    }
});
cmd({
    pattern: "fuck", // Nom de la commande
    desc: "Send a random NSFW waifu image", // Description de la commande
    category: "fun", // Catégorie de la commande
    use: '.fuck', // Exemple d'utilisation : .fuck
    react: "🍑", // Réaction ajoutée
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
    try {
        // URL de l'API pour obtenir une image NSFW de waifu
        const apiUrl = 'https://kaiz-apis.gleeze.com/api/waifu-nsfw';

        // Faire la requête à l'API pour récupérer l'image NSFW de waifu
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Vérification de la réponse de l'API
        if (data && data.url) {
            const imageUrl = data.url; // Récupérer l'URL de l'image NSFW de waifu

            // Envoyer l'image avec le caption
            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: 'Here is your NSFW waifu image\n> 🍒KERM_MD-V4🍒'
            }, { quoted: mek });
        } else {
            reply('❌ Unable to fetch NSFW waifu image. Please try again later.');
        }
    } catch (e) {
        console.error(e);
        reply('❌ An error occurred while processing your request.');
    }
});