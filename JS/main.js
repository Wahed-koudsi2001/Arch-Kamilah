
let counters = document.querySelectorAll(".counter");
let statistics = document.getElementById("statistics");
let activated = false;

function startCounter() {
    counters.forEach(counter => {
        counter.innerHTML = 0;
        let count = 0;
        function updateCount() {
            const target = parseInt(counter.dataset.count);
            if (count < target) {
                count++;
                counter.innerHTML = count;
                setTimeout(updateCount, 20);
            } else {
                counter.innerHTML = target;
            }
        }
        updateCount();
        activated = true;
    });
}

function resetCounter() {
    counters.forEach(counter => {
        counter.innerHTML = 0;
    });
    activated = false;
}

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const statisticsOffset = statistics.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > statisticsOffset - windowHeight && !activated) {
        startCounter();
    } else if (scrollPosition < statisticsOffset - windowHeight || scrollPosition === 0) {
        resetCounter();
    }
});
