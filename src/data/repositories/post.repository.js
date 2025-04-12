import { nanoid } from "nanoid";
import { NotFoundException } from "../../exceptions/not-found.exception";
import { Category, Post, Tag, User, PostTag } from "../entities";

export class PostRepository {
  constructor() {}

  /**
   * Receives a Post as parameter
   * @post
   * returns void
   */
  async create(post, tags) {
    try {
      const createdPost = await Post.create({ ...post });
      // Find or create tags
      if (tags && tags.length > 0) {
        const postTagEntries = tags.map((tagId) => ({
          id: nanoid(20), // Custom ID
          postId: createdPost.id,
          tagId,
        }));

        await PostTag.bulkCreate(postTagEntries);
      }

      return createdPost;
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
      const postItem = await Post.findByPk(id, {
        include: [
          {
            model: Category,
            as: "category",
          },
          {
            model: Tag,
            as: "tags",
          },
        ],
      });

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
        include: [
          {
            model: Category,
            as: "category",
          },
          {
            model: Tag,
            as: "tags",
          },
        ],
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
      const postItem = await Post.findOne({
        where: { title },
        include: [
          {
            model: Category,
            as: "category",
          },
          {
            model: Tag,
            as: "tags",
          },
        ],
      });
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
      const posts = await Post.findAll({
        include: [
          {
            model: Category,
            as: "category",
          },
          {
            model: Tag,
            as: "tags",
          },
          {
            model: User,
            as: "user", // if you defined this association
            attributes: ["id", "email", "username"],
          },
        ],
      });
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPosts() {
    try {
      const posts = await Post.findAll({
        limit: 5,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: Category,
            as: "category",
          },
          {
            model: Tag,
            as: "tags",
          },
          {
            model: User,
            as: "user", // if you defined this association
            attributes: ["id", "email", "username"],
          },
        ],
      });
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
