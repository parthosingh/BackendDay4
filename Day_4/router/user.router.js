const express= require("express");

const UserModel = require("../model/user.mode")

const userRouter = express.Router()

userRouter.get("/get-user", async (req, res)=>{
    try {
        const user = await UserModel.find()
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
});

userRouter.post("/create-user", async (req,res)=> {
    const{name, age, gender} = req.body;

    try {
        let user = await UserModel.findOne({name});
        if(user){
            res.send("user already exists")
            return;
        }
    
        const newuser =  new UserModel({
            name,
            age,
            gender
        })
        await newuser.save();
        res.send(newuser)
         }
         catch (error) {
        res.send(error.message)
    }
});

userRouter.patch("/update-user/:id", async (req, res) => {
         const {id} = req.params
         try {
            const Updateuser = await UserModel.findByIdAndUpdate({_id: id}, req.body)
            res.send(Updateuser)
         } catch (error) {
              console.log(error.message)           
         }
})

module.exports = userRouter;