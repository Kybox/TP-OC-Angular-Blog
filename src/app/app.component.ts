import {Component, OnInit} from '@angular/core';
import {Post} from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Blog';
  private postList: Post[] = [];

  ngOnInit(): void {

    this.postList = this.createPostList();
  }

  createPostList(): Post[] {

    let postList: Post[] = [];

    postList.push(new Post('My first post', 'A content for the first post', 3, new Date()));
    postList.push(new Post('My second post', 'A content for the second post', -2, new Date()));
    postList.push(new Post('Another post', 'A content for the last post', 0, new Date()));

    return postList;
  }


}

