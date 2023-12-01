 // task 1
 function WaterDays()
 {
     let dayPerc = 10;
     let minVol = 10;

     let userVol = +prompt("Enter water volume: ", );
     let daysUntil=0;
     while(true)
     {
         userVol -= (userVol * dayPerc) /100;
         daysUntil++;

         if(userVol<=minVol)
         {
             alert(`Days until emergency situation: ${daysUntil} `);
             break;
         }
     }
 }

 //task 2
 function sayError()
 {
     alert("Some error occurred!")
 }

 //task 3
 function showError()
 {
     function errorOccured(x)
     {
         alert(`Error [${x}] occurred!`);
     }
     errorOccured("Out of memory");
 }

 //task 4
 function createHeaders(N)
 {
     for (let i = 1; i < N+1; i++) 
     {
         document.write("<h2>Header "+[i]+"</h2>");
     }
 }

 //task 5

 function checkPassword(password)
 {
     let isCorrect = false;
     let requiredStr = ["Step", "JavaScript", "Web"];
     for(let i = 0; i < requiredStr.length; i++)
     {
         if(password.includes(requiredStr[i]))
         {
             isCorrect = true;
             break;
         }
     }
     return isCorrect;
 }

 //task 6
 function sign(x)
 {
     if(x<0)
     {
         return -1;
     }
     else if (x==0)
     {
         return 0;
     }
     else
     {
         return 1;
     }
 }

 //task 7
 function ReturnDay(x)
 {
     let isFound = false;
     let week = 
     [
         ["Monday", 1],
         ["Tuesday", 2],
         ["Wednesday", 3],
         ["Thursday", 4],
         ["Friday", 5],
         ["Saturday", 6],
         ["Sunday", 7]
     ]
     for(let i=0; i<week.length;i++)
     {
         if(week[i][1]==x)
         {
             isFound=true;
             return week[i][0];
         }
     }
     if(isFound==false)
     {
         return "No such day exists";
     }
 }

 WaterDays();
 sayError();
 showError();
 createHeaders(5);
 alert(checkPassword("StepHelp101")); 
 alert(sign(-9));
 alert(ReturnDay(1));