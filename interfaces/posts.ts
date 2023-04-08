export interface Post {
  node: NodePost;
};

export interface NodePost {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: Categorie[];
};

export type Author = {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
};

export type Categorie = {
  name: string;
  slug: string;
};

export type Comment = {
  name: string, 
  email: string, 
  comment: string, 
  slug: string
};