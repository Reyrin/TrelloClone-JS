const items = document.querySelectorAll('.card__item');
let cur;
const placeholders = document.querySelectorAll('.card');

items.forEach(item => {
    item.setAttribute('draggable', true);
    item.addEventListener('dragstart', (e) => {
        cur = e.target;

        setTimeout(() => {
            item.classList.add('hide');
        }, 0)
        
    });
    item.addEventListener('dragend', (e) => {
        item.classList.remove('hide');
    });
})


placeholders.forEach(ph => {
    ph.addEventListener('dragover', () => {
        ph.appendChild(cur);
    });
    ph.addEventListener('dragenter', () => {
        ph.classList.add('line');
    });
    ph.addEventListener('dragleave', () => {
        ph.classList.remove('line');
    });
})



