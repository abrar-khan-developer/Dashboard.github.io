var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function opensidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

//  <------- ApexCharts ------> 
//  <------- Bar Chart start------>
// bar colors (your list)
var options = {
  series: [{
    name: 'Products',
    data: [1200, 900, 650, 400, 750]
  }],
  chart: {
    type: 'bar',
    height: 350,
    background: 'transparent',
    toolbar: { show: false }
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
    "#ff6d00",
    "#583cb3",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 6,
      borderRadiusApplication: 'end',
      columnWidth: '45%',
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    labels: {
      style: {
        colors: '#d0d0d0',   
        fontSize: '12px'
      }
    },
    axisBorder: {
      color: '#444'
    },
    axisTicks: {
      color: '#444'
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#bdbdbd'
      }
    }
  },
  grid: {
    borderColor: '#2f2f2f',
    strokeDashArray: 5
  },
  legend: {
    labels: {
      colors: '#e0e0e0'
    }
  },
  tooltip: {
    theme: 'dark'
  }
};

var chart = new ApexCharts(
  document.querySelector("#bar-chart"),
  options
);
chart.render();

//  <------- Area Chart start ------>
var options = {
  series: [
    {
      name: 'Purchase Orders',
      type: 'area',
      data: [20, 35, 28, 45, 38, 70, 55]
    },
    {
      name: 'Sales Orders',
      type: 'line',
      data: [15, 60, 90, 60, 65, 100, 45]
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    background: 'transparent',
    toolbar: { show: false }
  },
  colors: [
    '#2e7d32', // green
    '#d50000'  // red
  ],
  stroke: {
    curve: 'smooth',
    width: [3, 3]
  },
  fill: {
    type: ['gradient', 'solid'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
      stops: [0, 90, 100]
    }
  },
  markers: {
    size: 4,
    colors: ['#2e7d32', '#d50000'],
    strokeColors: '#1e1e1e',
    strokeWidth: 2
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  xaxis: {
    labels: {
      style: {
        colors: '#d0d0d0',
        fontSize: '12px'
      }
    },
    axisBorder: { color: '#444' },
    axisTicks: { color: '#444' }
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: { color: '#2e7d32' }
      },
      labels: {
        style: { colors: '#bdbdbd' }
      }
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: { color: '#d50000' }
      },
      labels: {
        style: { colors: '#bdbdbd' }
      }
    }
  ],
  grid: {
    borderColor: '#2f2f2f',
    strokeDashArray: 5
  },
  legend: {
    labels: {
      colors: '#e0e0e0'
    }
  },
  tooltip: {
    theme: 'dark',
    shared: true,
    intersect: false
  }
};

var chart = new ApexCharts(
  document.querySelector("#area-chart"),
  options
);
chart.render();