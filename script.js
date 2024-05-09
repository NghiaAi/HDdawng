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
const posts = document.querySelectorAll('.post');

// Lặp qua từng post và thêm sự kiện hover
posts.forEach(post => {
    post.addEventListener('mouseenter', function() {
        // Thêm class "show" cho phần nội dung
        this.querySelector('.fea-text').classList.add('show');
    });

    post.addEventListener('mouseleave', function() {
        // Loại bỏ class "show" cho phần nội dung
        this.querySelector('.fea-text').classList.remove('show');
    });
});

function handleScroll(containerId, direction) {
  const widthItem = document.querySelector(`#${containerId} .post`).offsetWidth + 20;
  const scrollContainer = document.getElementById(containerId);
  if (direction === 'next') {
    scrollContainer.scrollLeft += widthItem;
  } else {
    scrollContainer.scrollLeft -= widthItem;
  }
}

// Add event listeners for all buttons
document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener('click', function() {
    const containerId = this.parentNode.parentNode.id;
    const direction = this.id.includes('next') ? 'next' : 'prev';
    handleScroll(containerId, direction);
  });
});


