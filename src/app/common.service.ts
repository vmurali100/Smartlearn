import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  courses = [
    {
      courseName: 'ARIBA',
      courseImage: 'DataScience.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'NSS',
      courseImage: 'machineLearning.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'AMS',
      courseImage: 'python.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'EQM',
      courseImage: 'pythonMegaCouse.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'SAA',
      courseImage: 'pythonPrograming.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
    {
      courseName: 'jSmart Fleet',
      courseImage: 'javascript.jpg',
      courseDesc:
        'This is a wider card with supporting text below as a naturallead-in to additional content. This content is a little bit longer.',
    },
  ];
  constructor() {}

  getCourseDetails() {
    return this.courses;
  }
}
