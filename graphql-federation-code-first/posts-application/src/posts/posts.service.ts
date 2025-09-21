import { Injectable } from '@nestjs/common';
// import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private posts = [
    { id: 1, title: 'Lorem Ipsum', authorId: 1 },
    { id: 2, title: 'Foo', authorId: 1 },
    { id: 3, title: 'Bar', authorId: 2 },
    { id: 4, title: 'Hello World', authorId: 2 },
  ];

  findAll() {
    return this.posts;
  }

  findOneById(id: number) {
    return this.posts.find((post) => (post.id = id));
  }

  findByAuthorId(authorId: number) {
    return this.posts.filter((post) => post.authorId == authorId);
  }
}
