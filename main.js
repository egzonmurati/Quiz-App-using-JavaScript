let currentQuestion = 0;
let totalScore = 0;
let cQuestion = document.getElementById('currentQuestion');
let totalQuestions = document.getElementById('totalQuestions');
let splashSecreen = document.getElementById('start');
let quizScreen=document.getElementById('quiz-secreen');
let x =0;
let resultSecreen=document.getElementById('resultSecreen');
let timeLeft=document.getElementById('timeLeft');
let score=document.getElementById('score');
let question=document.getElementById('question');
let opt1=document.getElementById('opt1');
let opt2=document.getElementById('opt2');
let opt3=document.getElementById('opt3');
let opt4=document.getElementById('opt4');
let btn=document.getElementsByClassName('btn');
let next=document.getElementById('next');
let startAgain = document.getElementById('startAgain');
let quizQuestions=[
      {
        question:"HTML is a ... ",
        choice1:"Programming Language",
        choice2:"Markup Language",
        choice3:"Rebotic Language",
        choice4:"Machine Language",
        ans:"Markup Language",
      },
         {
        question:"CSS stands for ... ",
        choice1:"Cascading Style Sheet",
        choice2:"Cascading Stylish Sheet",
        choice3:"Case Senstive Sheet",
        choice4:"Cascading Sence Sheet",
        ans:"Cascading Style Sheet",
      },
         {
        question:"Number of Headings available in HTML",
        choice1:"4",
        choice2:"6",
        choice3:"7",
        choice4:"8",
        ans:"6",
      },
         {
        question:"Famous Language use for AI...?",
        choice1:"PHP",
        choice2:"Python",
        choice3:"JavaScript",
        choice4:"Java",
        ans:"Python",
      },
         {
        question:"<ul> Tag is used for....",
        choice1:"Ordred List",
        choice2:"Unordred List",
        choice3:"List Item",
        choice4:"List",
        ans:"Unordred List",
      }
    ];

  function nextQuestion(no){
    Inter(300);
    cQuestion.textContent=" "+(no+1);
    totalQuestions.textContent=" "+quizQuestions.length;

    question.textContent=quizQuestions[no].question;
    opt1.textContent=quizQuestions[no].choice1;
    opt2.textContent=quizQuestions[no].choice2;
    opt3.textContent=quizQuestions[no].choice3;
    opt4.textContent=quizQuestions[no].choice4;
  }

   splashSecreen.addEventListener("click", function(){
          splashSecreen.style.display="none";
          quizScreen.style.display="block";
          nextQuestion(currentQuestion);
    });

    startAgain.addEventListener("click", function(){
      currentQuestion = 0;
      totalScore = 0;
      clearInterval(bar);
      nextQuestion(currentQuestion);
      quizScreen.style.display="block";
      resultSecreen.style.display="none";
  });

   for (var i=0;i<btn.length;i++) {
   	    btn[i].onclick=function(){
        if(this.textContent==quizQuestions[currentQuestion].ans){
            totalScore++;
            if(currentQuestion<4){
            clearInterval(bar);
            currentQuestion++;
            nextQuestion(currentQuestion);
           
            }else{
              endSecreen();
            }
        }
        else{
          if(currentQuestion<4){
            currentQuestion++;
            clearInterval(bar);
            nextQuestion(currentQuestion);
            }else{
              endSecreen();
            }
        }
      }
   }
  
    
    function endSecreen(){
      quizScreen.style.display="none";
      resultSecreen.style.display="block";
      score.textContent=totalScore;
    }

     let bar;


     function Inter(set){
    let statusTime=set;
    timeLeft.style.width=statusTime+"px";
    bar=setInterval(function(){
     if(statusTime==0){
          clearInterval(bar); 
          if(currentQuestion<4){
            currentQuestion++;
            nextQuestion(currentQuestion);
          }
          else{
            endSecreen();
          } 
           
        }
        timeLeft.style.width=statusTime+"px";
        statusTime=statusTime-30;
    },1000); 
   }
 next.onclick=function(){
    if(currentQuestion<4){
    currentQuestion++;
    nextQuestion(currentQuestion);
    }
    else{
      endSecreen();
    }
   
  }

