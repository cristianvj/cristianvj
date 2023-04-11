export interface PropsPost {
  post: Post;
};

export interface PropsPostNode {
  posts: PostNode[];
};

export interface PostNode {
  node: Post;
};

export interface Post {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: Category[];
};

export type Author = {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
};

export type Category = {
  name: string;
  slug: string;
};

export type Comment = {
  name: string, 
  email: string, 
  comment: string, 
  slug: string
};