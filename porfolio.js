var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwG22lYSlSOPey4bsvfh8bkkHAOgng7G7U3xRnAPK5YkfO3I82umV0OUKwZzNSCpJDKMQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Form submited successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


//   const scriptURL = 'https://script.google.com/macros/s/AKfycbwG22lYSlSOPey4bsvfh8bkkHAOgng7G7U3xRnAPK5YkfO3I82umV0OUKwZzNSCpJDKMQ/exec';
// const form = document.forms['submit-to-google-sheet'];
// const msg = document.getElementById("msg"); // Fix: Provide a valid ID here

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => {
//       msg.innerHTML = "Form submitted successfully"; // Fix: Corrected spelling
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch(error => {
//       msg.innerHTML = "Error submitting form!";
//       console.error('Error!', error.message);
//     });
// });
