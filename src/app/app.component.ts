import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './data/api.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Movie';


  constructor(private service: ApiService) {
    // let url = "data.json"
    // this.service.getApi(url).subscribe((res: any) => {
    //   console.log(res)
    // })



  }

  add(){
    let url = "data1.json"
    this.service.getApi(url).subscribe((res: any) => {
      console.log(res)
      let data:list = {theaterList:res};
      url = "http://localhost:8080/add_theater"
      console.log(data)
      this.service.postApi(url, data).subscribe((res: any) => {
        console.log(res)
      })
    })
  }

}

interface list{
  theaterList:theater[];
}

interface theater{
  name:string;
  address:string;
  phone:string;
}


// 爬蟲
// https://ithelp.ithome.com.tw/articles/10202121

// CREATE TABLE `theater` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `address` varchar(200) DEFAULT NULL,
//   `name` varchar(200) DEFAULT NULL,
//   `phone` varchar(200) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


// CREATE TABLE `movie` (
//   `id` int NOT NULL,
//   `name` varchar(45) DEFAULT NULL,
//   `describe` varchar(45) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


