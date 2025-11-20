// ===========================
// NAVIGATION DROPDOWNS
// ===========================

// Handle dropdown hover & keyboard focus
document.querySelectorAll(".dropdown").forEach(dropdown => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-content");

  // Show menu on hover
  dropdown.addEventListener("mouseenter", () => {
    menu.style.display = "block";
    toggle.setAttribute("aria-expanded", "true");
  });

  // Hide menu on mouse leave
  dropdown.addEventListener("mouseleave", () => {
    menu.style.display = "none";
    toggle.setAttribute("aria-expanded", "false");
  });

  // Keyboard accessibility (Enter or Space opens dropdown)
  toggle.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      const isOpen = menu.style.display === "block";
      menu.style.display = isOpen ? "none" : "block";
      toggle.setAttribute("aria-expanded", String(!isOpen));
    }
  });
});


// ===========================
// ACTIVE NAVIGATION HIGHLIGHT
// ===========================

const currentPage = window.location.pathname.split("/").pop(); // get current filename
document.querySelectorAll("nav ul li a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// ===========================
// DISABLED LINKS HANDLER
// ===========================

document.querySelectorAll(".disabled-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // block clicks
    return false;
  });
});


// ===========================
// FORM VALIDATION (if form exists)
// ===========================

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input[required]");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("⚠️ Please fill out all required fields.");
    }
  });
}
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;

    // Close other open dropdowns
    document.querySelectorAll('.dropdown-content').forEach(menu => {
      if (menu !== dropdown) menu.classList.remove('show');
    });

    // Toggle this one
    dropdown.classList.toggle('show');
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(menu => {
      menu.classList.remove('show');
    });
  }
});
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.service-box');
    const moreText = box.querySelector('.more-text');
    
    moreText.style.display = moreText.style.display === 'block' ? 'none' : 'block';
    button.textContent = moreText.style.display === 'block' ? 'Read Less' : 'Read More';
  });
});


// ===========================
// DEBUG MESSAGE
// ===========================
console.log("✅ Script loaded successfully!");
