module.exports={
    name:"stealemoji",
    aliases:["semoji"],
    usage:"semoji <emoji>",
    description: "steal emoji to server",
    emoji: `💵`,
    timeout:"2000",
    run: async(client,message,args)=>{
    const simplydjs = require('simply-djs')
    simplydjs.stealEmoji(message, args, {
    embedTitle: 'Emoji have been steal', // default: `Emoji Added ;)`
    embedColor: '#ff0000', //default: #075FFF;
    embedFoot: '+1 $ for this emoji', // default: 'Stop stealing.. its illegal.'
    failedMsg: "Can't find an emoji for it" //default: "Couldn't find an emoji from it"
    })
    }
}
