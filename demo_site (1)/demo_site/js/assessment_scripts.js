// f() // Call the function f() with the city name when the button is clicked

var cl_product_viewed = setInterval(function () {
  if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
    var eventName = "Product clicked";
    var properties = {
      productProperties: [
        {
          product_name: {
            t: "string",
            v: "Men’s Shirt",
          },
          product_price: {
            t: "number",
            v: "5000",
          },
          product_quantity: {
            t: "number",
            v: "2",
          },
          product_colour: {
            t: "string",
            v: "blue",
          },
        },
      ],
    };
    _cl.trackClick(eventName, properties);
    clearInterval(cl_product_viewed);
  }
}, 1000);
let btnblack = document.getElementsByClassName("btn-black");
btnblack.addEventListener("click", () => {
  f(cl.trackClick(eventName, properties));
  // _cl.trackClick(eventName, properties);
})
  const f = async () => {
    try {
      let a = await fetch(cl_product_viewed);
      if (!a.ok) {
        throw new Error(`HTTP error status :${a.status}`);
      }
      let b = await a.json();
      console.log(b);

      let res = await fetch(cl_product_viewed, {
        //     method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postReq),
      });
      if (!res.ok) {
        console.log(`Http status error ${res.status}`);
      }
      let data = await res.json();
      console.log(data);
    } catch {
      (error) => {
        console.log("errror", error);
      };
    }
  };
