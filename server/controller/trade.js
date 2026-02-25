import tradeSchema from "../models/tradeSchema";

const createTrade = async(req,res)=>{
    try{
        const {symbol} = req.body;

        if(symbol){
            res.status(404).json({message:"symbol already exists"})
        }
        const newTrade = await tradeSchema.create(req.body)
        res.status(200).json(newTrade)

    }catch(error){
        console.error(error)
        res.status(500).json({message: "INternal server error"})
    }
}