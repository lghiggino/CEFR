console.log("analytics.js is on");
let date = new Date()
let time = `${date.getHours()}:${date.getMinutes()}`
let day = `${date.getDay()}`

//click on whatsapp
const whatsappButtons = document.querySelectorAll(".whatsapp-cta")
whatsappButtons.forEach( (button, index) => {
  button.addEventListener("click", () => {
    analytics.logEvent("whatsapp_click", {"buttonIndex": index})
  })
})

//click to direct phone - works?
const directPhone = document.querySelector(".direct-phone")
directPhone.addEventListener("click", () => {
  analytics.logEvent("phone_click");
})

//click to send email - works?
const directEmail = document.querySelector(".direct-email")
directEmail.addEventListener("click", () => {
  analytics.logEvent("email_click");
})


//submit on the form
const formPush = document.querySelector(".form-push");
formPush.addEventListener("click", () => {
  analytics.logEvent('generate_lead');
})


//INITIALIZING THE ENGLISH AND FRANCE BUTTONS
const englishButton = document.querySelector(".english-cta");
const englishSection = document.querySelector("#english");
const francaisButton = document.querySelector(".francais-cta");
const francaisSection = document.querySelector("#francais");

englishButton.addEventListener("click", () => {
  console.log("Hello");
  analytics.logEvent("english_button_click");
  englishSection.classList.toggle("hidden");
})


francaisButton.addEventListener("click", () => {
  console.log("Bonjour");
  analytics.logEvent("francais_button_click");
  francaisSection.classList.toggle("hidden");
})
