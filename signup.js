function validateLogin() {
  const username11 = document.getElementById('username11').value;
  const email11 = document.getElementById('email11').value;
  const password11 = document.getElementById('password11').value;
  
  if (username11 || email11 || password11 ) {
      window.location.href = "./laflefindex.html"; 
  } else  if (username11=="" || email11=="" || password11=="" ) {
    alert("Please fill out all fields");
  }
}













// function open() {
//   alert("hi");
//   let usernamebut = document.getElementById("uName11").value;
//   let emailbut = document.getElementById("ema11").value;
//   let paswordbut = document.getElementById("passw11").value;

  
//   if (usernamebut=="" || emailbut=="" || paswordbut=="" ) {
//     alert("aaaaaaaa")
//     // alert("Please fill out all fields");
//   } 
// //   else {
// //       window.location.href = 'laflefindex.html'; 
// //   }
// }
