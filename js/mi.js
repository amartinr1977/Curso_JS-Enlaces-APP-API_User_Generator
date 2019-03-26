// 1) Variables
const boton = $("#boton");
const contenido = $("#contenido");

// 2) Funciones

const LlamarAPI = e => {
  e.preventDefault();
  $.ajax({
    url:
      "https://randomuser.me/api/?nat=es&inc=gender,name,nat,picture&results=5",
    dataType: "json",
    success: function(data) {
      console.log(data);

      let micontenido =
        /* html */
        ` 
        <img class="rounded-circle" src="${data.results[0].picture.large}" >
        <br>
        <p>${data.results[0].name.title}. 
            ${data.results[0].name.first}
            ${data.results[0].name.last}
        </p>
        `;
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

// 3) Eventos
/* $("#boton").click(function(e) {
  e.preventDefault();
  LlamarAPI();
}); */
boton.on("click", LlamarAPI);
