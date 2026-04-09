const { createApp } = Vue;

createApp({
  data() {
    return {
      pantalla: 'inicio',
      mensaje: 'I want to wish you a happy birthday, I hope you have a great day and enjoy it to the fullest! 🎉🎂🎁'
    }
  },

  methods: {
    elegir(op) {

      const mensajes = {
        cake: "🎂 Hoy no es solo tu cumpleaños… es un dia muy especial ya que sigues y sigues, siendo alguien muy increible, por eso te quiero felicitar.",
        cupcake: "🧁 Quiero que recuerdes que tienes una amiga que te quiero mucho asi sea en la distancia, te aprecio mucho asi que felicidades.",
        gift: "🎁 Tu existencia es un regalo que el mundo no sabe agradecer lo suficiente.",
        party: "🎉 Celebra tus logros,incluso si a veces estas cansada, sigue siendo tuya. Recuerda que te eres inteligente, bonita, atenta, compresiva, linda, divertida, que nadie te haga dudar de eso."
      };

      this.mensaje = mensajes[op];
      this.pantalla = 'mensaje';
    },

    reiniciar() {
      this.pantalla = 'inicio';
    },

  crearBurbujas() {
  setInterval(() => {
    let burbuja = document.createElement("div");
    burbuja.className = "burbuja";

    let size = Math.random() * 20 + 10;
    burbuja.style.width = size + "px";
    burbuja.style.height = size + "px";

    burbuja.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(burbuja);

    setTimeout(() => burbuja.remove(), 6000);
  }, 300);
}
  },

    mounted() {
    this.crearBurbujas(); // 💖 AQUÍ SE ACTIVA
  }

}).mount('#app');