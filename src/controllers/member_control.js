import memberModel from "../models/member.js";

const getAllMembersControl = async(req,res) => {
    try {
        const members = await memberModel.getAllMembersModel()
        res.status(200).json(members)
        
    }catch (error) {
        console.log(error)
    }
}

const getMemberByIdControl = async(req,res) => {
    try {
        const id = +req.params.id;
        const member = await memberModel.getMemberByIdModel(id)

        if (member){
            res.status(200).json(member)
        } else{
            res.status(404).send("Miembro no encontrado")
        }
    } catch (error) {
        console.log(error)
    }
}

export {getAllMembersControl,getMemberByIdControl}