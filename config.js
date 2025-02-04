const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8lYl61d5GRAEjOmJARBEQ8dboxjwUUGBxlypQ7PDfN9Du6H7Yme19q6hLnqzMk+cNZDkmSEcNGL2BosQ1pKhd0qZAYATkKghQCbrAhxSCEbAUaGymNqTMgpxsOq6NbNeRjAmMz5EYXMpktjUN87maOd4LuHVBUbkJ9v4AqE232qKfXlWul28G9kYZWGnKz9Rrog/T2JF7G0bdloNwcbFfwK1FhLjEWTgpjihFJUx01CwhLr9HPzcZ/uKJunK05sQau8o5EJKZss/xUh+cXxNtIm1WjJjIr8z36J8sZ2AvAlV1JCsS9lUQ2ca818ml+nDOXi168ZplfdCuTEYe9AkOM+RrPsoops23dc+1XJ7yQVLtFiKNsrFmXHf58fVyoRM2ZKE88fpKljH9S2p+j/hSIE46W0K+WnBVGL2O94so2SvqIVk5ph6rmWhx62aniNftV+LL8qNX4v+je2N5nhxasN7bDapCYdsxdDRkOzxWTBVzBRUnRO64z07KfY/++OoXapQaMVzFrnSQBbqK/GyBlkE4jzMv2e4Gdj2FltvLP+lDWpV/Ylnax56V1hu3kAM9V52T4JTxzFSUnb309WwlajthsjSqg5OflX0qpOPAQTjmhL372t/mezI1p8ZJeiapJiu9K7us4UoKX+4/ilGj+WDUu3VBiUJMaAkpzrP73rDfBdCv18grEb3LC6JLtSnyPTasonSyWg1cAVVXeZAhsZlH0Yl68+SZnbBkuH8BXVCUuYcIQf4ME5qXjYkIgSEiYPT3ry7I0IU+jGvL9XtdEOCS0G1WFUkO/Q9XPw6h5+VVRtdN5o3bBSrBiPncRpTiLCStjlUGS++IazQ+QkrAKIAJQbcu8FGNPdTigcNxzfJPw8TWT+wl2Gj8YLPlpJbyMc8eVzzk+gMIB0+QFbknDvbcJzdghCd24PcFwQ0ED4qgC/B7Zto3v7UQTlY+TcfhxVjanm450mCg1BfDoZJ9t+GhPSqRD0a0rFAXuNCLq2KTxyj7A+6kb1Yqjc5kztOFjcnBuK58Lojjk/kF9+EpGL19zqlx7rd40mrF8sZaBl2Q3lsQtz9nBxzP9QYiy3HiqDf8Sf46t0LCovgrQxR0QQbb2+AnJhB6P/QjzH6kKKN52dZ8N6RF8xGFOCFtMJYWzV1NmejLFXaZ6VSyQ2kctop/GPiRhEen+WGwXmt9nfHXqnxN+aLq7GNdc5VFfli/ig1fzzrqQmv6jfTyLyBgBGzMxjE01N609PYwGlpWuhESpsMcV7KjTtjzfmkuj4YQmYuirmhw6Bd2ItUOT5CNy2Y3HpdGPnPWaaw6REgOwuxYKNJLW+3RSF+L7cwet3rOT53Q4KKLts2VeJ5Rw6jpqvbyVcWvNepOKfGPckR2dbHWRDY9ba36yrG9eSWbq/xZ3+xL0ZbcDtL3/TNjjqVHRu8zInmfzfienrf3tgswuo+6d0P+07jPBDC37heM9+H5my6Tnf2MifGiobPt0fYG1dCt0/kYT89XON0mtVfxl+fjZm1SIQS3268uKBJIg7xMwQiQ1IWgCxJIqPSZ4A1OEaEwLcCox/eFoTgUhN7tHzu5whP3BwAA",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
