import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { RootObject } from 'src/app/interfaces/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: RootObject = {} as any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
