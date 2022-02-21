//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
        spans[index].style.display ='';
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}

//why can i not declare "let tbTexttofind and then tbTextToFind = document.getElementById('tbTextToFind'); "

function findInList() {
    let numb1 = new Array();
    let tbTextToFind = document.getElementById('tbTextToFind');
    let output = tbTextToFind.value.toUpperCase(); 
    let spans = document.getElementsByTagName('span');
    let spanslist = Array.from(spans); 
    console.log(spanslist);
        for (i = 0; i < spans.length; i++) {
            a= spans[i].textContent ; 
            b = numb1.push(spans[i].textContent) ;

            if (a.indexOf(output) > -1) {
                spans[i].classList.add('spanHighlighted'); 
            } 
            else if(output =="") {
                spans[i].style.display = '';
            }
            else { 
                spans[i].style.display = '';
            }

        }   
    console.log(output);
    if (numb1.includes(output) == false) {
        alert('The number is not in the list')
    };
    
    
    //find In List
 }

function findInGrid() {
    let numb = new Array();
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    let output = tbNumberToFind.value ; 
    let spans = document.getElementsByTagName('span');
    for (i = 0; i < spans.length; i++) {
        a= spans[i].textContent ; 
        console.log(a);
        b = numb.push(spans[i].textContent) ;


        if (a.indexOf(output) > -1 )  {
            spans[i].classList.add('spanHighlighted'); 
        } 
        else if(output == '') {
            spans[i].style.display = '';
        }
        else { 

            spans[i].style.display = '';
        }

    } 
    console.log(output);
    if (numb.includes(output) == false) {
        alert('The number is not in the list');
    }
    else if (output == '') {
        alert('Nothing was submmited');
    }
    
 
  
}


    


function sortIt() {
  
    let spans = document.getElementsByTagName('span');
    let boxes = document.querySelectorAll('.column');
    let divs = document.getElementById('row0');

    console.log(boxes);
    let boxeslist = Array.from(boxes); 
    boxeslist.sort(function(a,b) { 
        return a.textContent - b.textContent ; 

    }) ; 
    divs.replaceChildren(...boxeslist);
    
    console.log(divs);






    
    /*
    let divs = document.getElementById('row0')
    let spans = document.getElementsByTagName('span');
    let boxes = document.querySelectorAll('.column')
    for (i=0; boxes < boxes.length -1; i++) {
        if (boxes[i].textContent < boxes[i+1].textContent) {
            boxes[i].append(boxes) ;
        }
    }
    console.log(boxes)
   
    

    
    console.log(spans[0].textContent);
    let spanslist = Array.from(spans)
    spanslist.sort(function(a,b) {
        return a.textContent - b.textContent ; 
    } ); 
    console.log(spanslist.parentNode);
       //need jquery
    var sorted = $('.column').sort(function(a,b) {
        return a.textContent - b.textContent; 
    }); 
    $('row0').html(sorted); 

    */

    
}

function errorMessage() { 

}

