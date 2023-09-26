function displayData(data) {
  const dataVal = data;
  const divWrap = document.getElementById("wrap");

  let count = 0;
  for (let key in dataVal) {
    // if (count >= 12) {
    //   break; // Exit the loop after 8 iterations
    // }
    // count++;
    let value = dataVal[key];
    const itemWrap = document.createElement("div");
    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const itemHead = document.createElement("div");

    itemHead.setAttribute("class", "item-head");
    const itemBody = document.createElement("div");
    itemBody.setAttribute("class", "item-body");
    //image
    let image = document.createElement("img");
    image.setAttribute("src", value.image);
    itemHead.appendChild(image);
    //sub
    let sub = document.createElement("p");
    sub.setAttribute("class", "sub-heading");
    sub.innerHTML =  value.category;
    itemBody.appendChild(sub);
    //name
    let name = document.createElement("h3");
    name.innerHTML = value.title;
    itemBody.appendChild(name);
    //desc
    let desc = document.createElement("p");
    desc.innerHTML = value.description;
    itemBody.appendChild(desc);

    divWrap.appendChild(itemWrap);
    itemWrap.appendChild(item);
    item.appendChild(itemHead);
    item.appendChild(itemBody);
  }
  slider_init();
}

function rg(m, n) {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

function hex(i) {
  return i.toString(16);
}

function randColor() {
  return (
    "#" +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15)) +
    hex(rg(1, 15))
  );
}
const bg = document.getElementById("body");
bg.style.setProperty("--color", randColor());




function slider_init() {
  $("#wrap").slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
//  Create a loader element
const loader = document.createElement("div");
loader.setAttribute("class", "loader");
const body = document.getElementById("body");
body.appendChild(loader);

//  Fetch data from the API
fetch("https://fakestoreapi.com/products/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    //  Remove the loader once data is fetched
    body.removeChild(loader);

    // Continue with displaying the data
    const heading = document.createElement("h2");
    heading.setAttribute("class", "heading");
    heading.innerHTML = "Featured Product Collection";
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "wrap");
    body.appendChild(heading);
    body.appendChild(mainDiv);
    displayData(data);
  })
  .catch((error) => {
    //  Remove the loader in case of an error
    body.removeChild(loader);
    console.error("FETCH ERROR:", error);
  });
