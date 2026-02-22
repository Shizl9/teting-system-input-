let userEmail = document.querySelector("#useremail")
let userPass = document.querySelector("#userpass")
let logbtn = document.querySelector("#logbtn")
let errMess = document.querySelector("#errMess")
let succMess = document.querySelector("#succMess")
let form = document.querySelector("form")
let QuestionsNum = document.querySelector("#questionsNum")
let strTestBtn = document.querySelector("#strTestBtn")
let testScreen = document.querySelector("#testScreen")
let testSection = document.querySelector("#test")
let logSection = document.querySelector("#logform");
let cartona = ''
let logoutBtn = document.querySelector("#logoutBtn");
// local storage 
// localStorage.setItem("isLoggedIn","true");



if(localStorage.getItem("isLoggedIn") === "true"){
    logSection.classList.add("d-none");
    testSection.classList.remove("d-none");
}

logbtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(userEmail.value, userPass.value);



    if (userEmail.value != "aa@" || userPass.value != "1234") {
         localStorage.setItem("isLoggedIn", "true");
        errMess.classList.replace("d-none", "d-block")
    }
    else {
        errMess.classList.replace("d-block", "d-none")

        succMess.classList.replace("d-none", "d-block")

        localStorage.setItem("isLoggedIn","true")
        setTimeout(GoToTestPage,
            1000
        )
    }


})

function GoToTestPage() {
   testSection.classList.replace("d-none","d-block")
   form.classList.add("d-none")
}

strTestBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let num = QuestionsNum.value
    cartona = ""  
    let answers = [] 
    for (let i = 1; i <= num; i++) {
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)
        answers.push(num1 + num2) 
        let opertation = "+"
        cartona += `${i})   <label>  ${num1} + ${num2} = </label>
        <input type="number" class='form-control answer-input'>    
    `
    }
     cartona += `
        <button id="submitBtn" class="btn btn-success mt-3">Submit</button>
        <h3 id="score" class="mt-3"></h3>
    `;
 testScreen.innerHTML = cartona;  // توليد الأسئلة + زر Submit

let submitBtn = document.querySelector("#submitBtn"); // الزر الجديد
submitBtn.addEventListener("click", function(){
    let score = 0;
    let inputs = document.querySelectorAll(".answer-input");

    for(let i = 0; i < inputs.length; i++){
        if(Number(inputs[i].value) === answers[i]){
            score++;
        }
    }

    document.querySelector("#score").innerText = "Your Score: " + score + "/" + answers.length;
});

});
logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("isLoggedIn");
    testSection.classList.add("d-none");
    logSection.classList.remove("d-none");
});