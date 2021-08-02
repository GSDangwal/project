let screen = document.getElementById("output");
let buttons = document.querySelectorAll("button");
let screenText = "";
for(item of buttons){
    item.addEventListener("click", (e)=>{
        let buttonText = e.target.innerText;
    //    console.log(buttonText);
        var lastChar;
        if(buttonText=="+"){
            lastChar = screenText.substr(screenText.length - 1);
            if(lastChar == "+" || lastChar == "-" || lastChar == "%" || lastChar == "*" || lastChar == "/"){
                screenText = screenText.substring(0,screenText.length-1);
                screenText += buttonText;
                screen.value = screenText; 
            }
            else{
                screenText += buttonText;
                screen.value = screenText;
            }
            
        }
        else if(buttonText=="-"){
            lastChar = screenText.substr(screenText.length - 1);
            if(lastChar == "+" || lastChar == "-" || lastChar == "%" || lastChar == "*" || lastChar == "/"){
                screenText = screenText.substring(0,screenText.length-1);
                screenText += buttonText;
                screen.value = screenText; 
            }
            else{
                screenText += buttonText;
                screen.value = screenText;
            }
            
        }
        else if(buttonText=="x"){
            lastChar = screenText.substr(screenText.length - 1);
            if(lastChar == "+" || lastChar == "-" || lastChar == "%" || lastChar == "*" || lastChar == "/"){
                screenText = screenText.substring(0,screenText.length-1);
                buttonText = "*";
                screenText += buttonText;
                screen.value = screenText; 
            }
            else{
                buttonText = "*";
                screenText += buttonText;
                screen.value = screenText;
            }
            
        }
        else if(buttonText=="Mod"){
            lastChar = screenText.substr(screenText.length - 1);
            if(lastChar == "+" || lastChar == "-" || lastChar == "%" || lastChar == "*" || lastChar == "/"){
                screenText = screenText.substring(0,screenText.length-1);
                buttonText = "%";
                screenText += buttonText;
                screen.value = screenText; 
            }
            else{
                buttonText = "%";
                screenText += buttonText;
                screen.value = screenText;
            }
            
        }
        else if(buttonText=="÷"){
            lastChar = screenText.substr(screenText.length - 1);
            if(lastChar == "+" || lastChar == "-" || lastChar == "%" || lastChar == "*" || lastChar == "/"){
                screenText = screenText.substring(0,screenText.length-1);
                buttonText = "/";
                screenText += buttonText;
                screen.value = screenText; 
            }
            else{
                buttonText = "/";
                screenText += buttonText;
                screen.value = screenText;
            }
            
        }
    
       else if(buttonText == "AC"){
           screenText = "";
           screen.value =screenText;
       }
       else if(buttonText=="CE"){
            screenText = screenText.substring(0,screenText.length-1);
            screen.value = screenText;
       }
       else if(buttonText== "="){
        screen.value= eval(screenText);
       }
       else if(buttonText == "."){
           var last = screenText.substr(screenText.length-1);
           if(last != "."){
               screenText+= buttonText;
               screen.value=screenText;
           }
       }
       else{
           screenText+= buttonText;
           screen.value=screenText;
       }
    })
}


