import { NotFoundException } from "../../exceptions/not-found.exception";
import { Post } from "../entities";

export class PostRepository {
  constructor() {}

  /**
   * Receives a Post as parameter
   * @post
   * returns void
   */
  async create(post) {
    try {
      return await Post.create({ ...post });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Post
   */
  async findById(id) {
    try {
      const postItem = await Post.findByPk(id);

      if (!postItem) {
        throw new NotFoundException("Post", id);
      }
      return postItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @slug
   * returns Post
   */
  async findBySlug(slug) {
    try {
      const postItem = await Post.findOne({
        where: { slug },
      });

      if (!postItem) {
        throw new NotFoundException("Post", slug);
      }
      return postItem;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Receives a String as parameter
   * @title
   * returns Post
   */
  async findByTitle(title) {
    try {
      const postItem = await Post.findOne({ where: { title } });
      return postItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Post
   */
  async getAll() {
    try {
      const posts = await Post.findAll();
      return posts;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Post as parameter
   * @post
   * returns void
   */
  async update(post) {
    const { id } = post;
    try {
      const postItem = await Post.findByPk(id);

      if (!postItem) {
        throw new NotFoundException("Post", id.toString());
      }

      return await postItem?.update({ ...post });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a string as parameter
   * @id
   * returns void
   */
  async delete(id) {
    try {
      const postItem = await Post.findByPk(id);

      if (!postItem) {
        throw new NotFoundException("Post", id);
      }

      await postItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
