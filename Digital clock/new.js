function updateClock() {
    const days = ['SUN', 'MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const now = new Date();

    // Highlight current day
    days.forEach((day, index) => {
        document.getElementById(day.toLowerCase()).style.opacity = index === now.getDay() ? '1' : '0.5';
    });

    // Update date
    document.getElementById('day').textContent = now.getDate();
    document.getElementById('month').textContent = months[now.getMonth()];
    document.getElementById('year').textContent = now.getFullYear();

    // Update time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    document.getElementById('hours').textContent = hours % 12 || 12;
    document.getElementById('min').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('sec').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('time').textContent = amPm;
}

// Initialize clock
setInterval(updateClock, 1000);
updateClock();
