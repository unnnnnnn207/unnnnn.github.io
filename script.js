let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const homeContent = document.getElementById('home-content');

    // Điều hướng giữa các nội dung
    document.querySelectorAll('.navigation ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1) + '-content';
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(target).style.display = 'block';

            // Kiểm tra xem có đang ở home-content không
            if (target === 'home-content') {
                header.style.backgroundColor = 'transparent';
                window.removeEventListener('scroll', onScrollChangeHeader);
            } else {
                window.addEventListener('scroll', onScrollChangeHeader);
            }
        });
    });

    // Hiển thị mặc định là "Trang chủ"
    homeContent.style.display = 'block';
    window.removeEventListener('scroll', onScrollChangeHeader);

    // Thay đổi màu header khi cuộn
    function onScrollChangeHeader() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#282A35';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }

    // Nút chuyển trang không thuộc "Trang chủ"
    document.querySelector('.main-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('guide-content').style.display = 'block';
        window.addEventListener('scroll', onScrollChangeHeader);
    });

    // Nút điều hướng trong "Hướng dẫn"
    document.querySelectorAll('.timeline-container .guide-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('data-target') + '-content';
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(target).style.display = 'block';
            window.addEventListener('scroll', onScrollChangeHeader);
        });
    });

    // Nút điều hướng bằng hình ảnh hành tinh
    document.querySelector('#planet-inside-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('guide-content').style.display = 'block';
        window.addEventListener('scroll', onScrollChangeHeader);
    });

    document.querySelector('#planet-outside2-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        homeContent.style.display = 'block';
        window.removeEventListener('scroll', onScrollChangeHeader);
        header.style.backgroundColor = 'transparent';
    });

    document.querySelector('#planet-outside1-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('job-content').style.display = 'block';
        window.addEventListener('scroll', onScrollChangeHeader);
    });

    document.querySelector('#planet-middle1-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('prof-content').style.display = 'block';
        window.addEventListener('scroll', onScrollChangeHeader);
    });

    document.querySelector('#planet-middle2-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById('mat-content').style.display = 'block';
        window.addEventListener('scroll', onScrollChangeHeader);
    });
});
