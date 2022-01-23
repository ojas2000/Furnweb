document.querySelector(".form-cp").addEventListener("submit",submitForm);
function submitForm()
{
    var name = document.getElementById("namecp").value
    var email = document.getElementById("emailcp").value
    var message = document.getElementById("messagecp").value

    console.log("submit" + name + email+ message)

    Email.send({
        Host : "smtp.gmail.com",
        Username : "furnitureshop666@gmail.com",
        Password : "RnOj@1918",
        To : 'furnitureshop666@gmail.com',
        From : "furnitureshop666@gmail.com",
        Subject : "Email from" + name + " For Custom Products",
        Body : "Name:" + name + "<br> Email:" + Email + "<br> Message:" + message
    }).then(
      message => alert(message)
    );
}