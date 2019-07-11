export interface IPost {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
}

export class Post implements IPost {
  constructor(public title: string,
              public content: string,
              public loveIts: number,
              public createdAt: Date) {}
}
