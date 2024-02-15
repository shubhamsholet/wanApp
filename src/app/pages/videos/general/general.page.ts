import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  totalSeconds: any
  timeFomat: any
  totalSecondshere: any

  generalvideolist = [
    {
      name: '14-Its Never Too Late To Start Exercising_English.mp4',
      duration: 423,
      count: 4,
      delete: false,
      edit: true,
      id: 1,
    },
    {
      name: '14-ready to move_English.mp4',
      duration: 34543,
      count: 434,
      delete: false,
      edit: true,
      id: 2,
    },
    {
      name: '211 lets play_English.mp4',
      duration: 42,
      count: 45,
      delete: true,
      edit: true,
      id: 3,
    },
    {
      name: 'messup_English.mp4',
      duration: 34423,
      count: 43,
      delete: true,
      edit: false,
      id: 4,
    },
    {
      name: 'messup_English.mp4',
      duration: 34423,
      count: 43,
      delete: true,
      edit: false,
      id: 5,
    },
    {
      name: 'messup_English.mp4',
      duration: 34423,
      count: 43,
      delete: true,
      edit: false,
      id: 6,
    },
  ]

  constructor(private alertController: AlertController) {

  }


  async deleteVideoItem(item: { name: any, id: any }) {
    const alert = await this.alertController.create({
      header: 'Do you want to delete this item?',
      subHeader: item.id,
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }



  // async editVideoItem(item: { name: any, id: any }) {
  //   const alert = await this.alertController.create({
  //     header: 'Do you want to edit this item?',
  //     subHeader: item.id,
  //     message: 'This is an alert!',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         role: 'confirm',
  //         handler: () => {
  //           item.name = 'anil';
  //         },
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }


  ngOnInit() {
    this.totalSeconds = this.generalvideolist.map(video => video.duration);
    // console.log("totalSeconds === ", this.totalSeconds, typeof this.totalSeconds[0]);

    const convertedDurations: string[] = [];

    // for (let index = 0; index < this.totalSeconds.length; index++) {
    //   const element = this.totalSeconds[index];
    //   console.log("element === ", element);
    //   convertedDurations.push(this.convertSeconds(element))
    //   // console.log("convertedDurations === ", convertedDurations);

    // }

    this.totalSeconds.forEach((element: any, index: any) => {
      console.log("element === ", element);
      convertedDurations.push(this.convertSeconds(element));
    });

    this.totalSecondshere = convertedDurations
    console.log("this.totalSecondshere === ", this.totalSecondshere);
  }


  convertSeconds(e: any) {
    const hours = Math.floor(e / 3600);
    const minutes = Math.floor((e % 3600) / 60);
    const seconds = e % 60;
    return `${hours}h : ${minutes}m : ${seconds}s`


  }

}
