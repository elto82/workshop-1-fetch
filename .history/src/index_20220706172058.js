/**
 * This file is just a silly example to show everything working in the browser.
 * When you"re ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
//web api
//conectarnos al server
window
  .fetch(url)
  //procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON -> data ->renderizar infe en browser
  .then((responseJson) => {
    responseJson.data.array.forEach((element) => {
      //create image
      const image = document.createElement("img");
      document.body.appendChild("image");
      //create title
      const title = document.createElement("h2");
      document.body.appendChild("title");
      //create price
      const price = document.createElement("div");
      document.body.appendChild("price");
    });
  });
