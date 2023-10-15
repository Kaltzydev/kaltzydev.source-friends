  const express = require("express"),
  app = express(),
  ejs = require('ejs'),
  client = new (require("discord.js")).Client()

client.on("ready", async () => {
  console.log('[BOT] Iniciado')
  await client.user.setStatus("idle");
});

app.set("view engine", "ejs");
app.use(express.static("public"))


app.use(function(req, res, next) {
  res.removeHeader("x-powered-by")
  next();
});

app.post("*", async (req, res) => {
  return res.send('nao')
});


app.get("/", async (req, res, next) => {
  const user = await client.users.fetch
  ("692833912778522724")
  const user2 = await client.users.fetch
  ("692833912778522724")
  const user3 = await client.users.fetch
  ("692833912778522724")
  const user4 = await client.users.fetch
  ("692833912778522724")
  const user5 = await client.users.fetch
  ("692833912778522724")
  const user6 = await client.users.fetch
  ("692833912778522724")
  const user7 = await client.users.fetch
  ("692833912778522724")
  const user8 = await client.users.fetch
  ("692833912778522724")
  
  const server = await client.guilds.fetch("1127945487765483651")

  return res.render("index", { user, user2, user3, user4, user5, user6, user7, user8, server,
  });
});


app.use(function(req, res) {
  res.status(404).redirect('');
});

client.login(process.env.TOKEN);

app.listen(process.env.PORT, () => {
  console.log('[EXPRESS] Iniciado')
});

setTimeout(() => process.exit(), 600000)