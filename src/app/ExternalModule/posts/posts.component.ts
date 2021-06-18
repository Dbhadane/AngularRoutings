import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { IPosts } from "./Ipost";
// import axios from "axios";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  data:any=[];

  show: Boolean | undefined;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.show = true;
    this.http.get("https://api.github.com/users").subscribe(resonse=>{

        console.log(resonse);
        this.data=resonse;
        // this.data=resonse.map(item=>{
        //   return new IPosts()
        // })
        
    });
     
  }
}
