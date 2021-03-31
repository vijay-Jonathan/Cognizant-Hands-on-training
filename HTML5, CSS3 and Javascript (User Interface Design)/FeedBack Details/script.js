var arrEL= [];
function addFeedback(){
 //Fill the required logic 
//  var arrEL= [];
 arrEL.push(document.getElementById("feedback").value);
 document.getElementById("result").innerHTML = "<h2>Feedback Details</h2><h3>Successfully Added Feedback Details!</h3>";
     document.getElementById("feedback").value = "";

}

function displayFeedback(){
    var i = 1;
      document.getElementById("feedback").value = "";
     document.getElementById("result").innerHTML= "<h2>Feedback Details</h2>"
    for (var j in arrEL){
        
   

     document.getElementById("result").innerHTML +="Feedback " + i++ + "<br>"+ "<h3>"+arrEL[j]+"</h3>";
        
    }
    arrEL=[];
}