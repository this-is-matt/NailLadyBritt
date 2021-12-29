let container = document.querySelector("main.gContainer");

for (let i = 1; i < 16; i++) {
  let card = document.createElement("div");
  card.setAttribute("class", "gCard");

  let img = document.createElement("img");
  img.setAttribute("src", `images/Gallery/${i}.jpg`);
  img.setAttribute("lazyLoading","lazy");
  img.setAttribute("alt", `nail image number${i}`)
  card.appendChild(img);
  document.querySelector(".gContainer").appendChild(card);
}


