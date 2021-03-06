const today = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

fetch("assets/articles.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((x) => {
      const card = document.createElement("div");
      const time = document.createElement("time");
      const img = document.createElement("img");
      const span = document.createElement("span");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const container = document.querySelector(".container");

      card.classList.add("card");
      span.classList.add("category");
      h3.classList.add("title");

      time.innerHTML =
        months[today.getMonth()] +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear();

      span.innerHTML = x.category;
      h3.innerHTML = x.title;
      p.innerHTML = x.article.substring(0, 150);
      img.src = "assets/Andromeda.jpeg";
      img.alt = "Dynamic Image";
      img.style.height = "40%";

      switch (span.innerText) {
        case "Astronomy":
          img.src = "assets/Andromeda.jpeg";
          span.style.top = "6.5rem";
          span.style.backgroundColor = "purple";
          break;
        case "Travel":
          img.src = "assets/747.jpg";
          span.style.top = "6.5rem";
          span.style.backgroundColor = "red";
          break;
        case "Business":
          img.src = "assets/Bank.jpg";
          span.style.top = "6.5rem";
          span.style.backgroundColor = "yellow";
          span.style.color = "black";
      }

      card.appendChild(time);
      card.appendChild(img);
      card.appendChild(span);
      card.appendChild(h3);
      card.appendChild(p);

      container.appendChild(card);
    });
  });
