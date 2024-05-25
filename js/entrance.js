document.addEventListener('DOMContentLoaded', function () {
    const entranceNames = document.querySelectorAll('.entranceName');

    entranceNames.forEach(entrance => {
        entrance.addEventListener('click', function () {
            const options = this.nextElementSibling;
            options.classList.toggle('active');
        });
    });
});
