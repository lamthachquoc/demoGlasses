let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "img/g5.jpg",
    virtualImg: "img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

const renderGlasses = () => {
  let contentHTML = "";
  for (let i = 0; i < dataGlasses.length; i++) {
    let n = dataGlasses[i];

    let contentGlasses = `<div>
                           <button type="button" onclick="showGlasses('${n.id}')" style="border:none"><img width="150px" height="100px"  src="${n.src}"/></button>
                            </div>`;
    contentHTML = contentGlasses + contentHTML;
  }
  document.getElementById("vglassesList").innerHTML = contentHTML;
};
renderGlasses();

let showGlasses = (id) => {
  let z = "";
  let e = "";
  for (let index = 0; index < dataGlasses.length; index++) {
    let item = dataGlasses[index];
    if (id == item.id) {
      e = `<img id="conImg" src="${item.virtualImg}"/>`;
      z = `<div  id="descrip">
        <p>Name: ${item.name}</p>
        <p>Color: ${item.color}</p>
        <p>Price: ${item.price}</p>
        <p>Description: ${item.description}</p>
        </div>`;
    }
  }
  document.getElementById("glassesInfo").innerHTML = z;
  document.getElementById("glassesInfo").style.display = "block";
  document.getElementById("glassesShow").innerHTML = e;
};

window.showGlasses = showGlasses;
const removeGlasses = (z) => {
  if (z == false) {
    document.getElementById("descrip").style.display = "none";
    document.getElementById("glassesShow").style.display = "none";
  } else {
    document.getElementById("descrip").style.display = "block";
    document.getElementById("glassesShow").style.display = "block";
  }
};
window.removeGlasses = removeGlasses;
