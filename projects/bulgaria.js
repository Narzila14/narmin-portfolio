// ---------- data / plain-English translation demo ----------
const demoFindings = {
  satisfaction: {
    raw: "bulgaria.finding.satisfaction.raw",
    plain: "bulgaria.finding.satisfaction.plain",
    takeaway: "bulgaria.finding.satisfaction.takeaway",
  },
  relationships: {
    raw: "bulgaria.finding.relationships.raw",
    plain: "bulgaria.finding.relationships.plain",
    takeaway: "bulgaria.finding.relationships.takeaway",
  },
  agedu: {
    raw: "bulgaria.finding.agedu.raw",
    plain: "bulgaria.finding.agedu.plain",
    takeaway: "bulgaria.finding.agedu.takeaway",
  },
  nomatter: {
    raw: "bulgaria.finding.nomatter.raw",
    plain: "bulgaria.finding.nomatter.plain",
    takeaway: "bulgaria.finding.nomatter.takeaway",
  },
  bigpicture: {
    raw: "bulgaria.finding.bigpicture.raw",
    plain: "bulgaria.finding.bigpicture.plain",
    takeaway: "bulgaria.finding.bigpicture.takeaway",
  },
};

const demoButtons = document.querySelectorAll(".demo-btn");
const demoExampleChips = document.querySelectorAll(".demo-examples .chip");
const demoText = document.getElementById("demo-text");
const demoTakeaway = document.getElementById("demo-takeaway");
let currentExample = "satisfaction";
let currentMode = "raw";

function updateDemoText() {
  const finding = demoFindings[currentExample];
  demoText.textContent = window.t(finding[currentMode]);
  demoTakeaway.textContent =
    window.t("bulgaria.takeawayPrefix") + window.t(finding.takeaway);
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
document.addEventListener("languagechange", updateDemoText);

// ---------- legend hover highlight helper ----------
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

// ---------- chart 1: happiness rate by age group ----------
// Computed directly from the SPSS dataset (Dummy_Happy by C_Age).
new Chart(document.getElementById("ageChart"), {
  type: "bar",
  data: {
    labels: ["15–29", "30–49", "50+"],
    datasets: [
      {
        label: "Share reporting happy",
        data: [0.945, 0.732, 0.559],
        backgroundColor: ["#C68A2E", "#6E8B7F", "#B9B6A9"],
        borderRadius: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { title: { display: true, text: "Share reporting happy" }, min: 0, max: 1, grid: { color: "#E7E4D9" } },
      x: { grid: { display: false } },
    },
  },
});

// ---------- chart 2: happiness rate by education level ----------
new Chart(document.getElementById("eduChart"), {
  type: "bar",
  data: {
    labels: ["Lower", "Medium", "Higher"],
    datasets: [
      {
        label: "Share reporting happy",
        data: [0.530, 0.651, 0.774],
        backgroundColor: ["#B9B6A9", "#6E8B7F", "#C68A2E"],
        borderRadius: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { title: { display: true, text: "Share reporting happy" }, min: 0, max: 1, grid: { color: "#E7E4D9" } },
      x: { grid: { display: false } },
    },
  },
});

// ---------- chart 3: happiness rate by life satisfaction score ----------
new Chart(document.getElementById("satisfactionChart"), {
  type: "line",
  data: {
    labels: ["0*", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Share reporting happy",
        data: [0.946, 0.138, 0.093, 0.215, 0.455, 0.507, 0.651, 0.743, 0.873, 0.862],
        borderColor: "#C68A2E",
        backgroundColor: "rgba(198,138,46,0.15)",
        fill: true,
        tension: 0.3,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { title: { display: true, text: "Share reporting happy" }, min: 0, max: 1, grid: { color: "#E7E4D9" } },
      x: { title: { display: true, text: "Life satisfaction score (1 = dissatisfied, 9 = satisfied)" }, grid: { display: false } },
    },
  },
});

// ---------- chart 4: happiness rate by particularised trust quartile ----------
new Chart(document.getElementById("trustChart"), {
  type: "bar",
  data: {
    labels: ["Q1 (highest trust)", "Q2", "Q3", "Q4 (lowest trust)"],
    datasets: [
      {
        label: "Share reporting happy",
        data: [0.752, 0.712, 0.684, 0.544],
        backgroundColor: ["#C68A2E", "#C9A867", "#9CAE9F", "#B9B6A9"],
        borderRadius: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { title: { display: true, text: "Share reporting happy" }, min: 0, max: 1, grid: { color: "#E7E4D9" } },
      x: { title: { display: true, text: "Particularised trust (family, neighbours, personal contacts)" }, grid: { display: false } },
    },
  },
});

// ---------- chart 5: logistic regression results ----------
// Transcribed from Table 3 of the paper (odds ratios, Exp(B)).
new Chart(document.getElementById("regressionChart"), {
  type: "bar",
  data: {
    labels: ["Generalised trust", "Particularised trust", "National political trust", "Intl. political trust", "Life satisfaction", "Lower education", "Medium education", "Age 15–29", "Age 30–49", "Male"],
    datasets: [
      {
        label: "Odds ratio (Exp(B))",
        data: [0.915, 0.751, 0.885, 1.005, 1.111, 0.562, 0.684, 13.833, 1.879, 1.171],
        backgroundColor: [
          "#B9B6A9", "#C68A2E", "#B9B6A9", "#B9B6A9",
          "#C68A2E", "#C68A2E", "#C68A2E", "#C68A2E", "#C68A2E", "#B9B6A9",
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
            const sig = {
              "Particularised trust": "significant at 1%",
              "Life satisfaction": "significant at 1%",
              "Lower education": "significant at 5%",
              "Medium education": "significant at 5%",
              "Age 15–29": "significant at 1%",
              "Age 30–49": "significant at 1%",
            };
            return sig[item.label] ? sig[item.label] : "not statistically significant";
          },
        },
      },
    },
    scales: {
      x: { title: { display: true, text: "Odds ratio (1.0 = no effect)" }, grid: { color: "#E7E4D9" } },
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
