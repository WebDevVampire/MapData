
/*[
    {
        "date":"2020-01-22",
        "list":[
            {"confirmed":0,"deaths":0,"recovered":0,"id":"TV"}
        ] 
    }
]*/

// Breakdown by date and country
const investors_WORLD_timeline = [
    {
        "date":"2020-01-22",
        "list":[
            {"totalCompanies":150, "Pension Fund":120,"Sovereign Wealth Fund":10, "Endowment":20, "id":"BR"},
            {"totalCompanies":1060, "Pension Fund":1000,"Sovereign Wealth Fund":50, "Endowment":10, "id":"CA"},
            {"totalCompanies":1310, "Pension Fund":1020,"Sovereign Wealth Fund":250, "Endowment":40, "id":"CN"},
            {"totalCompanies":3050, "Pension Fund":2500,"Sovereign Wealth Fund":500, "Endowment":50, "id":"US"} 
        ]
    },{
        "date":"2020-04-22",
        "list":[
            {"totalCompanies":253, "Pension Fund":210,"Sovereign Wealth Fund":18, "Endowment":25, "id":"BR"},
            {"totalCompanies":1229, "Pension Fund":1100, "Sovereign Wealth Fund":77, "Endowment":52, "id":"CA"},
            {"totalCompanies":1410, "Pension Fund":1050,"Sovereign Wealth Fund":300, "Endowment":60, "id":"CN"},
            {"totalCompanies":3665, "Pension Fund":2800, "Sovereign Wealth Fund":800, "Endowment":65, "id":"US"}            
        ]
    },{
        "date":"2020-10-22",
        "list":[
            {"totalCompanies":270, "Pension Fund":220,"Sovereign Wealth Fund":20, "Endowment":30, "id":"BR"},
            {"totalCompanies":1340, "Pension Fund":1200, "Sovereign Wealth Fund":80, "Endowment":60, "id":"CA"},
            {"totalCompanies":2340, "Pension Fund":1850,"Sovereign Wealth Fund":410, "Endowment":80, "id":"CN"},
            {"totalCompanies":3170, "Pension Fund":2600, "Sovereign Wealth Fund":500, "Endowment":70, "id":"US"}            
        ]
    },{
        "date":"2021-01-22",
        "list":[
            {"totalCompanies":390, "Pension Fund":320,"Sovereign Wealth Fund":30, "Endowment":40, "id":"BR"},
            {"totalCompanies":1905, "Pension Fund":1200, "Sovereign Wealth Fund":100, "Endowment":605, "id":"CA"},
            {"totalCompanies":3412, "Pension Fund":2850,"Sovereign Wealth Fund":480, "Endowment":82, "id":"CN"},
            {"totalCompanies":5695, "Pension Fund":5000, "Sovereign Wealth Fund":600, "Endowment":95, "id":"US"}            
        ]
    }
]

// Breakdown by just date
const investors_TOTAL_timeline = [
    { "Pension Fund":4640, "Sovereign Wealth Fund":810, "Endowment":120, "date":"2020-01-22"},
    { "Pension Fund":5160, "Sovereign Wealth Fund":1195, "Endowment":202, "date":"2020-04-22"},
    { "Pension Fund":5870, "Sovereign Wealth Fund":1010, "Endowment":240, "date":"2020-10-22"},
    { "Pension Fund":9370, "Sovereign Wealth Fund":1210, "Endowment":822, "date":"2021-01-22"}
] // Total companies in world: 11402

// Company name and location
const LP_Company_Domicile = [    
        { "fund": "U.S. International Development Finance Corporation", "id":"United States" },
        { "fund": "Apple", "id":"United States" },
        { "fund": "The Public Pension Fund", "id":"China" },
        { "fund": "IBM", "id":"United States" },
        { "fund": "California Public Employees' Retirement System", "id":"United States" },
        { "fund": "Google", "id":"United States" },
        { "fund": "National Council for Social Security Fund", "id":"China" },
        { "fund": "Canadian Pension Plan", "id":"Canada"},
        { "fund": "Canadian Investment Bank", "id":"Canada"},
        { "fund": "China Development Bank", "id":"China" },
        { "fund": "The Asian Infrastructure Investment Bank", "id":"China" },
        { "fund": "The Ontario Teachers Pension Plan", "id":"Canada"},
        { "fund": "The Alberta Investment Management Corp.", "id":"Canada"},
        { "fund": "Brazil Investment Bank",  "id":"Brazil"},
        { "fund": "Banco de Brasilia",  "id":"Brazil"},
        { "fund": "Brazilian Development Bank",  "id":"Brazil"}
]

// https://covid.amcharts.com/data/js/total_timeline.js

// https://covid.amcharts.com/data/js/world_timeline.js

// https://cdn.amcharts.com/lib/4/geodata/data/countries2.js#