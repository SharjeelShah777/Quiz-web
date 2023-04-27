var questions = [
    {
      id: 1,
      question: "  What does HTML stand for?",
      answer: " Hyper Text Markup Language",
      options: [
        " Hyper Text Module Language",
        "Hyper Text Markup Language",
        "Hyper Text Machine Language",
        "Hyper Test Markup Language"

      ]
    },
    {
      id: 2,
      question: " How you can open the link in a new window?",
      answer: "target='_blank'",
      options: [
        "target='_tab'",
        "target='_new'",
        "target='_window'",
        "target='_blank'"
      ]
    },
    {
      id: 3,
      question: "Which HTML attribute specifies an inline style sheet?",
      answer: "style",
      options: [
        "style",
        "inline",
        "class",
        "css"
      ]
    },
    {
      id: 4,
      question: "Which HTML tag specifies an internal style sheet?",
      answer: "link",
      options: [
        "script",
        "import",
        "link",
        "cs"
      ]
    },
    {
      id: 5,
      question: "Which is the correct way to write a comment in JavaScript?",
      answer: "// ....",
      options: [
        " {# ... #}",
        "// ....",
        "\\ ...",
        "None Of them."
      ]
    },
    {
      id: 6,
      question: "CSS stand for?",
      answer: " cascading style sheet",
      options: [
        " cascading style sheet",
        " custom style sheet",
        " cascaded style sheet",
        " caretaking style sheet"
      ]
    },
    {
      id: 7,
      question: "Inside which HTML element do we put the JavaScript?",
      answer: " script",
      options: [
        "link",
        "script",
        "src",
        "None of the above"
      ]
    },
    {
      id: 8,
      question: "How do you write 'Hello World' in an alert box?",
      answer: "alert('Hello World');",
      options: [
        "alertBox('Hello World');",
        "alert('Hello World');",
        "modal('Hello World');",
        "msgBox('Hello World');"
      ]
    },
    {
      id: 9,
      question: "Which is the correct CSS syntax?",
      answer: "body {color:black;}",
      options: [
        "body {color:black;}",
        "{body color:black;}",
        "body = color:black;",
        "body = {color:black;}"
      ]
    },
    {
      id: 10,
      question: "How do you write anything into the web page in JavaScript?",
      answer: "document.write(...)",
      options: [
        "window.write(...)",
        "document.write(...)",
        "window.page.write(...)",
        "document.page.write(...)"
      ]
    }
  ];

 var question_count = 0;

  
  window.onload = function() {
    show(question_count);
  
  };
  function submitForm(e){
    e.preventDefault()
    // var nameInput = document.getElementById("input").value
    var nameInput = document.querySelectorAll(".input").value
    var userName = document.getElementById("user-name")
    
    if(nameInput == ""){
      // alert("Enter your name!")
    }else {
      // userName.innerHTML = nameInput
    }
   
    var main1 = document.getElementById("main1")
    main1.setAttribute("class" , "hide")
    var main2 = document.getElementById("main2")
    main2.classList.remove("hide")
    var name = document.getElementById("name")
    var set = name.innerHTML = nameInput;
    interval = setInterval(timer, 10)
    var name = document.getElementById("user-name2")
    name.innerHTML = nameInput;
// }
}

var points = 0
  function next() {
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 0)
     {
      clearInterval(interval);
    
      if (points <= 30){
        var main2 = document.getElementById("main2")
        main2.setAttribute("class" , "hide")
        var main4 = document.getElementById("main4")
        main4.classList.remove("hide")
        var userPoint = document.getElementById("point2")
        userPoint.innerHTML = points
        var time = document.getElementById("time-taken2")
        time.innerHTML = min +" minutes " + sec + " seconds "
        
      }else {
    
      var main2 = document.getElementById("main2")
      main2.setAttribute("class" , "hide")
      var main3 = document.getElementById("main3")
      main3.classList.remove("hide")
        // user marks
        var userPoint = document.getElementById("point")
       userPoint.innerHTML = points
       var time = document.getElementById("time-taken")
       time.innerHTML = min +" minutes " + sec + " seconds "

      }
      console.log(points)

    }
    var user_answer = document.querySelector("li.options.active")
    // console.log(user_answer)
    user_answer = user_answer.innerHTML
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10
    }
    
  
    question_count++;
    console.log(points)
    show(question_count);
  }
 

  // Quiz
  function show(count) {
    var question = document.getElementById("quiz-question");
    var [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="options">${first}</li>
    <li class="options">${second}</li>
    <li class="options">${third}</li>
    <li class="options">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.options");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }


// //   TIMER
var sec = 0;
var min = 0;  
var msec = 0;
var minspan = document.getElementById("min")
var secspan = document.getElementById("sec")
var interval;
var formatSec = sec <10 ? `0${sec}`: `${sec}` 
var formatMin = min < 10 ? `0${min}`: `${min}`

function timer(){
    msec++
    if (msec >= 100){
        sec++
        msec = 0 
    }else if (sec >=60){
        min++
        sec = 0 
    }
    var formatSec = sec <10 ? `0${sec}`: `${sec}` 
    var formatMin = min < 10 ? `0${min}`: `${min}`
    document.querySelector("span#min").innerHTML = `${formatMin}`;
    document.querySelector("span#sec").innerHTML = ` ${formatSec}`}