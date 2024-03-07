import joi from 'joi';

const postvalidator={
    creat: (req, res,next)=>{
        const schema=joi.object({
            title: joi.string().min(3).max(90).required(),

            description:joi.string().max(985),
            UserId:joi.number(),
        });

         const response=schema.validate(req.body);
         if(response.error){
            return res
            .status(400)
            .json({message: 'invalid data',error:response.error});

         }
         console.log(response);
         next();
    },
};
    export default postvalidator;