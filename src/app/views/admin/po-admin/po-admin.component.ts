import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-po-admin',
  templateUrl: './po-admin.component.html',
  styleUrls: ['./po-admin.component.css']
})
export class PoAdminComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
}
