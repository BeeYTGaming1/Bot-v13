const { Client, Message, MessageEmbed, Integration, MessageCreate } = require("discord.js");
const simplydjs = require('simply-djs')
module.exports={
    name:"ticket",
    aliases:["tick"],
    usage:"tick",
    description: "make ticket",
    emoji: `🎫`,
    run: async(client,message,args)=>{
        // interactionCreate
    simplydjs.clickBtn(interaction, {
        embedDesc: 'Click To Create Ticket',
        embedColor: '#ff0000', // default: #075FFF
        closeColor: 'RED', //default: blurple
        closeEmoji: '🔒', // default: 🔒
        delColor: 'GREEN', // default: grey
        delEmoji: '❌', // default: ❌
        openColor: 'BLUE' , // default: green
        openEmoji: '🔓', // default: 🔓
        timeout: true, // default: true | Needs to be boolean (true/false)
        cooldownMsg: 'Wait me',
        categoryID: '867769776931078165',
        role: '878969535548497930' // Role which sees the ticket channel (like Support Role)
        })
    
    // messageCreate event
    // setup-ticket command
    
    simplydjs.ticketSystem(message, message.channel, {
         embedDesc: 'Want create a tiket ? Click here', // default: '🎫 Create a ticket by clicking the button 🎫'
        embedColor: '#ff0000', // default: #075FFFF
        embedFoot: `${message.guild.name}`, // default: message.guild.name
        emoji: '✔', // default:, 🎫
        color: 'BLURPLE', // default: blurple
    })
    
    }
}
