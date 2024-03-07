import sendmail from "../../Email/email.js";
import PostModel from "../../model/post/index.js";
import UserModel from "../../model/user/index.js";

const PostController = {
  create: async (req, res) => {
    const payload = req.body;

    const post = await PostModel.create({
      title: payload.title,
      description: payload.description,
      UserId: payload.UserId,
    });

    res.json({
      message: "Post created",
      post,
    });
  },

  update: async (req, res) => {
    const payload = req.body;
    const params = req.params;

    const post = await PostModel.findByPk(params.postId);
    if (!post) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    post.title = payload.title;
    post.description = payload.description;

    await post.save();

    res.json({
      message: "Post updated",
      post,
    });
  },

  getAll: async (req, res) => {
    sendmail()
    const posts = await PostModel.findAll({
      include: [UserModel],
    });
    res.json({
      posts,
    });
  },
};

export default PostController;