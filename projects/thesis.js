// ---------- data / plain-English translation demo ----------
const demoFindings = {
  nim: {
    raw: "thesis.finding.nim.raw",
    plain: "thesis.finding.nim.plain",
    takeaway: "thesis.finding.nim.takeaway",
  },
  cet1: {
    raw: "thesis.finding.cet1.raw",
    plain: "thesis.finding.cet1.plain",
    takeaway: "thesis.finding.cet1.takeaway",
  },
  distribution: {
    raw: "thesis.finding.distribution.raw",
    plain: "thesis.finding.distribution.plain",
    takeaway: "thesis.finding.distribution.takeaway",
  },
  region: {
    raw: "thesis.finding.region.raw",
    plain: "thesis.finding.region.plain",
    takeaway: "thesis.finding.region.takeaway",
  },
  bigpicture: {
    raw: "thesis.finding.bigpicture.raw",
    plain: "thesis.finding.bigpicture.plain",
    takeaway: "thesis.finding.bigpicture.takeaway",
  },
};

const demoButtons = document.querySelectorAll(".demo-btn");
const demoExampleChips = document.querySelectorAll(".demo-examples .chip");
const demoText = document.getElementById("demo-text");
const demoTakeaway = document.getElementById("demo-takeaway");
let currentExample = "nim";
let currentMode = "raw";

function updateDemoText() {
  const finding = demoFindings[currentExample];

  demoText.textContent = window.t(finding[currentMode]);
  demoTakeaway.textContent =
    window.t("thesis.takeawayPrefix") + window.t(finding.takeaway);
}

demoButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    demoButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.dataset.mode;
    updateDemoText();
  });
});

demoExampleChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    demoExampleChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentExample = chip.dataset.example;
    updateDemoText();
  });
});

updateDemoText();

// ---------- thesis chart: metric trends ----------
// Real yearly averages computed from panel_euro.csv (66 Eurozone banks, 2017–2024).
// Transition period: 2020–2022 (COVID + early tightening). Post period: 2023–2024.
const thesisData = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  tighteningStartIndex: 6,
  series: {
    nim: {
      label: window.t("thesis.chart.nimLabel"),
      values: [2.14, 2.21, 2.05, 1.74, 1.70, 1.77, 2.59, 2.41],
    },
    cet1: {
      label: window.t("thesis.chart.cet1Label"),
      values: [16.11, 16.13, 15.52, 16.94, 17.67, 18.12, 16.76, 16.36],
    },
    dividends: {
      label: window.t("thesis.chart.dividendsLabel"),
      values: [287.5, 205.2, 254.1, 129.5, 255.7, 364.7, 756.6, 796.2],
    },
    buybacks: {
      label: window.t("thesis.chart.buybacksLabel"),
      values: [0.6, 15.5, 1.6, 6.1, 120.1, 24.9, 55.1, 37.5],
    },
  },
};

const ctx = document.getElementById("thesisChart");
let thesisChart;

function renderChart(metricKey) {
  const metric = thesisData.series[metricKey];

  if (thesisChart) {
    thesisChart.data.datasets[0].data = metric.values;
    thesisChart.data.datasets[0].label = metric.label;
    thesisChart.update();
    return;
  }

  thesisChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: thesisData.labels,
      datasets: [
        {
          label: metric.label,
          data: metric.values,
          backgroundColor: thesisData.labels.map((_, i) =>
            i >= thesisData.tighteningStartIndex ? "#C68A2E" : "#6E8B7F"
          ),
          borderRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            footer: (items) =>
              items[0].dataIndex >= thesisData.tighteningStartIndex
                ? window.t("thesis.chart.postTightening")
                : window.t("thesis.chart.preTightening"),
          },
        },
      },
      scales: {
        y: { beginAtZero: false, grid: { color: "#E7E4D9" } },
        x: { grid: { display: false } },
      },
    },
  });
}

renderChart("nim");

document.querySelectorAll(".chart-controls .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chart-controls .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    renderChart(chip.dataset.metric);
  });
});

// ---------- region chart: Eurozone vs non-Eurozone MIX over time ----------
// Computed from panel_euro.csv and panel_non_euro.csv (yearly averages).
new Chart(document.getElementById("regionChart"), {
  type: "line",
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: window.t("thesis.chart.eurozone"),
        data: [0.100, 0.456, 0.231, 0.472, 0.502, 0.444, 0.372, 0.426],
        borderColor: "#C68A2E",
        backgroundColor: "#C68A2E",
        borderDash: [6, 3],
        tension: 0.25,
      },
      {
        label: window.t("thesis.chart.nonEurozone"),
        data: [0.029, 0.046, 0.038, 0.059, 0.105, 0.038, 0.055, 0.052],
        borderColor: "#6E8B7F",
        backgroundColor: "#6E8B7F",
        tension: 0.25,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 12 },
        onHover: dimOtherDatasets,
        onLeave: resetDatasetOpacity,
      },
    },
    scales: {
      y: { title: { display: true, text: window.t("thesis.chart.sharePayout") }, grid: { color: "#E7E4D9" } },
      x: { grid: { display: false } },
    },
  },
});

// ---------- legend hover highlight helper ----------
// On hovering a legend item, fades every other dataset so the hovered one
// stands out. Restores full opacity on mouse-leave.
function fadeColor(colorStr, alpha) {
  if (!colorStr) return colorStr;
  if (colorStr.startsWith("#")) {
    const r = parseInt(colorStr.slice(1, 3), 16);
    const g = parseInt(colorStr.slice(3, 5), 16);
    const b = parseInt(colorStr.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if (colorStr.startsWith("rgba")) {
    return colorStr.replace(/[\d.]+\)$/, `${alpha})`);
  }
  return colorStr;
}

function dimOtherDatasets(evt, legendItem, legend) {
  const chart = legend.chart;
  chart.data.datasets.forEach((ds, i) => {
    if (ds._origBorder === undefined) ds._origBorder = ds.borderColor;
    if (ds._origBg === undefined) ds._origBg = ds.backgroundColor;
    if (i === legendItem.datasetIndex) {
      ds.borderColor = ds._origBorder;
      ds.backgroundColor = ds._origBg;
    } else {
      ds.borderColor = fadeColor(ds._origBorder, 0.12);
      ds.backgroundColor = fadeColor(ds._origBg, 0.05);
    }
  });
  chart.update();
}

function resetDatasetOpacity(evt, legendItem, legend) {
  const chart = legend.chart;
  chart.data.datasets.forEach((ds) => {
    if (ds._origBorder !== undefined) ds.borderColor = ds._origBorder;
    if (ds._origBg !== undefined) ds.backgroundColor = ds._origBg;
  });
  chart.update();
}

// ---------- distribution chart: payout mix density by period ----------
// Real Gaussian KDE computed from panel_euro.csv's MIX values, grouped into
// Pre (2017-2019), Transition (2020-2022), Post (2023-2024), same method as
// Figure 1 in the thesis (density plot, bandwidth-smoothed).
const mixGrid = [-0.05, -0.031, -0.013, 0.006, 0.025, 0.043, 0.062, 0.081, 0.099, 0.118, 0.136, 0.155, 0.174, 0.192, 0.211, 0.23, 0.248, 0.267, 0.286, 0.304, 0.323, 0.342, 0.36, 0.379, 0.397, 0.416, 0.435, 0.453, 0.472, 0.491, 0.509, 0.528, 0.547, 0.565, 0.584, 0.603, 0.621, 0.64, 0.658, 0.677, 0.696, 0.714, 0.733, 0.752, 0.77, 0.789, 0.808, 0.826, 0.845, 0.864, 0.882, 0.901, 0.919, 0.938, 0.957, 0.975, 0.994, 1.013, 1.031, 1.05];

new Chart(document.getElementById("distributionChart"), {
  type: "line",
  data: {
    labels: mixGrid.map((v) => v.toFixed(2)),
    datasets: [
      {
        label: window.t("thesis.chart.pre"),
        data: [2.248, 2.39, 2.474, 2.494, 2.447, 2.338, 2.176, 1.971, 1.739, 1.495, 1.251, 1.021, 0.811, 0.628, 0.474, 0.348, 0.25, 0.175, 0.119, 0.079, 0.051, 0.033, 0.02, 0.012, 0.007, 0.004, 0.002, 0.001, 0.001, 0.0, 0.0, 0.0, 0.0, 0.001, 0.001, 0.002, 0.004, 0.006, 0.011, 0.017, 0.028, 0.042, 0.063, 0.091, 0.129, 0.178, 0.238, 0.311, 0.395, 0.487, 0.586, 0.686, 0.781, 0.866, 0.935, 0.982, 1.004, 0.999, 0.967, 0.912],
        borderColor: "#8B8878",
        backgroundColor: "rgba(139,136,120,0.15)",
        fill: true,
        pointRadius: 0,
        tension: 0.35,
        borderWidth: 2,
      },
      {
        label: window.t("thesis.chart.transition"),
        data: [1.517, 1.597, 1.644, 1.655, 1.628, 1.566, 1.473, 1.354, 1.218, 1.071, 0.922, 0.777, 0.642, 0.52, 0.414, 0.325, 0.253, 0.197, 0.154, 0.123, 0.101, 0.087, 0.078, 0.073, 0.071, 0.071, 0.071, 0.071, 0.071, 0.071, 0.07, 0.068, 0.065, 0.062, 0.06, 0.057, 0.057, 0.059, 0.064, 0.075, 0.093, 0.12, 0.157, 0.207, 0.271, 0.351, 0.446, 0.555, 0.678, 0.809, 0.944, 1.077, 1.202, 1.311, 1.398, 1.457, 1.485, 1.478, 1.439, 1.369],
        borderColor: "#6E8B7F",
        backgroundColor: "rgba(110,139,127,0.15)",
        fill: true,
        pointRadius: 0,
        tension: 0.35,
        borderWidth: 2,
      },
      {
        label: window.t("thesis.chart.post"),
        data: [1.692, 1.796, 1.864, 1.892, 1.877, 1.822, 1.731, 1.61, 1.468, 1.312, 1.151, 0.993, 0.842, 0.705, 0.582, 0.477, 0.388, 0.314, 0.255, 0.207, 0.17, 0.141, 0.118, 0.1, 0.085, 0.073, 0.063, 0.054, 0.046, 0.039, 0.033, 0.027, 0.023, 0.019, 0.016, 0.015, 0.016, 0.02, 0.026, 0.037, 0.054, 0.077, 0.109, 0.151, 0.205, 0.273, 0.354, 0.448, 0.554, 0.668, 0.788, 0.906, 1.017, 1.115, 1.194, 1.247, 1.272, 1.266, 1.231, 1.168],
        borderColor: "#C68A2E",
        backgroundColor: "rgba(198,138,46,0.15)",
        fill: true,
        pointRadius: 0,
        tension: 0.35,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 12 },
        onHover: dimOtherDatasets,
        onLeave: resetDatasetOpacity,
      },
      tooltip: { enabled: false },
    },
    scales: {
      y: { title: { display: true, text: window.t("thesis.chart.density") }, grid: { color: "#E7E4D9" } },
      x: {
        title: { display: true, text: window.t("thesis.chart.payoutMix") },
        grid: { display: false },
        ticks: { callback: (val, i) => (i % 10 === 0 ? mixGrid[i].toFixed(1) : "") },
      },
    },
  },
});

// ---------- group comparison chart: high vs low CET1 / NIM ----------
// Computed from panel_euro.csv, split at each variable's sample median (lagged values,
// matching the thesis's Table 2 and Table 3).
new Chart(document.getElementById("groupsChart"), {
  type: "bar",
  data: {
    labels: ["CET1", "NIM"],
    datasets: [
      { label: window.t("thesis.chart.high"), data: [0.445, 0.259], backgroundColor: "#C68A2E" },
      { label: window.t("thesis.chart.low"), data: [0.352, 0.537], backgroundColor: "#6E8B7F" },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 12 },
        onHover: dimOtherDatasets,
        onLeave: resetDatasetOpacity,
      },
    },
    scales: {
      y: { title: { display: true, text: window.t("thesis.chart.avgPayout") }, grid: { color: "#E7E4D9" } },
      x: { grid: { display: false } },
    },
  },
});

// ---------- coefficients chart: baseline fixed-effects / Driscoll-Kraay results ----------
// Hardcoded from Table 4 of the thesis (Driscoll-Kraay coefficients, baseline model).
new Chart(document.getElementById("coefficientsChart"), {
  type: "bar",
  data: {
    labels: ["Transition", "Post", "NIM", "NIM × Post", "CET1", "CET1 × Post", "ROAA"],
    datasets: [
      {
        label: window.t("thesis.chart.effect"),
        data: [0.077, -0.363, 0.052, 0.068, -0.008, 0.021, -0.097],
        backgroundColor: [
          "#B9B6A9", "#B9B6A9", "#B9B6A9",
          "#C68A2E", "#B9B6A9", "#C68A2E", "#B9B6A9",
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          afterLabel: (item) => {
            const sig = { "NIM × Post": window.t("thesis.chart.sig1"), "CET1 × Post": window.t("thesis.chart.sig5"), "ROAA": window.t("thesis.chart.sig10") };
            return sig[item.label] ? sig[item.label] : window.t("thesis.chart.notSig");
          },
        },
      },
    },
    scales: {
      x: { title: { display: true, text: window.t("thesis.chart.coefficient") }, grid: { color: "#E7E4D9" } },
      y: { grid: { display: false } },
    },
  },
});

// ---------- chart view tab switching ----------
const viewTabs = document.querySelectorAll(".view-tab");
const chartViews = document.querySelectorAll(".chart-view");

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    viewTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    chartViews.forEach((view) => {
      view.hidden = view.id !== `view-${tab.dataset.view}`;
    });
  });
});
