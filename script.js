const pilots = [
    { n: 1, name: "Max Verstappen", team: "Red Bull-Ford", bio: "Чинний чемпіон, що веде Red Bull у нову еру мотористів Ford." },
    { n: 11, name: "Isack Hadjar", team: "Red Bull-Ford", bio: "Протеже Red Bull, що отримав свій шанс у головній команді." },
    { n: 16, name: "Charles Leclerc", team: "Ferrari", bio: "Лідер Ferrari, що прагне випередити легендарного напарника." },
    { n: 44, name: "Lewis Hamilton", team: "Ferrari", bio: "Семикратний чемпіон у пошуках восьмого титулу в червоному комбінезоні." },
    { n: 4, name: "Lando Norris", team: "McLaren", bio: "Технічний лідер McLaren, що ідеально адаптувався до нових правил." },
    { n: 81, name: "Oscar Piastri", team: "McLaren", bio: "Хладнокровний австралієць, готовий до боротьби за чемпіонство." },
    { n: 63, name: "George Russell", team: "Mercedes", bio: "Перший номер Mercedes після епохи Гемілтона." },
    { n: 12, name: "Kimi Antonelli", team: "Mercedes", bio: "Юний італійський феномен, на якого покладає надії вся Німеччина." },
    { n: 14, name: "Fernando Alonso", team: "Aston Martin-Honda", bio: "Найдосвідченіший пілот в історії, знову з моторами Honda." },
    { n: 18, name: "Lance Stroll", team: "Aston Martin-Honda", bio: "Невід'ємна частина амбітного проекту свого батька." },
    { n: 27, name: "Nico Hulkenberg", team: "Audi", bio: "Досвідчений німець, що очолює заводський проект Audi." },
    { n: 10, name: "Gabriel Bortoleto", team: "Audi", bio: "Бразильська надія, що дебютує у вищій лізі під крилом Audi." },
    { n: 23, name: "Alex Albon", team: "Williams", bio: "Серце команди Williams, що повертається до лав лідерів." },
    { n: 55, name: "Carlos Sainz", team: "Williams", bio: "Майстер тактики, чий досвід критично важливий для Williams." },
    { n: 111, name: "Sergio Perez", team: "Cadillac", bio: "Досвідчений мексиканець, що став обличчям нового американського проекту." },
    { n: 77, name: "Valtteri Bottas", team: "Cadillac", bio: "Швидкий та стабільний фін, що приніс знання Mercedes у Cadillac." },
    { n: 10, name: "Pierre Gasly", team: "Alpine", bio: "Французький лідер національної команди, попри всі труднощі." },
    { n: 43, name: "Franco Colapinto", team: "Alpine", bio: "Аргентинська сенсація, що виборола місце у заводській команді." },
    { n: 30, name: "Liam Lawson", team: "RB", bio: "Нова надія програми Red Bull, що нарешті отримала постійне місце." },
    { n: 3, name: "Arvid Lindblad", team: "RB", bio: "Молодий британець, що стрімко увірвався у Формулу-1." },
    { n: 31, name: "Esteban Ocon", team: "Haas", bio: "Переможець Гран-прі, що приніс свій досвід американській команді." },
    { n: 50, name: "Ollie Bearman", team: "Haas", bio: "Висхідна зірка Британії, що розпочинає великий шлях у Haas." }
];

const grid = document.getElementById('pilot-grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

function init() {
    pilots.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">#${p.n}</div>
            <div class="card-info">
                <h2>${p.name}</h2>
                <span class="team-tag">${p.team}</span>
            </div>
        `;
        card.onclick = () => showModal(p);
        grid.appendChild(card);
    });
}

function showModal(p) {
    modalBody.innerHTML = `
        <h1 style="color:var(--accent); margin-bottom:5px;">${p.name}</h1>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">${p.team} | Номер #${p.n}</p>
        <div style="height:2px; background: #333; margin-bottom: 20px;"></div>
        <p style="font-size: 1.1rem; line-height: 1.8; color: #ccc;">${p.bio}</p>
    `;
    modal.style.display = 'flex';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

init();