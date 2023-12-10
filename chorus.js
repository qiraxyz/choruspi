/**
 * 
 * mod menu legacy by @author <https://github.com/qiraxyz>
 * 
 */
let modMenu;
let title;
let statusText;
let afkTimeText;
let versionMod;
let destroyButton;
let deployButton;

// create mod menu layer
modMenu = document.createElement('div');
modMenu.style.width = '300px';
modMenu.style.backgroundColor = '#f0f0f0';
modMenu.style.border = '1px solid #000';
modMenu.style.position = 'absolute';
modMenu.style.padding = '10px';
modMenu.style.textAlign = 'center';

// create title mod menu text
title = document.createElement('h1');
title.textContent = 'Choruspi Client';
title.style.fontSize = '20px';
title.style.margin = '0';

// create status anti afk text
statusText = document.createElement('p');
statusText.textContent = 'Status: Anti AFK Off';
statusText.style.color = 'black';
statusText.style.marginTop = '10px';
statusText.style.marginBottom = '10px';

// create afk time total to local storage
afkTimeText = document.createElement('p');
var afkTimeInSeconds = 0;
if (localStorage.getItem('afkTimeInSeconds')) {
    afkTimeInSeconds = parseInt(localStorage.getItem('afkTimeInSeconds'));
    afkTimeText.textContent = 'AFK Time: ' + afkTimeInSeconds + ' seconds';
}
afkTimeText.style.color = 'black';

// create version mod text
versionMod = document.createElement('p');
versionMod.textContent = 'version: 1.0.2';
versionMod.style.color = 'black';

// create destroy button menu
destroyButton = document.createElement('button');
destroyButton.textContent = 'Destroy';
destroyButton.style.backgroundColor = 'red';
destroyButton.style.color = 'white';
destroyButton.style.border = 'none';
destroyButton.style.padding = '5px 10px';
destroyButton.style.cursor = 'pointer';
destroyButton.style.marginTop = '10px';

// create deploy button menu afk
deployButton = document.createElement('button');
deployButton.textContent = 'Deploy';
deployButton.style.backgroundColor = 'green';
deployButton.style.color = 'white';
deployButton.style.border = 'none';
deployButton.style.padding = '5px 10px';
deployButton.style.cursor = 'pointer';
deployButton.style.marginTop = '10px';
deployButton.style.marginLeft = '10px';

/**
 * end create mod menu Layer 
 */

// function action mod menu
var autoClickInterval = null;
var startTime = null;
var status = 'Anti AFK Off';
/**
 * 
 * mod menu legacy by @author <https://github.com/qiraxyz>
 * 
 */
destroyButton.addEventListener('click', function () {
    if (autoClickInterval) {
        clearInterval(autoClickInterval);
    }
    document.body.removeChild(modMenu);
});

deployButton.addEventListener('click', function () {
    if (deployButton.textContent === 'Deploy') {
        autoClickInterval = setInterval(function () {
            var canvasElement = document.getElementById('canvas');
            if (canvasElement) {
                canvasElement.click();
            } else if (!canvasElement) {
                clearInterval(autoClickInterval);
            }
            afkTimeInSeconds += 1;
            afkTimeText.textContent = 'AFK Time: ' + afkTimeInSeconds + ' seconds';
            localStorage.setItem('afkTimeInSeconds', afkTimeInSeconds);
        }, 1000);

        deployButton.textContent = 'Stop';
        deployButton.style.backgroundColor = 'red';
        statusText.textContent = 'Status: Anti AFK On';
        status = 'Anti AFK On';
        startTime = new Date();
    } else {
        if (autoClickInterval) {
            clearInterval(autoClickInterval);
        }

        deployButton.textContent = 'Deploy';
        deployButton.style.backgroundColor = 'green';
        statusText.textContent = 'Status: Anti AFK Off';
        status = 'Anti AFK Off';
        startTime = null;
    }
});
/**
 * 
 * mod menu legacy by @author <https://github.com/qiraxyz>
 * 
 */
modMenu.appendChild(title);
modMenu.appendChild(statusText);
modMenu.appendChild(afkTimeText);
modMenu.appendChild(versionMod);
modMenu.appendChild(destroyButton);
modMenu.appendChild(deployButton);

document.body.appendChild(modMenu);

var isDragging = false;
var offsetX, offsetY;

// dynamic mod menu movement for dekstop
modMenu.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - modMenu.getBoundingClientRect().left;
    offsetY = e.clientY - modMenu.getBoundingClientRect().top;
});
document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        modMenu.style.left = e.clientX - offsetX + 'px';
        modMenu.style.top = e.clientY - offsetY + 'px';
    }
});
document.addEventListener('mouseup', function () {
    isDragging = false;
});

// Event listener for mobile mod menu
modMenu.addEventListener('touchstart', function (e) {
    isDragging = true;
    var touch = e.touches[0];
    offsetX = touch.clientX - modMenu.getBoundingClientRect().left;
    offsetY = touch.clientY - modMenu.getBoundingClientRect().top;
});

document.addEventListener('touchmove', function (e) {
    if (isDragging) {
        var touch = e.touches[0];
        modMenu.style.left = touch.clientX - offsetX + 'px';
        modMenu.style.top = touch.clientY - offsetY + 'px';
    }
});

document.addEventListener('touchend', function () {
    isDragging = false;
});

/**
 * 
 * mod menu legacy by @author <https://github.com/qiraxyz>
 * 
 */