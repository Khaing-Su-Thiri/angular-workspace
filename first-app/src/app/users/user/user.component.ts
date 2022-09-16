import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = {
    id: -1,
    name: '',
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: +(this.route.snapshot.paramMap.get('id') ?? -1),
      name: this.route.snapshot.params['name'],
    };

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.user = {
        id: +(paramMap.get('id') ?? -1),
        name: paramMap.get('name') ?? '',
      };
    });
  }
}
