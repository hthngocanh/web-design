// Đợi trang web tải xong rồi mới chạy code
window.onload = function () {
  // --------- Phần Banner tự động ----------
  const bannerImages = [
    "https://booking.muongthanh.com/upload_images/images/H%60/da-nang-thanh-pho-dang-song.jpg",
    "https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20%C4%91%C3%A0%20n%E1%BA%B5ng/anh-dep-da-nang-2.jpg",
    "https://danangfantasticity.com/wp-content/uploads/2018/03/da-nang-thanh-pho-cua-nhung-cay-cau-07.jpg",
    "https://i1-dulich.vnecdn.net/2024/06/01/CLC1-jpeg-7292-1717256606.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=y8KS482Nkfmh385M5PjGMg",
    "https://images2.thanhnien.vn/528068263637045248/2023/4/4/hoi-an-1680591517857660432696.jpg",
    "https://eholiday.vn/wp-content/uploads/2023/03/tha-den-hoa-dang-tren-song-Hoai.jpeg",
    "https://cdn.realtech.com.vn/uploads/gostay/news/2742/bai-ran-nam-o-co-gi.jpg",
    "https://images.vietnamtourism.gov.vn/vn//images/2022/ngu_hanh_son_da_nang_369258062.jpg",

  ];

  let bannerIndex = 0;
  const banner = document.querySelector(".banner-image");

  if (banner) {
    banner.style.backgroundImage = `url('${bannerImages[bannerIndex]}')`;

    function showNextBanner() {
      banner.style.opacity = 0;
      setTimeout(() => {
        bannerIndex = (bannerIndex + 1) % bannerImages.length;
        banner.style.backgroundImage = `url('${bannerImages[bannerIndex]}')`;
        banner.style.opacity = 1;
      }, 500);
    }

    setInterval(showNextBanner, 3000);
  }

  // --------- Phần Carousel ----------
  let carouselIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const carouselInner = document.querySelector(".carousel-inner");
  const totalItems = items.length;
  const itemsToShow = 3;

  function moveSlide(direction) {
    carouselIndex += direction;

    if (carouselIndex < 0) {
      carouselIndex = 0;
    } else if (carouselIndex > totalItems - itemsToShow) {
      carouselIndex = totalItems - itemsToShow;
    }

    const offset = carouselIndex * (100 / itemsToShow);
    if (carouselInner) {
      carouselInner.style.transform = `translateX(-${offset}%)`;
    }
  }

  // Gán sự kiện cho nút bấm
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      moveSlide(-1);
    });
  }
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      moveSlide(1);
    });
  }
};

// xử lý form login signuo

function handleShowHiddenForm(type) {
  const formLogin = document.querySelector(".login-form");
  const formSignup = document.querySelector(".signup-form");
  const formLoginButton = document.querySelector(".login-btn");
  const formSignupButton = document.querySelector(".signup-btn");

  if (type === "login") {
    formSignup.classList.remove("show");
    formLogin.classList.toggle("show");
  }

  if (type === "signup") {
    formLogin.classList.remove("show");
    formSignup.classList.toggle("show");
  }
}


const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginModal = document.querySelector('.login-modal');
const signupModal = document.querySelector('.signup-modal');
const closeButtons = document.querySelectorAll('.close-btn');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToLogin = document.querySelector('.switch-to-login');

// Hiển thị modal đăng nhập
loginBtn.addEventListener('click', () => {
    loginModal.classList.add('show');
});

// Hiển thị modal đăng ký
signupBtn.addEventListener('click', () => {
    signupModal.classList.add('show');
});

// Đóng modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.classList.remove('show');
        signupModal.classList.remove('show');
    });
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('show');
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('show');
    }
});

// Chuyển từ đăng nhập sang đăng ký
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('show');
    signupModal.classList.add('show');
});

// Chuyển từ đăng ký sang đăng nhập
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.classList.remove('show');
    loginModal.classList.add('show');
});