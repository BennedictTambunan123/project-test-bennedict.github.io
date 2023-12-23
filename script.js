$(document).ready(function() {
    // Menambahkan kelas 'active' ke menu yang diklik
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const parallaxContainer = document.querySelector('.parallax-container');

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const parallaxOffset = scrollTop * 0.5;

        parallaxContainer.style.transform = `translateY(${parallaxOffset}px)`;
    });
});

//data
const cardData = [
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "2 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "4 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "12 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "6 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "12 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "6 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "12 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "6 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "12 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image1.jpeg", date: "6 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers" },
{ image: "image/image2.jpeg", date: "5 SEPTEMBER 2022", title: "Kenali tingkat influencer berdasarkan jumlah Followers Kenali tingkat influencer berdasarkan jumlah Followers" },
];

function createCard(card) {
    return `
    <div class="col-md-3">
        <div class="card mb-4">
            <img src="${card.image}" class="card-img-top" alt="..." loading="lazy">
            <div class="card-body">
                <p class="card-text">${card.date}</p>
                <h6 class="card-title ellipsis">${card.title}</h6>
            </div>
        </div>
    </div>
`;
}

function renderCards(currentPage, itemsPerPage, sortOption) {
    const container = $('#card-container');
    const showing = $('#showing');
    container.empty();

    const sortedData = sortOption === 'published_at'
        ? cardData.sort((a, b) => new Date(b.date) - new Date(a.date)) 
        : cardData.sort((a, b) => new Date(a.date) - new Date(b.date)); 

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCards = sortedData.slice(startIndex, endIndex);

    currentCards.forEach(card => {
        container.append(createCard(card));
    });

    showing.text(`Showing ${startIndex + 1} - ${endIndex} of ${cardData.length} pages`);
}


function renderPagination(totalPages, currentPage) {
    const pagination = $('#pagination');
    pagination.empty();

    for (let i = 1; i <= totalPages; i++) {
        const liClass = i == currentPage ? 'page-item active-orange' : 'page-item';
        const linkClass = i == currentPage ? 'page-link active-orange' : 'page-link';
        const pageLink = `<li class="${liClass}"><a class="${linkClass}" href="#">${i}</a></li>`;
        pagination.append(pageLink);
    }
}


function updateURL(page) {
    const sort = $('#sort').val();
    const show = $('#show').val();
    const currentPage = page || '1';

    const url = new URL(window.location.href);
    url.searchParams.set('sort', sort);
    url.searchParams.set('show', show);
    url.searchParams.set('page', currentPage);

    window.history.replaceState({}, '', url);
}

function loadData() {
    const sort = $('#sort').val();
    const show = $('#show').val();
    const page = getCurrentPage();
    const itemsPerPage = parseInt(show);

    const totalPages = Math.ceil(cardData.length / itemsPerPage);

    renderCards(page, itemsPerPage, sort);
    renderPagination(totalPages, page);
    $('[href="#section-ideas"]').parent().addClass('active');
}

function getCurrentPage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || '1';
}

function setEventListeners() {
    document.getElementById('show').addEventListener('change', function () {
        updateURL();
        loadData();
    });

    document.getElementById('sort').addEventListener('change', function () {
        updateURL();
        loadData();
    });

    document.getElementById('pagination').addEventListener('click', function (e) {
        e.preventDefault();
        const page = e.target.innerText;
        updateURL(page);
        loadData();
    });
}

setEventListeners();

loadData();