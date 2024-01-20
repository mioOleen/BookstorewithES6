let activeLink;
export default function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach((section) => {
    section.classList.remove('visible');
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('visible');
  }
  if (activeLink) {
    activeLink.classList.remove('active');
  }

  const clickedLink = document.querySelector(`nav a[href="#"][onclick*="${sectionId}"]`);
  if (clickedLink) {
    clickedLink.classList.add('active');
    activeLink = clickedLink;
  }
}
window.showSection = showSection;
