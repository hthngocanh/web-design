const bannerImages = [
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/avatar-trai-nghiem-24-dia-diem-du-lich-da-nang.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/da-nang-la-thanh-pho-truc-thuoc-trung-uong-cua-viet-nam.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/ve-dep-hoang-so-cua-ghenh-bang.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/cong-vien-chau-a-tai-trung-tam-da-nang.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/vinwonders-nam-hoi-an.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/mui-nghe.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/bai-bien-my-khe.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/bai-bien-tien-sa.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/cau-khoa-tinh-yeu.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/cu-lao-cham(2).jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/bai-bien-non-nuoc.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Knms/meo-vat/ngu-hanh-son.jpg"
  ];

  let currentIndex = 0;
  const banner = document.getElementById("banner");

  function showNextBanner() {
    banner.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % bannerImages.length;
      banner.src = bannerImages[currentIndex];
      banner.style.opacity = 1;
    }, 500);
  }

  setInterval(showNextBanner, 3000);
