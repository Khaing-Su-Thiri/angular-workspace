import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { Server, ServerService } from '../server.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss'],
})
export class ServerEditComponent implements OnInit, CanComponentDeactivate {
  server: Server = { id: -1, name: '', status: 'offline' };
  allowEdit = false;
  changesSaved = false;

  constructor(
    private route: ActivatedRoute,
    private severService: ServerService,
    private router: Router
  ) {}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) return true;
    return this.changesSaved
      ? true
      : confirm('Do you want to discard the changes?');
  }

  onUpdate() {
    this.severService.updateServer(this.server);
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.server = this.severService.getServer(+params['id']);
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
    });
    this.route.fragment.subscribe((value) => console.log(value));
  }

  // ngOnInit(): void {
  //   console.log(this.route.snapshot.params['id']);
  //   console.log(this.route.snapshot.queryParams['allowEdit']);
  //   console.log(this.route.snapshot.fragment);

  //   this.route.queryParams.subscribe((params: Params) => {
  //     console.log(params['allowEdit']);
  //   });

  //   this.route.fragment.subscribe((value) => console.log(value));
  // }
}
