import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss'],
})
export class CoursedetailsComponent implements OnInit {
  coursedetails;
  startQuiz;

  python = null;
  javascript = null;
  DataScience = null;
  machineLearning = null;
  pythonMegaCouse = null;
  pythonPrograming = null;
  isEnded = false;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.coursedetails = res['course'];
      if (this.coursedetails == 'python') {
        this.python = true;
      } else if (this.coursedetails == 'DataScience') {
        this.DataScience = true;
      } else if (this.coursedetails == 'javascript') {
        this.javascript = true;
      } else if (this.coursedetails == 'pythonMegaCouse') {
        this.pythonMegaCouse = true;
      } else if (this.coursedetails == 'pythonPrograming') {
        this.pythonPrograming = true;
      } else if (this.coursedetails == 'machineLearning') {
        this.machineLearning = true;
      }
    });
  }
  startQuizEvent() {
    this.startQuiz = true;
  }

  vidEnded() {
    this.isEnded = true;
  }
}



