import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/interfaces/Users';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user: Users;

  constructor() {}

  ngOnInit(): void {}
}
