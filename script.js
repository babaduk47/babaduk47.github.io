const blockSize = 60;
const gridSize = 6;

const maps = {
    '2024-07-21': {
        blocks: [
            { id: 1, x: 0, y: 1, width: 1, height: 2, direction: 'vertical', color: 'red' },
            { id: 2, x: 1, y: 0, width: 1, height: 3, direction: 'vertical', color: 'red' },
            { id: 3, x: 0, y: 3, width: 2, height: 1, direction: 'horizontal', color: 'green' },
            { id: 4, x: 0, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red' },
            { id: 5, x: 1, y: 5, width: 2, height: 1, direction: 'horizontal', color: 'green' },
            { id: 6, x: 3, y: 0, width: 1, height: 2, direction: 'vertical', color: 'red' },
            { id: 7, x: 4, y: 1, width: 1, height: 3, direction: 'vertical', color: 'red' },
            { id: 8, x: 5, y: 4, width: 1, height: 2, direction: 'vertical', color: 'red' },
            { id: 9, x: 2, y: 3, width: 1, height: 2, direction: 'vertical', color: 'red' },
            { id: 10, x: 4, y: 0, width: 2, height: 1, direction: 'horizontal', color: 'green' },
            { id: 11, x: 3, y: 4, width: 2, height: 1, direction: 'horizontal', color: 'green' },
            { id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal'},
        ],
        key: { id: 12, x: 2, y: 2, width: 2, height: 1, direction: 'horizontal' },
        exitPosition: { x: 6, y: 2 }
    }
};

let selectedBlock = null;
let startX = 0;
let startY = 0;
let hasWon = false;
let blocks = [];
let key = {};
let exitPosition = {};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function initGrid(date) {
    const map = maps[date];
    if (!map) {
        console.error('Карта для данной даты не найдена!');
        return;
    }
    
    blocks = map.blocks;
    key = map.key;
    exitPosition = map.exitPosition;

    grid.innerHTML = '';

    blocks.forEach(block => {
        const div = document.createElement('div');
        div.classList.add(block.id === key.id ? 'key' : 'block', block.color);
        div.style.width = `${block.width * blockSize}px`;
        div.style.height = `${block.height * blockSize}px`;
        div.style.transform = `translate(${block.x * blockSize}px, ${block.y * blockSize}px)`;
        div.dataset.id = block.id;
        div.innerHTML = block.id === key.id ? '🔑' : '';
        grid.appendChild(div);
    });

    const exit = document.createElement('div');
    exit.classList.add('exit');
    exit.style.transform = `translate(${exitPosition.x * blockSize}px, ${exitPosition.y * blockSize}px)`;
    exit.innerHTML = 'Exit';
    grid.appendChild(exit);
}

function addEventListeners() {
    function onStart(e) {
        const blockElement = e.target.closest('.block, .key');
        if (blockElement) {
            selectedBlock = blocks.find(b => b.id === parseInt(blockElement.dataset.id));
            const rect = blockElement.getBoundingClientRect();
            startX = (e.clientX || e.touches[0].clientX) - rect.left;
            startY = (e.clientY || e.touches[0].clientY) - rect.top;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('touchmove', onMove, { passive: false });
            document.addEventListener('mouseup', onEnd);
            document.addEventListener('touchend', onEnd);
        }
    }

    function onMove(e) {
        e.preventDefault();
        if (selectedBlock) {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            moveBlockWithMouse(clientX, clientY);
        }
    }

    function onEnd() {
        if (selectedBlock) {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchend', onEnd);
            selectedBlock = null;
        }
    }

    grid.addEventListener('mousedown', onStart);
    grid.addEventListener('touchstart', onStart, { passive: false });
}

function getMousePosition(e) {
    const mouseX = (e.clientX || e.touches[0].clientX) - grid.getBoundingClientRect().left;
    const mouseY = (e.clientY || e.touches[0].clientY) - grid.getBoundingClientRect().top;
    return { mouseX, mouseY };
}

function moveBlockWithMouse(clientX, clientY) {
    if (hasWon) return;

    const { mouseX, mouseY } = getMousePosition({ clientX, clientY });

    const x = Math.floor((mouseX - startX) / blockSize);
    const y = Math.floor((mouseY - startY) / blockSize);

    if (selectedBlock.direction === 'horizontal') {
        if (x >= 0 && x + selectedBlock.width <= gridSize && canMove(selectedBlock, x, selectedBlock.y)) {
            selectedBlock.x = x;
        }
    } else if (selectedBlock.direction === 'vertical') {
        if (y >= 0 && y + selectedBlock.height <= gridSize && canMove(selectedBlock, selectedBlock.x, y)) {
            selectedBlock.y = y;
        }
    }
    updateBlockPosition(selectedBlock);
    checkWin(selectedBlock);
}

function canMove(block, x, y) {
    return !blocks.some(b => b !== block && isColliding(b, x, y, block.width, block.height));
}

function isColliding(block, x, y, width, height) {
    return !(x + width <= block.x || x >= block.x + block.width || y + height <= block.y || y >= block.y + block.height);
}

function updateBlockPosition(block) {
    const div = grid.querySelector(`[data-id="${block.id}"]`);
    div.style.transform = `translate(${block.x * blockSize}px, ${block.y * blockSize}px)`;
}

function checkWin(block) {
    if (hasWon) return;

    if (block.id !== key.id) return;

    if (block.x <= exitPosition.x && block.x + block.width >= exitPosition.x &&
        block.y <= exitPosition.y && block.y + block.height >= exitPosition.y) {
        hasWon = true;
        alert('Успех! Вы выиграли!');
    }
}

const dateParam = getQueryParam('date');
const date = dateParam || '2024-07-21';

const dateDisplay = document.getElementById('date-display');
dateDisplay.textContent = dateParam;

initGrid(date);
addEventListeners();
