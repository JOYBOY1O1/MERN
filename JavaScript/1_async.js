const dummy_data = [
  { name: "Aman", Profession: "Software Engineer" },
  { name: "Anuj", Profession: "Software Engineer" },
];

function get_data() {
  setTimeout(() => {
    let op = "";
    dummy_data.forEach((data, index) => {
      op += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = op;
  }, 1000);
}

get_data();
