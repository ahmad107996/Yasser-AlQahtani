  const Discord = require('discord.js');

  const Util = require('discord.js');

  const RichEmbed = require("discord.js");

  const getYoutubeID = require('get-youtube-id');

  const fetchVideoInfo = require('youtube-info');

  const YouTube = require('simple-youtube-api');

  const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

  const queue = new Map();

  const ytdl = require('ytdl-core');

  const fs = require('fs');

  const gif = require("gif-search");

  const client = new Discord.Client({disableEveryone: true});

  const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));

  const prefix = "m!";

  const devs = ["348953140315291649"];
/////////giftR/////////
giftKeys = {};
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}giftR`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  } 
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - منشن الرتبة \`${prefix}giftR <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000)); 
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}used`){
  
  if(!args) {   
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
};
});
////////giftR-end///////
  /////////////////////////
  ////////////////////////

  client.on('message', async msg =>{
    if (msg.author.bot) return undefined;
      if (!msg.content.startsWith(prefix)) return undefined;
      
      let args = msg.content.split(' ');

    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)

      if(command === `ping`) {
      let embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setTitle("Pong!!")
      .setDescription(`${client.ping} ms,`)
      .setFooter(`Requested by | ${msg.author.tag}`);
      msg.delete().catch(O_o=>{})
      msg.channel.send(embed);
      }
  });
  /////////////////////////
  ////////////////////////
  //////////////////////

  client.on('message', async msg =>{
    if (msg.author.bot) return undefined;
      if (!msg.content.startsWith(prefix)) return undefined;
      
      let args = msg.content.split(' ');

    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)

      if(command === `avatar`){
    if(msg.channel.type === 'dm') return msg.channel.send("Nope Nope!! u can't use avatar command in DMs (:")
          let mentions = msg.mentions.members.first()
          if(!mentions) {
            let sicon = msg.author.avatarURL
            let embed = new Discord.RichEmbed()
            .setImage(msg.author.avatarURL)
            .setColor("#5074b3")
            msg.channel.send({embed})
          } else {
            let sicon = mentions.user.avatarURL
            let embed = new Discord.RichEmbed()
            .setColor("#5074b3")
            .setImage(sicon)
            msg.channel.send({embed})
          }
      };
  });
  /////////////////////////
  ////////////////////////
  //////////////////////
  /////////////////////////
  ////////////////////////
  //////////////////////

  /////////////////////////
  ////////////////////////
  //////////////////////
  /////////////////////////
  ////////////////////////
  //////////////////////
  client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });

  client.on('message', async msg => { 
    if (msg.author.bot) return undefined;
      if (!msg.content.startsWith(prefix)) return undefined;
      
      const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
      
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)

    if (command === `play`) {
      const voiceChannel = msg.member.voiceChannel;
          
          if (!voiceChannel) return msg.channel.send("انت لم تدخل روم صوتي");
          
          const permissions = voiceChannel.permissionsFor(msg.client.user);
          
          if (!permissions.has('CONNECT')) {

        return msg.channel.send("ليست لدي صلاحيات للدخول الى الروم");
          }
          
      if (!permissions.has('SPEAK')) {

        return msg.channel.send("انا لا يمكنني التكلم في هاذه الروم");
      }

      if (!permissions.has('EMBED_LINKS')) {

        return msg.channel.sendMessage("انا لا املك صلاحيات ارسال روابط")
      }

      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

        const playlist = await youtube.getPlaylist(url);
              const videos = await playlist.getVideos();
              

        for (const video of Object.values(videos)) {
                  
                  const video2 = await youtube.getVideoByID(video.id); 
                  await handleVideo(video2, msg, voiceChannel, true); 
              }
        return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
      } else {

        try {

                  var video = await youtube.getVideo(url);
                  
        } catch (error) {
          try {

            var videos = await youtube.searchVideos(searchString, 5);
            let index = 0;
                      const embed1 = new Discord.RichEmbed()
                      .setTitle(":mag_right:  YouTube Search Results :")
                      .setDescription(`
                      ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                      
            .setColor("#f7abab")
            msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
            
  /////////////////					
            try {

              var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                maxMatches: 1,
                time: 15000,
                errors: ['time']
              });
            } catch (err) {
              console.error(err);
              return msg.channel.send('لم يتم اختيار الاغنية');
                      }
                      
            const videoIndex = parseInt(response.first().content);
                      var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                      
          } catch (err) {

            console.error(err);
            return msg.channel.send("I didn't find any results!");
          }
        }

              return handleVideo(video, msg, voiceChannel);
              
          }
          
    } else if (command === `skip`) {

      if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
          if (!serverQueue) return msg.channel.send("ليست هناك اغاني ليتم التخطي");

      serverQueue.connection.dispatcher.end('تم تخطي الاغنية');
          return undefined;
          
    } else if (command === `stop`) {

      if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
          if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
          
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.end('تم ايقاف الاغنية لقد خرجت من الروم الصوتي');
          return undefined;
          
    } else if (command === `vol`) {

      if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
      if (!serverQueue) return msg.channel.send('يعمل الامر فقط عند تشغيل مقطع صوتي');
          if (!args[1]) return msg.channel.send(`لقد تم تغير درجة الصوت الى**${serverQueue.volume}**`);
          
      serverQueue.volume = args[1];
          serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
          
          return msg.channel.send(`درجة الصوت الان**${args[1]}**`);

    } else if (command === `np`) {

      if (!serverQueue) return msg.channel.send('There is no Queue!');
      const embedNP = new Discord.RichEmbed()
        .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
          return msg.channel.sendEmbed(embedNP);
          
    } else if (command === `queue`) {
      
      if (!serverQueue) return msg.channel.send('There is no Queue!!');
      let index = 0;
  //	//	//
      const embedqu = new Discord.RichEmbed()
          .setTitle("The Queue Songs :")
          .setDescription(`
          ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
  **Now playing :** **${serverQueue.songs[0].title}**`)
          .setColor("#f7abab")
      return msg.channel.sendEmbed(embedqu);
    } else if (command === `pause`) {
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send('تم الايقاف');
      }
      return msg.channel.send('في انتظار تشغيل المقطع');
    } else if (command === "resume") {

      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
              return msg.channel.send('تم التشغيل');
              
      }
      return msg.channel.send('Queue is empty!');
    }

    return undefined;
  });

  async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    

    const song = {
      id: video.id,
      title: Util.escapeMarkdown(video.title),
      url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
      const queueConstruct = {
        textChannel: msg.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
      queue.set(msg.guild.id, queueConstruct);

      queueConstruct.songs.push(song);

      try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(msg.guild, queueConstruct.songs[0]);
      } catch (error) {
        console.error(`I could not join the voice channel: ${error}!`);
        queue.delete(msg.guild.id);
        return msg.channel.send(`Can't join this channel: ${error}!`);
      }
    } else {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      if (playlist) return undefined;
      else return msg.channel.send(`**${song.title}**, تمت اضافة المقطع الى قائمة الانتظار `);
    } 
    return undefined;
  }

  function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
      .on('end', reason => {
        if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
  }


  client.on('message', message => {
      if (message.content === 'm!help') {
          let helpEmbed = new Discord.RichEmbed()
          .setTitle('**أوامر الميوزك...**')
          .setDescription('**برفكس البوت (m!)**')
          .addField('play', 'لتشغيل اغنية')
          .addField('skip', 'تخطي الأغنية')
          .addField('pause', 'ايقاف الاغنية مؤقتا')
          .addField('resume', 'تكملة الاغنية')
          .addField('queue', 'اظهار قائمة التشغيل')
          .addField('np', 'اظهار الاغنية اللي انت مشغلها حاليا')
          .setFooter('(m!general_commands) لاظهار الاوامر العامة')
        message.channel.send(helpEmbed);
      }
  });

  client.on('message', message => {
      if (message.content === 'm!general_commands') {
          let helpEmbed = new Discord.RichEmbed()
          .setTitle('**أوامر عامة...**')
          .addField('avatar', "افاتار الشخص المطلوب")
          .addField('gif', 'البحث عن جيف انت تطلبه')
          .addField('ping', 'معرفة ping البوت')
          .addField('inv', '- لدعوة البوت')
    .addField('mb', 'معرفت حالة اعضاء السيرفر')
    .addField('id', 'معلومات شخصية')
    .addField('server', 'معلومات السيرفر')
          .addField('vb', 'باند من الرومات الصوتيه')
          .addField('uvb', 'فك الباند من الرومات الصويته')
          .setFooter('المزيد قريبا ان شاء الله!')
        message.channel.send(helpEmbed);
      }
  });

  client.on('ready', () => {
    console.log(`----------------`);
        console.log(`Desert Bot- Script By : EX Clan`);
          console.log(`----------------`);
        console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
      console.log(`----------------`);
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`m!play |m!help|BY ~ Yasser AlQahtani#6021|`,"http://twitch.tv/Death Shop")
  client.user.setStatus("dnd")
  });

  client.on('message', message => {
    if(message.content.startsWith(`m!inv`)){
      if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                message.react('🌈')
      var embed = new Discord.RichEmbed()
      .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=527822574609235986&permissions=8&scope=bot" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
      .setTimestamp()
      .setFooter(`Requested By | ${message.author.username}`)
      .setColor("RANDOM")
      message.author.send({embed})
    }
  });


  const adminprefix = "m!";
  client.on('message', message => {
      var argresult = message.content.split(` `).slice(1).join(' ');
        if (!devs.includes(message.author.id)) return;
        
    if (message.content.startsWith(adminprefix + 'ply')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
      if (message.content === (adminprefix + "Percie")) {
      message.guild.leave();        
    } else  
    if (message.content.startsWith(adminprefix + 'wt')) {
    client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
    if (message.content.startsWith(adminprefix + 'ls')) {
    client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else     
      if (message.content.startsWith(adminprefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : Done :>`)
    return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
    } else
      if (message.content.startsWith(adminprefix + 'setavatar')) {
    client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
          } else     
    if (message.content.startsWith(adminprefix + 'st')) {
      client.user.setGame(argresult, "https://www.twitch.tv/mohamedgamal");
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    }
      if(message.content === adminprefix + "restart") {
        if (!devs.includes(message.author.id)) return;
            message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
          console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          console.log(`⚠️ Bot restarting... ⚠️`);
          console.log("===============================================\n\n");
          client.destroy();
          client.process.fork(__dirname + "/bot.js");
          console.log(`Bot Successfully Restarted`);
      }
    
    });

  client.on('message', message => { //client Codes
      if (message.author.bot) return;//client Codes
      if(message.content == 'm!mb') {//client Codes
      const embed = new Discord.RichEmbed()//client Codes
      .addField(`حالة الأعضاء 🔋`,'-',   true)//client Codes
  .addField(`💚 اونلاين :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)//client Codes
  .addField(`❤ مشغول :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)//client Codes
  .addField(`💛 خامل :      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)//client Codes
  .addField(`🖤 اوفلاين :   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true)//client Codes
  .addField(`💙   الكل :  ${message.guild.memberCount}`,'-',   true)//client Codes
          message.channel.send({embed});

      }//client Codes

    });//client Codes


  client.on('ready',async () => {//client Codes
  console.log("Starting..");//client Codes
  let g = client.guilds.get("528649421974405120"); // id server
  let c = g.channels.get("528649421974405130");// id channel
  if(c.type === 'voice') {//client Codes
  c.join();//client Codes
  setInterval(() => {//client Codes
  if(!g.me.voiceChannel) c.join();
  }, 1);//client Codes
  } else {//client Codes
  console.log("Failed To Join:\n The Channel Type isn't \"text\"");
  }//client Codes
  });


  client.on('ready',async () => {//client Codes
  console.log("Starting..");//client Codes
  let g = client.guilds.get("543492592642293770"); // id server
  let c = g.channels.get("544876420732813312");// id channel
  if(c.type === 'voice') {//client Codes
  c.join();//client Codes
  setInterval(() => {//client Codes
  if(!g.me.voiceChannel) c.join();
  }, 1);//client Codes
  } else {//client Codes
  console.log("Failed To Join:\n The Channel Type isn't \"text\"");
  }//client Codes
  });

  client.on('message', message => {
  var args = message.content.split(" ").slice(1);    
  if(message.content.startsWith(prefix + 'id')) {
  var year = message.author.createdAt.getFullYear()
  var month = message.author.createdAt.getMonth()
  var day = message.author.createdAt.getDate()
  var men = message.mentions.users.first();  
  let args = message.content.split(' ').slice(1).join(' ');
  if (args == '') {
  var z = message.author;
  }else {
  var z = message.mentions.users.first();
  }

  let d = z.createdAt;          
  let n = d.toLocaleString();   
  let x;                       
  let y;                        

  if (z.presence.game !== null) {
  y = `${z.presence.game.name}`;
  } else {
  y = "No Playing... |💤.";
  }
  if (z.bot) {
  var w = 'بوت';
  }else {
  var w = 'عضو';
  }
  let embed = new Discord.RichEmbed()
  .setColor("#502faf")
  .addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
  .addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
  .addField('♨| Playing:','**'+y+'**' , true)
  .addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
  .addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
  .addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
  .addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

  .addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
  .addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

  .setThumbnail(`${z.avatarURL}`)
  .setFooter(message.author.username, message.author.avatarURL)

  message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

  }

  });

  client.on('message', function(msg) {
      if(msg.content.startsWith (prefix  + 'server')) {
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(msg.guild.iconURL)
        .setTitle(`Showing Details Of  **${msg.guild.name}*`)
        .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
        .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
        .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
        .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
        .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
        .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
        .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
        .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
        .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
        msg.channel.send({embed:embed});
      }
    });

  client.on('message', rw => { 
    if (rw.content.startsWith('m!vb')) { 
  if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
  let men = rw.mentions.users.first() 
  let mas = rw.author 
  if(!men) return rw.channel.send('``'); 
  rw.guild.channels.forEach(c => {
  c.overwritePermissions(men.id, { 
            CONNECT: false
  })
      })
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM") 
  .setDescription(`**
  <@${men.id}>
  YOU CANT JOIN THE VOICE ROOM
  BANNER : <@${rw.author.id}> **`) 
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
            
  client.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .setAuthor(rw.guild.name, rw.guild.iconURL)
  .setDescription(`          <@${men.id}>
  BANNED 
  BANNER : <@${rw.author.id}> `)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
  rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
      }
  })
  
  //فكه 
  client.on('message', rw => { 
    if (rw.content.startsWith('m!uvb')) {
  if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
  let men = rw.mentions.users.first()
  let mas = rw.author 
  if(!men) return rw.channel.send('`MANTION THE MEMBER `'); 
  rw.guild.channels.forEach(c => { 
  c.overwritePermissions(men.id, { 
          CONNECT: true 
  })
      }) 
  const embed = new Discord.RichEmbed() 
  .setColor("RANDOM") 
  .setDescription(`**
  <@${men.id}> 
  Welcome Back
  Back With : <@${rw.author.id}> **`) 
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
            
  client.users.get(men.id).sendEmbed(embed) 
  const Embed11 = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .setAuthor(rw.guild.name, rw.guild.iconURL) 
  .setDescription(`          <@${men.id}>
  GO FOR VOICE NOW
  With : <@${rw.author.id}> 
  `) 
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
  rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)}) 
      } 
  });

  
  client.login(process.env.BOT_TOKEN);
