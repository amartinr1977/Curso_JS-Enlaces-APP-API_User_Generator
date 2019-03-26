// 1) Variables
const boton = $("#boton");
const contenido = $("#contenido");
const numero = $("#numero");
const boton2 = $("#boton2");

// 2) Funciones

const LlamarAPI = urlpersonlizada => {
  $.ajax({
    url: urlpersonlizada,
    dataType: "json",
    success: function(data) {
      console.log(data);
      let micontenido = "";
      for (let i = 0; i < data.results.length; i++) {
        micontenido +=
          /* html */
          ` 
        <img class="rounded-circle" src="${data.results[i].picture.large}" >
        <br>
        <p>${data.results[i].name.title}. 
            ${data.results[i].name.first}
            ${data.results[i].name.last}
        </p>
        `;
      }

      $("#datos").fadeOut("slow", function() {
        $(this)
          //.css("display", "none")
          .fadeIn("slow")
          .html(micontenido);
      });
    },
    error: function() {
      console.log("Ha habido un error ...");
      alert("Ha habido un error en la llamada a la API ...");
    }
  });
};

const PrepararURL = e => {
  e.preventDefault();
  console.log(e.target.id);
  let miurl;
  if (e.target.id === "boton") {
    miurl = "https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture";
  }
  if (e.target.id === "boton2") {
    let n = numero.val();
    miurl =
      "https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture&results=" +
      n;
  }
  LlamarAPI(miurl);
};

// 3) Eventos
/* $("#boton").click(function(e) {
  e.preventDefault();
  LlamarAPI();
}); */
boton.on("click", PrepararURL);
boton2.on("click", PrepararURL);
