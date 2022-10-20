function compute() {
    var principal = document.getElementById("principal").value;
    
    if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return false;
    }
  
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
  
    result.innerHTML = `If you deposit <strong>${principal}</strong>,<br>
      at an interest rate of <strong>${rate}%</strong>.<br>
      You will receive an amount of <strong>${interest}</strong>,<br>
      in the year <strong>${year}</strong>`;
  }
  
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
  }
  