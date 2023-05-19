function openOffcanvas(id) {
  let idOpen = id;
  let idOff = idOpen.replace(/__open/g, "");
  document.getElementById(idOff).classList.add("offcanvas--show");
  document
    .getElementById(`${idOff}__site`)
    .classList.add("offcanvas__site--show");
  let modal = document.getElementById(`${idOff}__modal`);
  modal.classList.add("offcanvas__modal--show");
}

function closeOffcanvas(id) {
  let idOpen = id;
  let idOff = idOpen.replace(/__close/g, "");
  idOff = idOff.replace(/__modal/g, "");
  document.getElementById(idOff).classList.remove("offcanvas--show");
  document
    .getElementById(`${idOff}__modal`)
    .classList.remove("offcanvas__modal--show");
  document
    .getElementById(`${idOff}__site`)
    .classList.remove("offcanvas__site--show");
}

function toggle(e) {
  e.classList.toggle("toggle--true");
}

// Lấy danh sách tất cả các tabs__header-item
var headerItems = document.querySelectorAll(".tabs__header-item");

// Tabs: chuyển tabs
// Lặp qua từng header item và gán sự kiện click
headerItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Lấy id của tabs__header-item được click
    var clickedItemId = this.getAttribute("id");
    // Lấy danh sách tất cả các tabs__content
    var tabContents = document.querySelectorAll(".tabs__content");
    // Lặp qua từng tabs__content và kiểm tra id
    tabContents.forEach(function (content) {
      // Kiểm tra id của tabs__content
      var contentId = content.getAttribute("id");
      // Kiểm tra id của tabs__header-item và tabs__content
      if (clickedItemId === contentId.replace("content", "header-item")) {
        // Thêm class --active cho tabs__content tương ứng
        content.classList.add("tabs__content--active");
      } else {
        // Xóa class --active cho các tabs__content khác
        content.classList.remove("tabs__content--active");
      }
    });
    // Xóa class --active cho tất cả các tabs__header-item
    headerItems.forEach(function (item) {
      item.classList.remove("tabs__header-item--active");
    });
    // Thêm class --active cho tabs__header-item được click
    this.classList.add("tabs__header-item--active");
  });
});

// dropdown
var dropdownButtons = document.querySelectorAll(".dropdown__button");

// Lặp qua từng nút "dropdown__button"
dropdownButtons.forEach(function (button) {
  // Gắn sự kiện click vào từng nút
  button.addEventListener("click", function () {
    // Lấy phần tử "dropdown__content" gần nhất với nút đang được nhấp
    var dropdownContent = button.nextElementSibling;
    // Thêm lớp "show" vào phần tử "dropdown__content"
    dropdownContent.classList.toggle("dropdown__content--show");
  });
});

// tree
var tree__header = document.querySelectorAll(".tree__header");

// Lặp qua từng nút "dropdown__button"
tree__header.forEach(function (button) {
  button.addEventListener("click", function () {
    var treeList = button.nextElementSibling;
    treeList.classList.toggle("tree__list--show");
    let checkbox = button.querySelector(".tree__checkbox");
    checkbox.checked = !checkbox.checked;
    if(checkbox.checked == false){
      let treeCheckboxList = treeList.querySelectorAll(".tree__checkbox");
      treeCheckboxList.forEach(function(e){
        e.checked = false;
      })
    }
  });
});

var tree__child = document.querySelectorAll(".tree__child");
tree__child.forEach(function (child) {
  child.addEventListener("click", function () {
    let checkbox = child.querySelector(".tree__checkbox");
    checkbox.checked = !checkbox.checked;
    let headerChild = child.querySelector(".tree__header");
    if (headerChild) {
      let checkboxChild = headerChild.querySelector(".tree__checkbox");
      checkboxChild.checked = !checkboxChild.checked;
    }
  });
});
