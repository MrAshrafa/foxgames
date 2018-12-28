const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
client.on('ready', () => {
	
    console.log('I am ready!');
	client.user.setGame(`$help | FoxGames 💙✨`, 'https://www.twtich.tv/nothing')
});


client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.on('message', message => {
    if (message.content == "$جمع") {
        var x = ["212+212=?",
"321+43=?",
"4534+23",
"23+3434=?",
"2311+32=?",
"765+343=?",
"343+1121=?",
"43234+1=?",
"10000000000+2=?",
"232+21=?",
"12+23=?",                 
];
        var x2 = ['424',
        "364",
        "4557",
        "3457",
		"2343",
		"1108",
    "1464",
    "43235",
   "10000000002",
  "253",
  "35",
                  
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يحل جمع : __**${x[x3]}**_
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بحل جمع في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "$ضرب") {
        var x = ["9x9=?",
"8x9=?",
"4x4=?",
"2x22=?",
"12x2=?",
"7x7=?",
"5x5=?",
"9x3=?",
"2342432x0=?",
"21321x1=?",
"3x4x5=?",
];
        var x2 = ['81',
        "72",
        "16",
        "42",
		"22",
		"49",
		"25",
		"27",
    "0",
    "21321",
    "60",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يحل ضرب :  __**${x[x3]}**__
لديك 15 ثانية لحل ضرب`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل  في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "$طرح") {
        var x = ["4326-2345=?",
"5822-8547=?",
"543-823=?",
"1500-500=?",
"4322-2768=?",
"5652-1255=?",
"3421-11234=?",
"34545-1233=?",
"23456-54332=?",
"2312-3433=?",
"4321-321=?",
];
        var x2 = ['1981',
        "-2725",
        "-280",
        "1000",
"1554",
"4397",
"-7813",
"33312",
"-30876",
"1121",
"4000",

        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يكتب حل صح :  __**${x[x3]}**__
لديك 15 ثانية لكتابة حل صحيح`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "$عواصم" , "aosem") {
        var x = ["ما عاصمة **المغرب**",
    "ما عاصمة **افغانستان**",
    "ما عاصمة **الجزائر **",
    "ما عاصمة **الارجنتين",
    "ما عاصمة ** مصر**",
    "ما عاصمة ** استراليا**",
    "ما عاصمة ** البرازيل**",
    "ما عاصمة **قطر  **",
    "ما عاصمة **السعودية  **",
    "ما عاصمة **سوريا  **",
    "ما عاصمة **تركيا  **",
    "ما عاصمة **العراق  **",
    "ما عاصمة **لبنان  **",
    "ما عاصمة **فلسطين  **",
    "ما عاصمة **امريكا  **",
   "ما عاصمة **كندا  **",
   "ما عاصمة **البرازيل  **",
];
        var x2 = ['الرباط',
        "كابل",
        "الجزائر",
      "بوينس ايرس",
"القاهرة",
"كانبرا",
"برازيليا",
"الدوحة",
      "الرياض",
      "دمشق",
      "انقرة",
    "بغداد",
      "بيروت",
    "القدس",
  "وشنطن",
    "اوتاوا",
  "برازيليا",
  
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب عاصمة صح :  __**${x[x3]}**__
لديك 20 ثانية لكتابة عاصمة صحيحة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة عاصمة صح في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "$فكك") {
        var x = ["محمد",
"مدرسة",
"بيت",
"الله",
"بيت مقدس",
"مهندس",
"ريضيات",
"بسم الله رحمن رحيم",
"طماطم",
"سيرفر",
];
        var x2 = ['م ح م ح',
        "م د ر س ة",
        "ب ي ت ",
        "ا ل ل ه",
"ب ي ت م ق د س",
"م ه ن د س",
"ر ي ض ي ا ت",
"ب س م ا ل ل ه ر ح م ن ر ح ي م",
"ط م ا ط م",
"س ي ر ف ر",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  فكك
 :  __**${x[x3]}**__
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بتفكيك كلمة في وقت مناسب`);
        })
        })
    }
})

client.on('message', message => {
if(message.content.startsWith("$فواكه")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on("message", function(message) {
var prefix = "$";
   if(message.content.startsWith(prefix + "rsp")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - حجرة**','**# - ورقة**','**# - مقص**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("حجرة","🇷",true)
    .addField("ورقة","🇵",true)
    .addField("مقص","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

client.on('message', message => {
    if (message.content == "$اسرع") {
        var x = ["ملك",
"ماستر",
"يوم",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
];
        var x2 = ['ملك',
        "ماستر",
        "يوم",
        "أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "$اسائلة دينية") {
        var x = ["اكبر سوره في قران",
"اصغر سوره في قران",
"اول سوره نزلت على محمد (ص)؟",
"ثاني اطول سوره في القران من ناحيت المساحه",
"ثاني اطول سوره في القران من ناحيت ايات",
"هل ذكر اسم نبي محمد في انجيل او تورات ؟؟",
"من الذي هاجر مع نبي محمد الى  يثرب",
"من نام في فراش النبي محمد",
"متى نزل القران على محمد",
"نحن كم سنه هجريه",
"كم عدد ايام عيد الفطر",

];
        var x2 = ['سورة البقرة',
        "سورة الكوثر",
        "صورة القلم",
        "سورة النساء",
"سورة الشعراء",
"نعم ذكر",
"ابو بكر الصديق",
"علي بن ابي طالب",
"في عمر الربعين سنة",
"نحن 1440",
"ثلاث ايام",

        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اسائلة ديني :__**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب في الوقت المناسب `);
        })
        })
    }
})

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
[❖═════ FoxGames ═══════❖]
برفكس = $ 
عدد العاب = 10
By = Fox Team
[❖═════ FoxGames ═══════❖]
$فكك

$اسرع

$عواصم

$ضرب

$جمع

$طرح

$اسائلة دينية

$فواكه

$rsp

$اموجي
[❖═════ FoxGames ═══════❖]
       **  `)
   message.channel.sendEmbed(embed)
   
   }
   });  

client.on('message', message => {
    if (message.content == "$ايموجي") {
        var x = ["📻",
"🌞",
"🕋",
"🤶",
"🎣",
"🤚",
"😫",
"😡",
];
        var x2 = ['📻',
        "🌞",
        "🕋",
        "🤶",
"🎣",
"🤚",
"😫",
"😡",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اموجي
: __**${x[x3]}**__
لديك 15 ثانية `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}احسن لقد كتبت الموجي صحيح في وقت مناسب`);
        })
        })
    }
})

client.login(process.env.BOT_TOKEN);
