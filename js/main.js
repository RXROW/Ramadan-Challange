let timer = document.getElementById("timer");
let next=document.getElementById("next");
let text=document.getElementById("text");
let first=document.getElementById('first');
let second=document.getElementById('second');
let third=document.getElementById('third');
let btn=document.getElementById('btn');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let container=document.getElementById('app');
let Name =document.querySelectorAll('#Name');
let sum=0,reset=1,bool=false;
let img=document.querySelectorAll('img');
text.style.opacity=0;


// Array Of Question
let question=['Q1:Describe the purpose of the img tag in HTML?','Q2:Explain the function of the label tag in HTML?','Q3:What are the types of lists that can be created using HTML tags?','Q4: Explain the difference between margin and padding in CSS?','Q5:What is the purpose of the z-index property in CSS?','Q6:What is a pseudo-class in CSS, and give an example?','Q7:What is the purpose of the CSS box-shadow property?','Q8:Describe the difference between CSS grid and CSS flexbox?','Q9 Describe the difference between == and === in JavaScript?','Q10:Describe the difference between let, const, and var in JavaScript?',
'Q1:Describe the role of the title tag in HTML.',"Q2:Describe the purpose of the input tag in HTML?","Q3:What is the significance of the span tag in HTML?","Q4:.Describe the difference between absolute and relative positioning in CSS?","Q5:How do you include CSS animations in your web pages?","Q6:Given a six type of display?","Q7: How do you create a function in JavaScript?","Q8:Explain the purpose of the for loop in JavaScript?","Q9:What are the basic data types in JavaScript?","Q10:What is The Diffrent Between JS && Java ?"
,"Q1:What is the purpose of the HTML alt attribute, and why is it important for accessibility?","Q2:What is Two Component in html","Q3:How Can i make responsive ?","Q3:What is THe diffrent Between b and p?","Q4:What is THe Diffrent Between Position Fixed and Sticky?","Q5:What is The Diffrent Between Display BLock && Display inline?","Q6:How Can i make Selletor For Class , id ,element?","Q7:What is alert do in js?","Q8:What is The diffrent between (do while) && (while) in js? ","Q9: What is the purpose of the this keyword in JavaScript? " ,"Q10:How Can i access in input value in js?"

];

// function  start(){
//     timer.innerHTML=wait;
//     wait--;

//     if(wait<0){
//         clearInterval(seconds);
//     }
// }
let ans1=0,ans2=0;


next.onclick=function(){
    let wait=60;
    bool=true;

    text.style.opacity=1;
    text.innerHTML=question[sum];

    // counter Qustion
    sum++;
    if(sum<=20){
        // name and img for first player
        Name[0].innerHTML='Abdelrahman Elfiky';
        img[0].src="/imges/Abdelrahman Elfiky.png";

        // name and img for Second player

        Name[1].innerHTML='Ahmed Ramdan';
        img[1].src='/imges/Ahmed Ramdan.png'
        
       
    }
    else if(sum>20){
        // name and img for Third player
        
        Name[0].innerHTML='Ghozlan Mahmoud';
        img[0].src='/imges/Ghozlan Mahmoud.png'
        // name and img for Fourth player
        Name[1].innerHTML='Mohamed ALROBA';
        img[1].src='/imges/mohamed adel.jpeg'

   
    }
    
    
    if(sum>40){
        text.innerHTML="Finish Questions"
    }
    const test=setInterval(() => {
        timer.innerHTML=wait;
        wait--;
        if(wait<0||reset!=sum){
            wait=60;
            reset=sum;
            clearInterval(test)
        }
    }, 1000);
    
    if(sum===21){
        btn.innerHTML=0;
        btn2.innerHTML=0;
        ans1=0,ans2=0;
    }
}
first.onclick=()=>{
    if(bool){
        ans1+=10;
        btn.innerHTML=ans1;
    }
}
second.onclick=()=>{
    if(bool){
        ans2+=10;
        btn2.innerHTML=ans2;
    }
}




