const { cmd } = require('../command'); // Ensure cmd is defined in your project
const fetch = require('node-fetch'); // Ensure you have 'node-fetch' installed for HTTP requests

cmd({
    pattern: "tiny", // Command name
    desc: "Shorten a URL",
    category: "utility",
    use: '.tiny <URL>', // Usage of the command
    react: "🔗", // Reaction for the command
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
    try {
        // Check if a URL is provided in the command
        if (!args[0]) {
            return reply("❌ Please provide a URL to shorten.");
        }

        const url = args[0]; // The URL to be shortened

        // API URL for TinyURL
        const apiUrl = `https://kaiz-apis.gleeze.com/api/tinyurl?upload=${url}`;

        // Make a request to the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response contains a shortened URL
        if (data && data.shorturl) {
            // Send the shortened URL back to the user
            await conn.sendMessage(from, {
                text: `Here is your shortened URL: ${data.shorturl}`
            }, { quoted: mek });
        } else {
            // If no URL is returned, show an error message
            reply('❌ Something went wrong while shortening the URL. Please try again.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ An error occurred while processing your request.');
    }
});