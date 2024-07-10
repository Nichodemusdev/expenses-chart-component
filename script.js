document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { "day": "Mon", "amount": 17.45 },
        { "day": "Tue", "amount": 34.91 },
        { "day": "Wed", "amount": 52.36 },
        { "day": "Thu", "amount": 31.07 },
        { "day": "Fri", "amount": 23.39 },
        { "day": "Sat", "amount": 43.28 },
        { "day": "Sun", "amount": 25.48 }
    ];

    const chartContainer = document.getElementById('chart');

    data.forEach(day => {
        const barWrapper = document.createElement('div');
        barWrapper.classList.add('bar-wrapper');

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${day.amount * 2}px`; // Adjust height based on amount
        bar.dataset.amount = day.amount.toFixed(2);

        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = day.day;

        barWrapper.appendChild(bar);
        barWrapper.appendChild(label);

        bar.addEventListener('mouseenter', function() {
            const amount = this.dataset.amount;
            const amountDiv = document.createElement('div');
            amountDiv.classList.add('amount');
            amountDiv.textContent = `$${amount}`;
            this.appendChild(amountDiv);
            this.style.opacity = '0.8'; // Adjust opacity on hover
        });

        bar.addEventListener('mouseleave', function() {
            const amountDiv = this.querySelector('.amount');
            if (amountDiv) {
                amountDiv.remove();
            }
            this.style.opacity = '1'; // Reset opacity on mouse leave
        });

        chartContainer.appendChild(barWrapper);
    });
});
