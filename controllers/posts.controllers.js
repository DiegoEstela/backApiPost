import PostModel from "../models/posts.model.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await PostModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await PostModel.create(req.body);
    res.status(201).json({
      message: `Post created successfully (${req.body.title}, ${req.body.content})`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await PostModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Post updated successfully (${req.body.title}, ${req.body.content})`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await PostModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Post deleted successfully (${req.body.title}, ${req.body.content})`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
