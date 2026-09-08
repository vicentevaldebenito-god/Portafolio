window.onload = () => {
    document.querySelectorAll(".scramble-text").forEach(el => {
        let target = el.dataset.target, i = 0;
        let timer = setInterval(() => {
            el.textContent = target.split("").map((c, j) => j < i ? c : (c == " " ? " " : "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 62)])).join("");
            if ((i += 0.2) >= target.length) { el.textContent = target; clearInterval(timer); }
        }, 30);
    });
};