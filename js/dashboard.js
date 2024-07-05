function selectLink(event) {
    event.preventDefault();
    let links = document.querySelectorAll('.customLinks');
    links.forEach(function(link) {
        link.classList.remove('selected');
    });
    event.target.classList.add('selected');
}