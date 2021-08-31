module.exports={
    name:"tictactoe",
    aliases:["ttt"],
    usage:"ttt",
    emoji: `⭕`,
    description: "play tic tac toe",
    timeout:"2000", //20 seconds
    run: async(client,message,args)=>{
      const simplydjs = require('simply-djs')

      // message event
      // tictactoe command
      simplydjs.tictactoe(message, {
          xEmoji: '❌', //default: ❌
          oEmoji: '⭕', //default: ⭕
          idleEmoji: '➖', //default: ➖
          embedColor: '#075FFF', //default: #075FFF
          embedFoot: 'Make sure to win' //default: 'Make sure to win ;)' 
      })
      
  }
}