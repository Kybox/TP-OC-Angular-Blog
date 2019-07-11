import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {

  @Input()
  public post: Post;

  constructor() {

  }

  public liked() {

    this.post.loveIts ++;
  }

  public not_liked() {

    this.post.loveIts --;
  }
}
