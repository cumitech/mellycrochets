import axios from "axios";
import { API_URL, BASE_URL } from "../constants/api-url";

export async function fetchCrochetBySlug(slug) {
  const res = await fetch(`${API_URL}${BASE_URL}/crochets/slugs/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch crochet");
  return await res.json();
}

// lib/data.ts
export async function fetchPostBySlug(slug) {
  const res = await axios.get(`${API_URL}${BASE_URL}/posts/slug/${slug}`);

  if (res.status !== 200) throw new Error("Failed to fetch post");
  return res.data;
}
export async function fetchCategoryBySlug(slug) {
  const res = await axios.get(`${API_URL}${BASE_URL}/categories/slugs/${slug}`);

  if (res.status !== 200) throw new Error("Failed to fetch category");
  return res.data;
}

export async function fetchTagBySlug(slug) {
  const res = await axios.get(`${API_URL}${BASE_URL}/tags/slugs/${slug}`);

  if (res.status !== 200) throw new Error("Failed to fetch tag");
  return res.data;
}

export async function fetchCategories() {
  const res = await axios.get(`${API_URL}${BASE_URL}/categories`);
  if (res.status !== 200) throw new Error("Failed to fetch categories");
  return res.data;
}

export async function fetchTags() {
  const res = await axios.get(`${API_URL}${BASE_URL}/tags`);
  if (res.status !== 200) throw new Error("Failed to fetch tags");
  return res.data;
}

export async function fetchLatestPosts() {
  const res = await axios.get(`${API_URL}${BASE_URL}/posts/latest_posts`);
  if (res.status !== 200) throw new Error("Failed to fetch latest posts");
  return res.data;
}
