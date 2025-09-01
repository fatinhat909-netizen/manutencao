// Botão WhatsApp
document.getElementById("whatsapp-btn").addEventListener("click", function() {
  const phoneNumber = "5589988255293"; // seu número
  const message = "Olá, gostaria de mais informações";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
