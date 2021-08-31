module.exports={
    name:"calculator",
    aliases:["calc"],
    usage:"calc",
    emoji: `🧮`,
    description: 'calculator bot',
    timeout:"2000", //20 seconds
    run: async(client,message,args)=>{
      const simplydjs= require("simply-djs")
      simplydjs.calculator(message,{
        embedColor:"GREEN"
      })
    }
  }