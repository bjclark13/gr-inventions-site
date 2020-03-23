import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {

  services = [
    {
      icon: "cloud",
      title: "Cloud",
      text: "Need help building infrastructure in the cloud? We got your back."
    },
    {
      icon: "mobile",
      title: "Mobile",
      text: "Custom iOS & Android development suited to your needs."
    },
    {
      icon: "window-maximize",
      title: "Web",
      text: "Let us build your next web app or website."
    },
    {
      icon: "rocket",
      title: "Innovation",
      text: "Take your organization to a new level by innovating using the methodologies of the industry leaders"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
