const orange = 'rgb(253, 36, 65)';
const gray = 'rgb(20, 20, 20)';
const light = 'rgb(255, 255, 253)';
const purple = 'rgb(47, 0, 255)';

const colorsHero = [light, orange, purple];
const colorsBody = [light, orange, gray];
const colorsLinks = [gray, orange, purple];

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

const bodyTitles = document.getElementsByClassName('body-title');
const bodyExperience = bodyTitles[0];
const bodyEducation = bodyTitles[1];

bodyExperience.addEventListener('mouseover', () => {
    let newColor = colorsBody[Math.floor(Math.random()*colorsBody.length)];
    bodyExperience.setAttribute('style', `color: ${newColor};`);
});

bodyExperience.addEventListener('mouseout', () => {
    bodyExperience.setAttribute('style', 'color: rgb(255, 255, 253);');
});

bodyEducation.addEventListener('mouseover', () => {
    let newColor = colorsBody[Math.floor(Math.random()*colorsBody.length)];
    bodyEducation.setAttribute('style', `color: ${newColor};`);
});

bodyEducation.addEventListener('mouseout', () => {
    bodyEducation.setAttribute('style', 'color: rgb(255, 255, 253);');
});

const linksTitle = document.getElementById('links-title');

linksTitle.addEventListener('mouseover', () => {
    let newColor = colorsLinks[Math.floor(Math.random()*colorsLinks.length)];
    linksTitle.setAttribute('style', `color: ${newColor};`);
});

linksTitle.addEventListener('mouseout', () => {
    linksTitle.setAttribute('style', 'rgb(253, 36, 65);');
});