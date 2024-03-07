
import commitmodel from "../model/commit/index.js";
import PostModel from "../model/post/index.js";
import UserModel from "../model/user/index.js";
import UserFollowerModel from "../model/user/userfollower.js";

const dbInit = async () => {
  await UserModel.sync({ alter: true, force: false });
  await PostModel.sync({ alter: true, force: false });
  await UserFollowerModel.sync({alter:true,force: false});
  await commitmodel.sync({alter:true, force:false});
};

export default dbInit;
