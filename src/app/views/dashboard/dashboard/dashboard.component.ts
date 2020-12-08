
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  courseDetails;
  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.courseDetails = this.cs.getCourseDetails();
  }
}