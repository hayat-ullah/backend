import { DataTypes} from "sequelize"; 
import sequelize from "../../db/config.js";
import PostModel from "../post/index.js"



const commitmodel=sequelize.define (
    "commitmodel",
    {
      Bodytitle:{
        type: DataTypes.STRING(),
         allowNull:false,
      },
    },
    {paranoid:true}
 );

 PostModel.hasMany(commitmodel)
 commitmodel.belongsTo(PostModel)
 

 export default commitmodel;