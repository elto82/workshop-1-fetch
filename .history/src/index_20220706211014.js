/**
 * This file is just a silly example to show everything working in the browser.
 * When you"re ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");
appNode.addEventListener("click", (event) => {
  if (event.target.name === "h2") {
    window.alert("hola!");
  }
});
// inti
//formato a fechas
//formato a moneda
const fomatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

//web api
//conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  //procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON -> data ->renderizar infe en browser
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((element) => {
      //create image
      const image = document.createElement("img");
      image.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
      image.src = `${baseUrl}${element.image}`;
      //create title
      const title = document.createElement("h2");
      title.textContent = element.name;
      title.className = "text-lg";

      //create price
      const price = document.createElement("div");
      price.className = "text-gray-600";
      price.textContent = fomatPrice(element.price);

      //Wrap price & title
      const priceAndTitle = document.createElement("div");
      priceAndTitle.className = "text-center md:text-left";
      priceAndTitle.append(title, price);

      //Wrap Img and priceAndTitle
      const card = document.createElement("div");
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      card.append(image, priceAndTitle);

      allItems.push(card);
    });
    appNode.append(...allItems);
  });
