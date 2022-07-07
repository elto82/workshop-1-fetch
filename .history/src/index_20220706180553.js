/**
 * This file is just a silly example to show everything working in the browser.
 * When you"re ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
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
      image.src = element.image;
      //create title
      const title = document.createElement("h2");
      title.textContent = element.name
      //create price
      const price = document.createElement("div");
      price.textContent = element.price;

      const container = document.createElement("div");
      container.append(image,title,price);

      allItems.push(container);
    });
    document.body.append(...allItems);
  });
