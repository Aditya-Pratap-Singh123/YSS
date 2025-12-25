// Popup functions
function openForm() {
  const popup = document.getElementById("formPopup");
  popup.style.display = "block";
  popup.classList.add("show");
}

function closeForm() {
  const popup = document.getElementById("formPopup");
  popup.classList.remove("show");
  setTimeout(() => { popup.style.display = "none"; }, 300);
}

// Close popup when clicking outside
window.addEventListener("click", function(e){
  const popup = document.getElementById("formPopup");
  if(e.target === popup) closeForm();
});

// Form validation
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#formPopup form");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    if(name === "") { alert("Enter your name"); return; }
    if(!/^[6-9]\d{9}$/.test(mobile)) { alert("Enter valid mobile number"); return; }
    alert("✅ Form submitted successfully!");
    form.reset();
    closeForm();
  });

  // Courses click interaction
  const cards = document.querySelectorAll(".course-card");
  const info = document.getElementById("course-info");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const count = card.getAttribute("data-count");
      info.textContent = `${card.textContent} has ${count} courses available.`;
    });
  });
});
