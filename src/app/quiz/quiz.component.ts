import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountdownEvent } from 'ngx-countdown';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

class QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
  answertype: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
   
  ];
  done = [];
  quizDetails: any = [];
  mins = 0;
  seconds = 0;
  test = true;
  timer;
  currQuestion: QuizQuestion;
  currentQuestion;
  currentAnswers = [];
  qIndex = 0;
  score = 0;
  isQuizCompleted = false;
  multipleAnswers = [];
  constructor() { }
  duration = 60 * 30;

  ngOnInit(): void {
    this.quizDetails = quizQuestions;
    this.currQuestion = this.quizDetails[this.qIndex];
    this.currentQuestion = this.quizDetails[this.qIndex].question;
    this.currentAnswers = this.quizDetails[this.qIndex].answers;
    //  this.timer= setInterval(()=>{
    //     this.changeTimer(this.duration)
    //   },1000)
  }
  
  // changeTimer(duration){
  //   let timer = duration, minutes, seconds;


  //   minutes = timer / 60, 10;
  //   seconds = timer % 60, 10;

  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  // display.textContent = minutes + ":" + seconds;

  // if (--timer < 0) {
  //   timer = duration;
  // }

  // this.seconds++ 
  // if(this.seconds == 59){
  //   this.seconds=0
  //   this.mins++
  //   if(this.mins ==5){
  //     //quiz End Code Here
  //     console.log("Quiz Ended")
  //     clearInterval(this.timer)
  //   }
  // }


  // }
  dropquiz(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.test=false;
  }
  

  onChange(ans, val) {
    this.test = false;
    console.log(ans);
    if (this.multipleAnswers.indexOf(val) === -1) {
      this.multipleAnswers.push(ans);
    } else {
      this.multipleAnswers = this.multipleAnswers.filter((ans1) => ans1 !== val);
    }
  }

  check() {
    this.test = false;
  }

  onTimerFinished(e: CountdownEvent) {
    if (e.action === 'done') {
      this.isQuizCompleted = true;
    }
  }

  submitAnswer(quizForm: NgForm) {
    console.log(this.quizDetails[this.qIndex]);
    if ((this.quizDetails[this.qIndex].answertype == 'single') || (this.quizDetails[this.qIndex].answertype == 'image')) {
      this.checkCorrectAnswer(this.qIndex, quizForm.value.answer);
    } else if (this.quizDetails[this.qIndex].answertype == 'multiple') {
      this.checkMultipleAnsers();
    } else if (this.quizDetails[this.qIndex].answertype == 'dragdrop') {
      this.checkDragDropAnsers(this.quizDetails[this.qIndex]);
    }
    this.qIndex = this.qIndex + 1;
    if (this.qIndex < this.quizDetails.length) {
      this.currQuestion = this.quizDetails[this.qIndex];
      this.currentQuestion = this.quizDetails[this.qIndex].question;
      this.currentAnswers = this.quizDetails[this.qIndex].answers;
    } else {
      this.isQuizCompleted = true;
    }
    this.test = true;
  }

  // logic to handle Multiple Ans

  checkMultipleAnsers() {
    let check = false;
    this.multipleAnswers.forEach((answer) => {
      if (this.quizDetails[this.qIndex].correctAnswer == answer) {
        check = true;
      }
    });
    if (check) {
      this.score++;
    }
  }

  checkDragDropAnsers(quizDetails) {
    if (this.done.length === 1) {
      if (quizDetails.correctAnswer === this.done[0]) {
        this.score++;
        this.done = [];
      }
    }
    console.log(this.score);

  }

  // Logic to handle Drag and Drop

  // logic to handle radio button

  checkCorrectAnswer(i, ans) {
    console.log(i, ans);
    if (ans == this.quizDetails[i].correctAnswer) {
      this.score++;
      console.log(this.score);
      
    }
    if (this.qIndex == this.quizDetails.lenth) {
      console.log('Quiz Completed');
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.test = this.done.length ? false : true;
  }

}

const quizQuestions = [
  {
    question: 'Drag & Drop?',
    answers: [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],
    correctAnswer: 'Fall asleep',
    answertype: 'dragdrop',
  },
    {
      question: 'Reordering lists',
      answers: [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        
      ],
      correctAnswer: 'Fall asleep',
      answertype: 'quiz',
    },
  
  {
    question: 'Which of the following is not JavaScript Data Types?',
    answers: ['Undefined', 'Number', 'Boolen', 'Float'],
    correctAnswer: 'Float',
    answertype: 'single',
  },
  {
    question: 'Which company developed JavaScript?',
    answers: ['Netscape', 'Bell Labs', 'Sun Microsystems ', 'IBM'],
    correctAnswer: 'Bell Labs',
    answertype: 'multiple',
  },
  {
    question: 'Which of the following is not a Java features?',
    answers: [
      'Dynamic',
      'Architecture Neutral',
      'Use of pointers ',
      'Object-oriented',
    ],
    correctAnswer: 'Use of pointers',
    answertype: 'multiple',
  },
  {
    question:
      'In which process, a local variable has the same name as one of the instance variables?',
    answers: [
      'Serialization',
      'Variable Shadowing',
      ' Abstraction ',
      'Multi-threading',
    ],
    correctAnswer: 'Multi-threading',
    answertype: 'multiple',
  },
  {
    question: 'The \u0021 article referred to as a.',
    answers: [
      'Unicode escape sequence',
      'Octal escape',
      'Hexadecimal ',
      'Line feed',
    ],
    correctAnswer: 'Unicode escape sequence',
    answertype: 'multiple',
  },
  {
    question:
      'What is the return type of the hashCode() method in the Object class?',
    answers: ['Object', 'int', 'long ', 'void'],
    correctAnswer: 'int',
    answertype: 'multiple',
  },
  {
    question:
      "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code'?",
    answers: ['javap tool', 'javaw command', 'Javadoc tool ', 'javah command'],
    correctAnswer: 'javaw command',
    answertype: 'multiple',
  },
  {
    question:
      ' In which process, a local variable has the same name as one of the instance variables?',
    answers: [
      'Serialization',
      'Variable Shadowing',
      'Abstraction ',
      'Multi-threading',
    ],
    correctAnswer: 'Multi-threading',
    answertype: 'multiple',
  },
  {
    question:
      'Which of the following is an immediate subclass of the Panel class?',
    answers: ['Applet class', 'Window class', 'Frame class ', 'Dialog class'],
    correctAnswer: 'Applet class',
    answertype: 'multiple',
  },
  {
    question: 'Which of the following is a reserved keyword in Java?',
    answers: ['object', 'strictfp', 'main ', 'system'],
    correctAnswer: 'main',
    answertype: 'multiple',
  },
  {
    question: 'Boolean Question?',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    answertype: 'single',
  },

];
