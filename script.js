// Revenue Line Chart
const ctx1 = document.getElementById('revenueChart');

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Revenue',
      data: [5000, 7000, 6500, 8000],
      borderWidth: 2
    }]
  }
});

// Sales Bar Chart
const ctx2 = document.getElementById('salesChart');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Sales', 'Marketing', 'IT'],
    datasets: [{
      label: 'Department Performance',
      data: [120, 90, 60],
      borderWidth: 1
    }]
  }
});
