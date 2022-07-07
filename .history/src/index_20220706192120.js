/**
 * This file is just a silly example to show everything working in the browser.
 * When you"re ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");
// inti
//formato a fechas
//formato a moneda
const fomatPrice = (price) => {
  return price;
}

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

      // Wrap price & title
      // <div class="text-center md:text-left"><price ><title ></div>
      const priceAndTitle = document.createElement("div");
      priceAndTitle.className = "text-center md:text-left";
      priceAndTitle.appendChild(title);
      priceAndTitle.appendChild(price);

      //wrap img and priceAndtitle
      //<div class="md:flex vg-write rounded-lg p-6">
      const card = document.createElement("div");


      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);

  
    });
    appNode.append(...allItems);
  });
