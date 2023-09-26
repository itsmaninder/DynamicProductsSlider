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
