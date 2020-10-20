/**
 * Configuration File
 * --------------------------------
 *
 * KitsuneVPN, 2020
 * Made with love by VottusCode and contributors
 *
 */

/**
 * MongoDB Connection URL
 * --------------------------------
 *
 * This is the MongoDB connection url used for the bot to connect to the database.
 * Example URL might look like this:
 *  - mongodb://user:password@domain.tld:27017/database
 *  - mongodb+srv://user:password@atlascluster.mongodb.net/database
 *
 */
export const mongoDbUri = "mongodb://user:password@localhost:27017";

/**
 * Port to run the HTTP Server
 * --------------------------------
 *
 * This is the port for Express.
 * This port must be a number. You may use ternary to setup a different port based on the environment
 *
 * Example:
 *  - 5000
 *  - 4400
 *
 * Example of different port in production
 *
 * The port used for development here is 5000,
 * in production the environment variable PORT is used.
 *
 * export const expressPort =
 *   process.env.NODE_ENV === "development"
 *     ? 5000
 *     : process.env.PORT;
 *
 */
export const expressPort = 5000;

/**
 * Discord Bot Token
 * --------------------------------
 *
 * This is the token used to authenticate the Discord Bot.
 * You can acquire the bot token in Discord Developer Panel,
 * accessible at https://discord.com/developers
 *
 */
export const botToken = "";

/**
 * Discord Bot Prefix
 * --------------------------------
 *
 * This is the prefix used for the bot.
 * It can contain a space, if you for example
 * want a space between the prefix and the command.
 *
 * Example:
 *  - "k!"
 *  - "k! "
 *
 */
export const botPrefix = "k!";

/**
 * Discord Server Invite
 * --------------------------------
 *
 * This link is an invite to your Discord Server.
 * It doesn't matter what kind of link it is.
 *
 * Example:
 *  - "https://discord.gg/code"
 *  - "https://discord.com/invite/code"
 *  - "https://redirect.toyourdiscord.invite"
 *
 */
export const discordInvite = "";

/**
 * Trust Proxies
 * --------------------------------
 *
 * If you use Nginx or other reverse proxy
 * to proxy the Express server, you want to allow this.
 *
 * This settings sets whether Kitsune should trust the X-Forwarded-For
 * header, which needs to be enabled in the Nginx configuration as well.
 *
 * Do NOT allow this if your server doesn't pass the X-Forwarded-For.
 *
 * Please refer to https://expressjs.com/en/guide/behind-proxies.html
 *
 */
export const trustProxies = false; // trust X-Forwarded-For
