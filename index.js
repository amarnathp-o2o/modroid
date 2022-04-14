const botgram = require("botgram")
const bot = botgram("5198773108:AAEyKygjIq2FiAiKUE8bk6IYvdNaCYoi5Lk")
 
bot.command("start", "help", (msg, reply) =>
  reply.text("To schedule an alert, do: /alert <seconds> <text>"));
 
bot.command("alert", (msg, reply, next) => {
  var [ seconds, text ] = msg.args(2)
  if (!seconds.match(/^\d+$/) || !text) return next()
 
  setTimeout(() => reply.text(text), Number(seconds) * 1000)
});
 
bot.command((msg, reply) =>
  reply.text("Sorry I Couldn't Understand You"));