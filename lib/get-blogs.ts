import { allBlogs } from "@/.contentlayer/generated";
import { Blog } from "@/types/data-type";
import { notFound } from "next/navigation";

export const getAllBlogs = (): Blog[] => {
  return allBlogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getLastBlogs = (limit = 4): Blog[] => {
  return getAllBlogs().slice(0, limit);
};

export const getOneBlog = (filename: string): Blog => {
  const blog = allBlogs.find(
    (item) => item.url === `/blogs/${filename}`
  );
  if (blog) return blog;
  return notFound();
};
