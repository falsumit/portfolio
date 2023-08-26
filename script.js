const orange = 'rgb(253, 36, 65)';
const gray = 'rgb(20, 20, 20)';
const light = 'rgb(255, 255, 253)';
const purple = 'rgb(47, 0, 255)';

const colorsHero = [light, orange, purple];
const colorsResume = [light, orange, gray];

const heroName = document.getElementById('hero-name');

heroName.addEventListener('mouseover', () => {
    let newColor = colorsHero[Math.floor(Math.random()*colorsHero.length)];
    heroName.setAttribute('style', `color: ${newColor};`);
});

heroName.addEventListener('mouseout', () => {
    heroName.setAttribute('style', 'color: rgb(255, 255, 253);');
});

const heroTitle = document.getElementById('hero-title');

heroTitle.addEventListener('mouseover', () => {
    let newColor = colorsHero[Math.floor(Math.random()*colorsHero.length)];
    heroTitle.setAttribute('style', `color: ${newColor};`);
});

heroTitle.addEventListener('mouseout', () => {
    heroTitle.setAttribute('style', 'color: rgb(255, 255, 253);');
});

const resumeTitles = document.getElementsByClassName('resume-title');
const resumeExperience = resumeTitles[0];
const resumeEducation = resumeTitles[1];

resumeExperience.addEventListener('mouseover', () => {
    let newColor = colorsResume[Math.floor(Math.random()*colorsResume.length)];
    resumeExperience.setAttribute('style', `color: ${newColor};`);
});

resumeExperience.addEventListener('mouseout', () => {
    resumeExperience.setAttribute('style', 'color: rgb(255, 255, 253);');
});

resumeEducation.addEventListener('mouseover', () => {
    let newColor = colorsResume[Math.floor(Math.random()*colorsResume.length)];
    resumeEducation.setAttribute('style', `color: ${newColor};`);
});

resumeEducation.addEventListener('mouseout', () => {
    resumeEducation.setAttribute('style', 'color: rgb(255, 255, 253);');
});