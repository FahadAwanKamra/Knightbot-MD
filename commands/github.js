async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 KnightBot MD*

*📂 GitHub Repository:*
https://github.com/mruniquehacker/Knightbot-MD

*📢 Official Channel:*
https://youtube.com/@FAHADTIPS&TRICKS

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029Vb0bHpc0G0XmMnX7H91n@newsletter.whatsapp.com',
                    newsletterName: '𝙇𝙀𝙊 𝙏𝙀𝘾𝙃',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
