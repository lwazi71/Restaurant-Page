const contactPage = document.createElement("div");

const contactPageLoad = (() => {
    const contentContainer = document.querySelector("#content");
    contactPage.setAttribute("id","contact");
    contactPage.setAttribute("data-tab-content", "");
    contactPage.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Page</title>
          <link rel = "stylesheet" href="styles.css">
       </head>
       <body class = "thrid">
          <div class="contactUS">
             <div class="title">
                <h2>Get in touch</h2>
             </div>
             <div class = "box">
                <!--Form-->
                <div class = "contact form">
                   <h3>Send us a Message!</h3>
                   <form>
                      <div class = "formBox">
                         <div class = "row50">
                            <div class = "inputBox">
                               <span>First Name</span>
                               <input type = "text" placeholder="Lwazi">
                            </div>
                            <div class = "inputBox">
                               <span>Last Name</span>
                               <input type = "text" placeholder="Harden">
                            </div>
                         </div>
                         <div class = "row50">
                            <div class = "inputBox">
                               <span>Email</span>
                               <input type = "text" placeholder="lwazim1@gmail.com">
                            </div>
                            <div class = "inputBox">
                               <span>Mobile</span>
                               <input type = "text" placeholder="201-867-5309">
                            </div>
                         </div>
                         <div class = "row50">
                            <div class = "inputBox">
                               <span>Email</span>
                               <input type = "text" placeholder="lwazim1@gmail.com">
                            </div>
                         </div>
                         <div class = "row100">
                            <div class = "inputBox">
                               <span>Message</span>
                               <textarea placeholder="Write your message..."></textarea>
                            </div>
                         </div>
                         <div class = "row100">
                            <div class = "inputBox">
                               <input type = "submit" value = "Send">
                            </div>
                         </div>
                      </div>
                   </form>
                </div>
                <!--info Box-->
                <div class = "contact info">
                   <h3>Contact Info</h3>
                   <div class = "infoBox">
                      <div>
                         <span>
                            <ion-icon name="location"></ion-icon>
                         </span>
                         <p> Kistap County, Bremerton <br> Washington </p>
                      </div>
                      <div>
                         <span>
                            <ion-icon name="mail"></ion-icon>
                         </span>
                         <a href = "malito:loremipsum@gmail.com">BremertonBurgers@gmail.com</a>
                      </div>
                      <div>
                         <span>
                            <ion-icon name="call"></ion-icon>
                         </span>
                         <a href = "tel:+16034134124">+1 603-413-4124</a>
                      </div>
                      <!--Social Media Links-->
                      <ul class = "sci">
                         <li>
                            <a href = "#">
                               <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                         </li>
                         <li>
                            <a href = "#">
                               <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                         </li>
                         <li>
                            <a href = "#">
                               <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                         </li>
                         <li>
                            <a href = "#">
                               <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                         </li>
                      </ul>
                   </div>
                </div>
                <!--Map-->
                <div class = "contact map">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43075.625752914246!2d-122.71899485119029!3d47.56337919946291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1658165793856!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                   </iframe>
                </div>
             </div>
          </div
       </body>
    </html>
        `
    contentContainer.appendChild(contactPage);
})();

export { contactPageLoad, contactPage}