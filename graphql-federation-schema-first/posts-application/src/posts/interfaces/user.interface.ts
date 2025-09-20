import { Post } from './post.interface';

export interface User {
  id: number;
  posts?: Post[];
}
