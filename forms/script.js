function sendMail(params){
    let msg={
        
        from_name:document.getElementById("name").value,
        from_email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    emailjs.send("service_am2rqho", "template_tl5shb7", msg).then((res)=>{
        console.log(alert("message send success."));
        document.getElementById('name')="",
        document.getElementById('email')="",
        document.getElementById('subject')="",
        document.getElementById('message')=""

});
}