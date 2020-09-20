const drag = document.getElementById('drag-container');
const drop = document.getElementById('drop-container');

/** @type { HTMLDivElement[] } */
const dragItems = drag.querySelectorAll('[draggable]');

let currentDrag = null;

dragItems.forEach((div) => {
    div.addEventListener('dragstart', function () {
        currentDrag = this;
        return false;
    });
});

document.ondragover = function () {
    return false;
};

drop.addEventListener('drop', function () {
    drag.removeChild(currentDrag);
    drop.appendChild(currentDrag);
});
