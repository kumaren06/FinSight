const costData = {
    monthlyCost: 12.45,
    yesterdayCost: 0.82,
    dailyChange: 12.4,

    dailyCosts: [
        { date: "8/11", cost: 0.52 },
        { date: "8/12", cost: 0.63 },
        { date: "8/13", cost: 0.71 },
        { date: "8/14", cost: 0.73 },
        { date: "8/15", cost: 0.82 }
    ],

    serviceCosts: [
        { service: "Amazon EC2", cost: 5.20 },
        { service: "Amazon S3", cost: 2.10 },
        { service: "AWS Lambda", cost: 0.43 },
        { service: "Amazon CloudFront", cost: 0.18 }
    ]
};


document.getElementById("monthly-cost").textContent =
    `$${costData.monthlyCost.toFixed(2)}`;

document.getElementById("yesterday-cost").textContent =
    `$${costData.yesterdayCost.toFixed(2)}`;

document.getElementById("daily-change").textContent =
    `+${costData.dailyChange}%`;


const dailyCostArea = document.getElementById("daily-cost");

dailyCostArea.innerHTML = "";

costData.dailyCosts.forEach(item => {

    const row = document.createElement("p");

    row.textContent =
        `${item.date} : $${item.cost.toFixed(2)}`;

    dailyCostArea.appendChild(row);
});


const serviceCostArea = document.getElementById("service-cost");

serviceCostArea.innerHTML = "";

costData.serviceCosts.forEach(item => {

    const row = document.createElement("div");

    row.className = "service-item";

    row.innerHTML = `
        <span>${item.service}</span>
        <span>$${item.cost.toFixed(2)}</span>
    `;

    serviceCostArea.appendChild(row);
});


const API_URL = "https://rvfp1taiq1.execute-api.ap-northeast-1.amazonaws.com/cost";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        const realMonthlyCost = parseFloat(data.monthlyCost);

        document.getElementById("monthly-cost").textContent =
            `$${realMonthlyCost.toFixed(2)}`;
    })
    .catch(error => {
        console.error("Cost APIの取得に失敗しました:", error);
    });
