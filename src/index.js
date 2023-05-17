function openOffcanvas(id) {
    let idOpen = id;
    let idOff = idOpen.replace(/__open/g, "");
    document.getElementById(idOff).classList.add("offcanvas--show");
    document.getElementById(`${idOff}__site`).classList.add("offcanvas__site--show");
    let modal = document.getElementById(`${idOff}__modal`);
    modal.classList.add("offcanvas__modal--show");
}

function closeOffcanvas(id) {
    let idOpen = id;
    let idOff = idOpen.replace(/__close/g, "");
    idOff = idOff.replace(/__modal/g, "");
    document.getElementById(idOff).classList.remove("offcanvas--show");
    document.getElementById(`${idOff}__modal`).classList.remove("offcanvas__modal--show");
    document.getElementById(`${idOff}__site`).classList.remove("offcanvas__site--show");
}

function toggle(e) {
    e.classList.toggle("toggle--true");
}


// Lấy danh sách tất cả các tabs__header-item
var headerItems = document.querySelectorAll('.tabs__header-item');

// Tabs: chuyển tabs
// Lặp qua từng header item và gán sự kiện click
headerItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Lấy id của tabs__header-item được click
        var clickedItemId = this.getAttribute('id');

        // Lấy danh sách tất cả các tabs__content
        var tabContents = document.querySelectorAll('.tabs__content');

        // Lặp qua từng tabs__content và kiểm tra id
        tabContents.forEach(function(content) {
            // Kiểm tra id của tabs__content
            var contentId = content.getAttribute('id');
            // Kiểm tra id của tabs__header-item và tabs__content
            if (clickedItemId === contentId.replace('content', 'header-item')) {

                // Thêm class --active cho tabs__content tương ứng
                content.classList.add('tabs__content--active');
            } else {
                // Xóa class --active cho các tabs__content khác
                content.classList.remove('tabs__content--active');
            }
        });

        // Xóa class --active cho tất cả các tabs__header-item
        headerItems.forEach(function(item) {
            item.classList.remove('tabs__header-item--active');
        });

        // Thêm class --active cho tabs__header-item được click
        this.classList.add('tabs__header-item--active');
    });
});

//Đổi ảnh trong carolsel của shop_single_product
function swapImg(e) {
    let imageSrc = e.querySelector('img').src;
    document.getElementById('bigImage').src = imageSrc;
}