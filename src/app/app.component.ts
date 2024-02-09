import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Devices', url: '/devices/', icon: 'phone-portrait' },
    { title: 'Playlists', url: '/playlists', icon: 'play' },
    { title: 'Category', url: '/category', icon: 'apps' },
    { title: 'Location', url: '/location', icon: 'location' },
    { title: 'Campaign', url: '/campaign', icon: 'nuclear' },
    { title: 'Inventory', url: '/inventory', icon: 'bag-remove' },
    { title: 'Invoice', url: '/invoice', icon: 'receipt' },
    { title: 'Playout Certificate', url: '/playout', icon: 'ribbon' },
    { title: 'Users', url: '/users', icon: 'people' },
    { title: 'Profile', url: '/profile', icon: 'person' },

  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
