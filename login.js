function Login4() {
  let ema6 = document.getElementById("user7").value;
  let pass10 = document.getElementById("pass7").value;

  
  if (ema6 || pass10  ) {
    window.location.href='./laflefindex.html'; 
  } else  if (ema6=="" || pass10==""  ) {
    alert("Please fill out all fields");
  }
}