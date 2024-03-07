import PostModel from "../../model/post/index.js";
import UserModel from "../../model/user/index.js";
import commitmodel from "../../model/commit/index.js";

const commitController = {
  create: async (req, res) => {
    const payload = req.body;

    const commit = await commitmodel.create({
      Bodytitle: payload. Bodytitle,
      
      UserId: payload.UserId,
    });

    res.json({
      message: "commit created",
      commit,
    });
  },

  // update: async (req, res) => {
  //   const payload = req.body;
  //   const params = req.params;

  //   const post = await PostModel.findByPk(params.postId);
  //   if (!post) {
  //     return res.status(404).json({
  //       message: "NO data found",
  //     });
  //   }

  //   post.title = payload.title;
  //   post.description = payload.description;

  //   await post.save();

  //   res.json({
  //     message: "Post updated",
  //     post,
  //   });
  // },

  getAll: async (req, res) => {
    const commit = await commitmodel.findAll({
      include: [commitmodel],
    });
    res.json({
      commit,
    });
  },
};



export default commitController;