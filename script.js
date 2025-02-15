function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.btn-flotante, .btn-flotante img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
