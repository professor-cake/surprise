document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    function surprizea(k) {
        return 15 * Math.sin(k) ** 3;
    }

    function surprizeb(k) {
        return 12 * Math.cos(k) - 5 * Math.cos(2 * k) - 2 * Math.cos(3 * k) - Math.cos(4 * k);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animationDuration = 15000; // 15 seconds
    const startTime = Date.now();

    function draw() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed < animationDuration) {
            const progress = elapsed / animationDuration;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add text with a romantic cursive font
            ctx.fillStyle = "#ffffff"; // White color
            ctx.font = "italic bold 24px cursive";
            ctx.fillText("From Sun to My Moon", canvas.width / 2 - 100-26, surprizeb(0) * 10 + canvas.height / 2 - 200);

            ctx.beginPath();
            ctx.moveTo(surprizea(0) * 10 + canvas.width / 2, surprizeb(0) * 10 + canvas.height / 2);

            for (let i = 0; i < 6000 * progress; i++) {
                const x = surprizea(i) * 10 + canvas.width / 2;
                const y = -surprizeb(i) * 10 + canvas.height / 2; // Flip the y-coordinate to make it upright
                ctx.lineTo(x, y);
            }

            const fillAlpha = Math.min(progress * 25, 1);
            ctx.fillStyle = `rgba(255, 0, 153, ${fillAlpha})`;
            ctx.fill();

            ctx.strokeStyle = "#ff0099";
            ctx.stroke();

            requestAnimationFrame(draw);
        }
    }

    draw();
});
