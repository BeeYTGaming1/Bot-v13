module.exports={
    name:"rps",
    aliases:["rps"],
    usage:"rps",
    description: "game rock parper",
    emoji: `✂`,
    timeout:"2000", //20 seconds
      run: async(client,message,args)=>{
      const simplydjs= require("simply-djs")
      simplydjs.rps(message)
      }
    }