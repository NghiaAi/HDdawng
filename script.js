var link = 0;
const home = document.querySelector(".home");
setInterval(function () {
    home.style.backgroundImage = `url(./IMG/${link}.jpg)`;
    if (link < 3) {
        link++;
    } else {
        link = 0;
    }
}, 2000);

// Lấy tất cả các thẻ có class "post"
const posts = document.querySelectorAll(".post");

// Lặp qua từng post và thêm sự kiện hover
posts.forEach((post) => {
    post.addEventListener("mouseenter", function () {
        // Thêm class "show" cho phần nội dung
        this.querySelector(".fea-text").classList.add("show");
    });

    post.addEventListener("mouseleave", function () {
        // Loại bỏ class "show" cho phần nội dung
        this.querySelector(".fea-text").classList.remove("show");
    });
});

function handleScroll(containerId, direction) {
    const widthItem =
        document.querySelector(`#${containerId} .post`).offsetWidth + 20;
    const scrollContainer = document.getElementById(containerId);
    if (direction === "next") {
        scrollContainer.scrollLeft += widthItem;
    } else {
        scrollContainer.scrollLeft -= widthItem;
    }
}

// Add event listeners for all buttons
document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", function () {
        const containerId = this.parentNode.parentNode.id;
        const direction = this.id.includes("next") ? "next" : "prev";
        handleScroll(containerId, direction);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử nút back-to-top
    const backToTopBtn = document.querySelector(".backtop");

    // Thêm sự kiện scroll vào window
    window.addEventListener("scroll", function () {
        // Lấy vị trí hiện tại của scroll
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Kiểm tra nếu scrollTop lớn hơn hoặc bằng 100px, thì hiển thị nút back-to-top, ngược lại ẩn nút
        if (scrollTop >= 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Thêm sự kiện click vào nút back-to-top
    backToTopBtn.addEventListener("click", function () {
        // Di chuyển màn hình lên đầu trang
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
