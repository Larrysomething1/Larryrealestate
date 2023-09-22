function sendMail() {
    var params ={
      name: document.getElementById ("name").value ,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceID ="service_gh2og28"
const templateID ="template_0fx0q4s";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res)
        alert("your response sent successfully;")
    }
)
.catch((err) => console.log(err));
}
