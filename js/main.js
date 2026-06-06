document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const alertBox = document.getElementById("successAlert");
  if (!form || !alertBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic client-side validation
    const requiredFields = [
      "studentName",
      "email",
      "mobile",
      "gender",
      "course",
      "qualification",
      "address",
      "resume",
      "terms",
    ];
    for (const id of requiredFields) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (
        (el.type === "checkbox" || el.type === "radio") &&
        !el.checked &&
        id === "terms"
      ) {
        alert("Please accept Terms & Conditions.");
        return;
      }
      if (id !== "terms" && !el.value) {
        alert("Please fill all required fields.");
        return;
      }
    }

    alertBox.classList.remove("d-none");
    alertBox.scrollIntoView({ behavior: "smooth", block: "start" });
    form.reset();
  });
});
