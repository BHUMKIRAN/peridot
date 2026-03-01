import Query from "../models/userQueries.js"

const createQuery = async (req , res)=>{
    try {
        console.log(req.body)
        const query = await Query.create(req.body)
        res.status(200).json(query)
    }catch(error){
        console.error(error)
        res.status(500).json({message : 'server error'})
    }
}

const getallQuery = async(req,res)=>{
    try{
        const query = await Query.find().sort({createdAt:-1})
        res.status(200).json(query)
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'server error'})
    }
}
export { createQuery , getallQuery}