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