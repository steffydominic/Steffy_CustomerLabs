var cl_product_viewed = setInterval(function () {
  if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
    var eventName = "Product viewed";
    var properties = {
      productProperties: [
        {
          product_name: {
            t: "string",
            v: "Delicious Camisole",
          },
          product_id: {
            t: "number",
            v: "12069003984984",
          },
          product_brand: {
            t: "string",
            v: "Raymonds",
          },
          product_category: {
            t: "string",
            v: "Women's Collection",
          },
          product_price: {
            t: "number",
            v: "2500",
          },
          product_variant: {
            t: "string",
            v: "cotton",
          },
          product_quantity: {
            t: "number",
            v: "2",
          },
          product_color: {
            t: "string",
            v: "blue",
          },
          product_image: {
            t: "string",
            v: "https://cdn.shopify.com/s/files/1/0251/2555/2216/products/2014_10_18_Lana_Look1101_2048x2048.jpg?v=1563886175",
          },
        },
      ],
      customProperties: {
        page_url: {
          t: "string",
          v: "https://customerlabsdemo.myshopify.com/products/s14-dnl-sh-lkadec-beige-blue",
        },
      },
    };
    _cl.trackClick(eventName, properties);
  }
}, 1000);

_cl.trackClick("click", (e) => {
  clearInterval(cl_product_viewed);
});

const f = async () => {
  try {
    let response = await fetch("https://customerlabs.co/api_endpoint"); // Replace 'api_endpoint' with the correct endpoint URL

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    console.log("Fetched Data:", data);

    let postResponse = await fetch("https://customerlabs.co/p3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postReq),
    });

    if (!postResponse.ok) {
      throw new Error(`HTTP error! Status: ${postResponse.status}`);
    }

    let postData = await postResponse.json();

    console.log("Posted Data:", postData);
  } catch (error) {
    console.error("Error:", error);
  }
};

f();
