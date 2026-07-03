// EmailJS configuration
// We'll configure this after creating your EmailJS account.

(function () {
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY"
    });
})();

function sendEmail(foodChoice) {

    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
            name: "Antoine",
            answer: "YES",
            food: foodChoice,
            address: "Calle Alcalde José Luis Lassaleta 17",
            date: new Date().toLocaleString()
        }
    )
    .then(() => {
        console.log("Email sent!");
    })
    .catch((err) => {
        console.error(err);
    });

}
