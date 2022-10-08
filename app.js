//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
  
    //validate input
    if (billAmt === "" || serviceQual === "") {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "inline";
    }
  
    //Calculate tip
    var amount=(billAmt*1)/numOfPeople;
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    amount = Math.round(amount);
    total = Math.round(total * 1) / 100;
    //next line allows us to always have two digits after decimal point
    amount=amount.toFixed(2)
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("amt").innerHTML = amount;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  document.getElementById("btn2").onclick = function(){
    
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
  };
