const skills = document.querySelectorAll('.skill');
const skillsLevel = document.querySelectorAll('.skill-level');

skills.forEach((skill) => {
  skill.addEventListener('mouseenter', () => {
    skill.classList.add('active');
  });
});

skills.forEach((skill) => {
  skill.addEventListener('mouseleave', () => {
    skill.classList.remove('active');
  });
});
