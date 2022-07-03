const generateMenuPage = (() => {
    const contentContainer= document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id",",menu");
    menu.setAttribute("data-tab-content", "");

    menu.innerHTML = `
    <div class = "container">
    <div class = "menu">
       <h2 class = "menu-group-heading">
          Burgers
       </h2>
       <div class = "menu-group">
          <div class="menu-items">
             <img class="menu-item-image" src="./images/Breakfast.jpg" alt="Crispy Chicken">
             <div class="menu-item-text">
                <h3 class="menu-item-heading">
                   <span class="menu-item-name">Sausage, Egg, & Cheese Croissan'Wich</span>
                   <span class="menu-item-price"> $3.49</span>
                </h3>
                <p class = "menu-item-description">
                   Our grab-and-go Sausage, Egg & Cheese Croissan’wich is now made with 100% butter for a soft, flaky croissant piled high with savory sizzling sausage, fluffy eggs, and melted American cheese. Served with Hash Browns, your choice of Drink.
                </p>
             </div>
          </div>
          <div class="menu-items">
             <img class="menu-item-image" src="./images/Chicken.jpeg" alt="Crispy Chicken">
             <div class="menu-item-text">
                <h3 class="menu-item-heading">
                   <span class="menu-item-name">Crispy Chicken Sandwich</span>
                   <span class="menu-item-price">$6.99</span>
                </h3>
                <p class = "menu-item-description">
                   Our Crispy Sandwich is made with 100% white meat chicken filet, seasoned and breaded and carefully layered with fresh lettuce, ripe tomato, and creamy mayonnaise on a potato bun.
                </p>
             </div>
          </div>
          <div class="menu-items">
             <img class="menu-item-image" src="./images/Bacon.jpg" alt="Crispy Chicken">
             <div class="menu-item-text">
                <h3 class="menu-item-heading">
                   <span class="menu-item-name">Bacon King</span>
                   <span class="menu-item-price">$6.49</span>
                </h3>
                <p class = "menu-item-description">
                   Our Bacon King Sandwich features two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise all on a soft sesame seed bun.
                </p>
             </div>
          </div>
          <div class="menu-items">
             <img class="menu-item-image" src="./images/RodeoKing.png" alt="Crispy Chicken">
             <div class="menu-item-text">
                <h3 class="menu-item-heading">
                   <span class="menu-item-name">Rodeo King</span>
                   <span class="menu-item-price">$6.00</span>
                </h3>
                <p class = "menu-item-description">
                   Our new Rodeo Burger features a savory flame-grilled beef patty topped with sweet and smoky BBQ sauce and crispy, golden onion rings served on a toasted, sesame seed bun.
                </p>
             </div>
          </div>
       </div>
       <h2 class = "menu-group-heading">
           Sides
        </h2>
        <div class = "menu-group">
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Fries2.jpg" alt="Crispy Chicken">
               <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                     <span class="menu-item-name">Classic Fries</span>
                     <span class="menu-item-price">$1.49</span>
                  </h3>
                  <p class = "menu-item-description">
                     Piping hot and perfectly salted.
                  </p>
              </div>
           </div>
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Nuggets.jpeg" alt="Crispy Chicken">
               <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                     <span class="menu-item-name">Chicken Nuggets 10pz </span>
                     <span class="menu-item-price">5.99</span>
                  </h3>
                  <p class = "menu-item-description">
                      Made with white meat, our bite-sized Chicken Nuggets are tender and juicy on the inside and crispy on the outside
              </div>
           </div>
           <div class="menu-items">
               <img class="menu-item-image" src="./images/OnionRing.jpg" alt="Crispy Chicken">
              <div class="menu-item-text">
               <h3 class="menu-item-heading">
                   <span class="menu-item-name">Onion Rings</span>
                   <span class="menu-item-price">$1.79</span>
                </h3>
                <p class = "menu-item-description">
                   Crisp, fried, a bit sweet
                </p>
              </div>
           </div>
           <div class="menu-items">
              <img class="menu-item-image" src="./images/Sticks.jpeg" alt="Crispy Chicken">
              <div class="menu-item-text">
                 <h3 class="menu-item-heading">
                    <span class="menu-item-name">4pz Mozzarella Sticks</span>
                    <span class="menu-item-price">$1.49</span>
                 </h3>
                 <p class = "menu-item-description">
                   Try our delicious Mozzarella cheese sticks. Served with marinara dipping sauce, Mozzarella sticks are always a great snack
                 </p>
              </div>
           </div>
        </div>
        <h2 class = "menu-group-heading">
           Dessert
        </h2>
        <div class = "menu-group">
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Cake.jpg" alt="Crispy Chicken">
               <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                     <span class="menu-item-name">Hershey's Pie</span>
                     <span class="menu-item-price">$1.69</span>
                  </h3>
                  <p class = "menu-item-description">
                   One part crunchy chocolate crust and one part chocolate crème filling, garnished with a delicious topping and real HERSHEYS® Chocolate Chips.
                  </p>
              </div>
           </div>
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Cone.jpg" alt="Crispy Chicken">
               <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                     <span class="menu-item-name">Soft Serve Cone</span>
                     <span class="menu-item-price">1.00</span>
                  </h3>
                  <p class = "menu-item-description">
                   Creamy, and velvety Vanilla Soft Serve, served in a cone.
              </div>
           </div>
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Milk.jpg" alt="Crispy Chicken">
              <div class="menu-item-text">
               <h3 class="menu-item-heading">
                   <span class="menu-item-name">Vanilla Shake</span>
                   <span class="menu-item-price">$3.59</span>
                </h3>
                <p class = "menu-item-description">
                   Cool down with our creamy Hand Spun Shake. Velvety vanilla soft serve and your choice of flavor are blended to perfection just for you.
                </p>
              </div>
           </div>
           <div class="menu-items">
              <img class="menu-item-image" src="./images/Chocolate.jpeg" alt="Crispy Chicken">
              <div class="menu-item-text">
                 <h3 class="menu-item-heading">
                    <span class="menu-item-name">Chocolate Shake</span>
                    <span class="menu-item-price">$3.59</span>
                 </h3>
                 <p class = "menu-item-description">
                   Cool down with our creamy Hand Spun Shake. Velvety chocolate soft serve and your choice of flavor are blended to perfection just for you.
                 </p>
              </div>
           </div>
        </div>
        <h2 class = "menu-group-heading">
           Drinks
        </h2>
        <div class = "menu-group">
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Coke.jpg" alt="Crispy Chicken">
               <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                     <span class="menu-item-name">Coca-Cola</span>
                     <span class="menu-item-price">$2.39</span>
                  </h3>
                  <p class = "menu-item-description">
                   Carbonated soft drink flavored with vanilla, cinnamon, citrus oils and other flavorings.
                  </p>
              </div>
           </div>
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Sprite.jpg" alt="Crispy Chicken">
               <div class="menu-item-text">
                  <h3 class="menu-item-heading">
                     <span class="menu-item-name">Sprite</span>
                     <span class="menu-item-price">1.59</span>
                  </h3>
                  <p class = "menu-item-description">
                   Crisp, refreshing and clean-tasting
              </div>
           </div>
           <div class="menu-items">
               <img class="menu-item-image" src="./images/Lemonade.jpg" alt="Crispy Chicken">
              <div class="menu-item-text">
               <h3 class="menu-item-heading">
                   <span class="menu-item-name">Lemonade</span>
                   <span class="menu-item-price">$2.09</span>
                </h3>
                <p class = "menu-item-description">
                  Ice cold hand picked lemons with sugar
                </p>
              </div>
           </div>
           <div class="menu-items">
              <img class="menu-item-image" src="./images/PL.jpg" alt="Crispy Chicken">
              <div class="menu-item-text">
                 <h3 class="menu-item-heading">
                    <span class="menu-item-name">Pink Lemonade</span>
                    <span class="menu-item-price">$2.69</span>
                 </h3>
                 <p class = "menu-item-description">
                   Mixed with raspberries, strawberries, grapefruit that give a more natural pink color and a sweeter and fruitier flavor.
                 </p>
              </div>
   </div>
    </div>
    </div>
 </div>`
   contentContainer.appendChild(menu);
})();

export { generateMenuPage }