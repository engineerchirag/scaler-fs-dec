const selectRef = document.querySelector('.filter select');
const allMoviesRef = document.querySelectorAll('.movie');

selectRef.addEventListener('change', function(event) {
    allMoviesRef.forEach(movieRef => {
        const genre = movieRef.getAttribute('data-genre');
        if (genre === event.target.value || event.target.value === 'All') {
            // movieRef.style.display = 'flex';
            movieRef.classList.remove('hide');
        } else {
            // movieRef.style.display = 'none';
            movieRef.classList.add('hide');
        }
    })
});

