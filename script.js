document.addEventListener('DOMContentLoaded', function() {
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, {
        type: 'doughnut',
        data: {
            labels: ['Masculino', 'Feminino'],
            datasets: [{
                label: 'Gênero',
                data: [65, 35],
                backgroundColor: ['#552583', '#FDB927'],
                borderColor: '#FFFFFF',
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#374151',
                        font: {
                            size: 14,
                            family: 'Inter'
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });

    const ageCtx = document.getElementById('ageChart').getContext('2d');
    new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: ['13-17', '18-24', '25-34', '35+'],
            datasets: [{
                label: 'Faixa Etária (%)',
                data: [15, 45, 30, 10],
                backgroundColor: '#FDB927',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                         callback: function(value) {
                            return value + '%'
                        },
                        color: '#374151',
                        font: {
                            family: 'Inter'
                        }
                    }
                },
                x: {
                     grid: {
                        display: false
                    },
                     ticks: {
                        color: '#374151',
                        font: {
                            family: 'Inter'
                        }
                    }
                }
            }
        }
    });

    const tabsContainer = document.getElementById('tabs-container');
    const tabsContent = document.getElementById('tabs-content');
    
    if (tabsContainer) {
        tabsContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('tab-button')) {
                const targetId = event.target.dataset.target;

                tabsContainer.querySelectorAll('.tab-button').forEach(button => {
                    button.classList.remove('active');
                });
                
                event.target.classList.add('active');

                tabsContent.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });
                
                document.getElementById(targetId).classList.remove('hidden');
            }
        });
    }

    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const couponText = button.dataset.coupon;
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = couponText;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            const originalText = button.innerHTML;
            button.innerHTML = 'Copiado!';
            button.style.backgroundColor = '#10B981'; 

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        });
    });
});
