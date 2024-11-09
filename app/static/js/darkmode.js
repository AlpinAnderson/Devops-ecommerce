
    // Mengecek apakah dark mode sudah disimpan di localStorage
    const modeToggle = document.getElementById('mode-toggle-input');

    // Cek apakah dark mode sudah diaktifkan sebelumnya
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        modeToggle.checked = true; // Menandakan checkbox aktif jika dark mode sudah aktif
    }

    // Event listener untuk toggle dark mode
    modeToggle.addEventListener('change', function () {
        if (modeToggle.checked) {
            // Menambahkan kelas dark mode dan menyimpan status ke localStorage
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Menghapus kelas dark mode dan menyimpan status ke localStorage
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

