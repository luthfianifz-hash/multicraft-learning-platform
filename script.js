feather.replace();

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Data Materi MultiCraft

const courses = [
  {
    category: "Film",
    title: "Dasar Produksi Film",
    description: "Pelajari dasar produksi film mulai dari ide, naskah, pengambilan gambar, hingga proses produksi.",
    mentor: "MultiCraft",
    price: "Materi Gratis"
  },
  {
    category: "Podcast",
    title: "Dasar Produksi Podcast",
    description: "Pelajari proses membuat podcast mulai dari menentukan topik, membuat naskah, rekaman audio, hingga publikasi.",
    mentor: "MultiCraft",
    price: "Materi Gratis"
  },
  {
    category: "Animasi",
    title: "Dasar Animasi 2D",
    description: "Kenali prinsip dasar animasi dan proses membuat gerakan karakter yang menarik dan komunikatif.",
    mentor: "MultiCraft",
    price: "Materi Gratis"
  }
];

function displayCourses() {
  const courseList = document.querySelector("#course-list");

  courseList.innerHTML = "";

  courses.forEach((course) => {
    courseList.innerHTML += `
      <div class="menu-card">
        <div class="menu-card-content">
          <span>${course.category}</span>
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <small>Mentor: ${course.mentor}</small>
          <strong>${course.price}</strong>
          <a href="#projects">Pelajari</a>
        </div>
      </div>
    `;
  });
}

displayCourses();