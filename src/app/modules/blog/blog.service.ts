// const create_new_blog_into_db = () => { return {}; };

// export const blog_service = { create_new_blog_into_db };

import { blog_model } from "./blog.schema";

// Create a new blog
const create_new_blog_into_db = async (blogData: any) => {
  const result = await blog_model.create(blogData);
  return result;
};

// Get all blogs
const get_all_blogs_from_db = async () => {
  const result = await blog_model.find();
  return result;
};

export const blog_service = {
  create_new_blog_into_db,
  get_all_blogs_from_db,
};