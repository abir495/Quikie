document.addEventListener('DOMContentLoaded', () => {
    const flipContainer = document.querySelector('.auth-flip-container');
    const toRegister = document.getElementById('to-register');
    const toLogin = document.getElementById('to-login');
    
    const formLogin = document.getElementById('login-form');
    const formRegister = document.getElementById('register-form');
    const loginError = document.getElementById('login-error');
    const regError = document.getElementById('reg-error');

    // 3D Flip Logic
    toRegister.addEventListener('click', () => {
        flipContainer.classList.add('flipped');
        loginError.style.display = 'none';
        regError.style.display = 'none';
    });

    toLogin.addEventListener('click', () => {
        flipContainer.classList.remove('flipped');
        loginError.style.display = 'none';
        regError.style.display = 'none';
    });

    const showError = (el, msg) => {
        el.textContent = msg;
        el.style.display = 'block';
    };

    // Handle Login
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (data.success) {
                localStorage.setItem('quikieToken', data.token);
                localStorage.setItem('quikieUser', data.user.username);
                window.location.href = 'index.html';
            } else {
                showError(loginError, data.message || 'Login failed');
            }
        } catch (err) {
            showError(loginError, 'Server connection error. Please try again.');
        }
    });

    // Handle Register
    formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (data.success) {
                localStorage.setItem('quikieToken', data.token);
                localStorage.setItem('quikieUser', data.user.username);
                window.location.href = 'index.html';
            } else {
                showError(regError, data.message || 'Registration failed');
            }
        } catch (err) {
            showError(regError, 'Server connection error. Please try again.');
        }
    });
});
