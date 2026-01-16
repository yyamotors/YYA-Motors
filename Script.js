function openPopup(type) {
  const text = {
    delivery: "🚚 Home Delivery available for all Toyota Dolphin Van genuine parts.",
    service: "💬 24/7 message service via WhatsApp & Facebook.",
    time: "⏰ Working hours: Morning 9:30 AM to 6:00 PM."
  };

  document.getElementById("popup-text").innerText = text[type];
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
