const taxiDatabase = {
    "can_east": {
        "cities": {
            "Montreal, QC": [
                { name: "Taxi Diamond", info: "Largest operational fleet matrix in Montreal", phone: "(514) 273-6111", link: "5142736111" },
                { name: "Taxi Téo", info: "Eco-friendly 100% green electric fleet options", phone: "(514) 273-1111", link: "5142731111" }
            ],
            "Quebec City, QC": [{ name: "Taxi Coop Québec", info: "Primary transport cooperative", phone: "(418) 525-5191", link: "4185255191" }],
            "Gatineau, QC": [{ name: "Taxi Coop Gatineau", info: "Reliable provincial boundary transit", phone: "(819) 777-5611", link: "8197775611" }],
            "Sherbrooke, QC": [{ name: "Taxis Sherbrooke", info: "Serving Eastern Townships loops", phone: "(819) 562-3333", link: "8195623333" }],
            "Halifax, NS": [
                { name: "Casino Taxi", info: "Advanced satellite dispatch across HRM", phone: "(902) 429-6666", link: "9024296666" },
                { name: "Yellow Cab Halifax", info: "Corporate and standard municipality route transits", phone: "(902) 420-0000", link: "9024200000" }
            ],
            "Sydney, NS": [{ name: "City Printer Cabs", info: "Industrial Cape Breton local transit loops", phone: "(902) 564-5555", link: "9025645555" }],
            "Truro, NS": [{ name: "Snelgrove's Taxi", info: "Hubtown specialized route network transits", phone: "(902) 895-4444", link: "9028954444" }],
            "Moncton, NB": [
                { name: "White Cab", info: "Major Greater Moncton fleet provider operating 24/7", phone: "(506) 857-3333", link: "5068573333" },
                { name: "Air Cab", info: "Dieppe, Moncton, and local airport transfers", phone: "(506) 857-2000", link: "5068572000" }
            ],
            "Saint John, NB": [{ name: "Diamond Cabs", info: "Serving Saint John city grids and coastal sectors", phone: "(506) 648-1111", link: "5066481111" }],
            "Fredericton, NB": [{ name: "Checker Cab", info: "Prompt capital region university network grids", phone: "(506) 450-4444", link: "5064504444" }],
            "St. John's, NL": [
                { name: "Jiffy Cabs", info: "Iconic Avalon peninsula rapid city fleet provider", phone: "(709) 722-4222", link: "7097224222" },
                { name: "City Cabs", info: "Prompt regional dispatch and local transit lanes", phone: "(709) 726-2222", link: "7097262222" }
            ],
            "Corner Brook, NL": [{ name: "Corner Brook Taxi", info: "Serving West Coast regional transport corridors", phone: "(709) 634-5634", link: "7096345634" }],
            "Charlottetown, PE": [
                { name: "City Cab PEI", info: "Primary local transit & cruise terminal transfer docks", phone: "(902) 892-6555", link: "9028926555" },
                { name: "Yellow Cab PEI", info: "Safe local fleet across Queens County routes", phone: "(902) 566-6666", link: "9025666666" }
            ],
            "Summerside, PE": [{ name: "Summerside Taxi", info: "Prompt localized network transit corridors", phone: "(902) 436-4242", link: "9024364242" }]
        }
    },
    "can_west": {
        "cities": {
            "Toronto, ON": [
                { name: "Beck Taxi", info: "24/7 GTA Fleet Logistics & Management", phone: "(416) 751-5555", link: "4167515555" },
                { name: "Co-op Cabs", info: "Traditional Local Red & Yellow Fleet", phone: "(416) 504-2667", link: "4165042667" }
            ],
            "Ottawa, ON": [{ name: "Coventry Connections", info: "Capital Region Dispatch Network", phone: "(613) 744-3333", link: "6137443333" }],
            "Vancouver, BC": [
                { name: "Vancouver Taxi Co.", info: "Metro Core Dispatches and Airport Routes", phone: "(604) 871-1111", link: "6048711111" },
                { name: "Yellow Cab Vancouver", info: "Eco-Friendly Hybrid Fleet Grids", phone: "(604) 681-1111", link: "6046811111" }
            ],
            "Calgary, AB": [
                { name: "Associated Cabs", info: "Calgary Fleet Corporate Travel & YYC Services", phone: "(403) 299-1111", link: "4032991111" },
                { name: "Checker Cabs", info: "Citywide Safe Fast Response Travel", phone: "(403) 299-9999", link: "4032999999" }
            ],
            "Edmonton, AB": [{ name: "Yellow Cab Edmonton", info: "Greater Edmonton Area & YEG Support", phone: "(780) 462-3456", link: "7804623456" }],
            "Winnipeg, MB": [
                { name: "Duffy's Taxi", info: "Trusted Local Manitoba Transit Fleet Since 1948", phone: "(204) 925-0101", link: "2049250101" },
                { name: "Unicity Taxi", info: "Prompt Central Metropolitan Ground Dispatch", phone: "(204) 925-3131", link: "2049253131" }
            ]
        }
    },
    "us_east": {
        "cities": {
            "New York City, NY": [
                { name: "Carmel Car & Limo", info: "NYC TLC Certified Airport and Borough Connections", phone: "(212) 666-6666", link: "2126666666" },
                { name: "Dial 7 Car Limo", info: "NYC Elite Ride Premium Fleet Network", phone: "(212) 777-7777", link: "2127777777" }
            ],
            "Chicago, IL": [{ name: "Flash Cab Fleet", info: "Loop Circuit Transit Infrastructure & ORD Support", phone: "(773) 561-4444", link: "7735614444" }],
            "Miami, FL": [{ name: "Miami-Dade Taxi", info: "Serving South Beach, Downtown, and MIA Terminals", phone: "(305) 444-4444", link: "3054444444" }],
            "Orlando, FL": [{ name: "Mears Taxi", info: "Official Theme Park Resorts Luxury Logistics Fleet", phone: "(407) 422-2222", link: "4074222222" }],
            "Atlanta, GA": [{ name: "Checker Cab Atlanta", info: "Metro Transit Corridors & Hartsfield-Jackson Hub", phone: "(404) 351-1111", link: "4043511111" }],
            "Boston, MA": [{ name: "Boston Cab Association", info: "Safe Local Travel Fleet & Logan Airport Drops", phone: "(617) 536-5010", link: "6175365010" }],
            "Philadelphia, PA": [{ name: "Philly 215 Get-A-Cab", info: "Prompt Center City Rapid Response Dispatch", phone: "(215) 438-2222", link: "2154382222" }],
            "Detroit, MI": [{ name: "Detroit Checker Cab", info: "Comprehensive Motor City Regional Network Links", phone: "(313) 963-7000", link: "3139637000" }]
        }
    },
    "us_west": {
        "cities": {
            "Los Angeles, CA": [{ name: "LA City Cab", info: "Authorized LAX Hub Ground Fleet Pickups", phone: "(888) 248-9222", link: "8882489222" }],
            "San Francisco, CA": [{ name: "SF Yellow Cab", info: "Cooperative Bay Area Specialized Local Fleets", phone: "(415) 626-2345", link: "4156262345" }],
            "Houston, TX": [{ name: "Houston Yellow Cab", info: "Serving Downtown Center & Local IAH Transit Loops", phone: "(713) 236-1111", link: "7132361111" }],
            "Dallas, TX": [{ name: "Yellow Cab Dallas", info: "DFW Metroplex Ground Service Fleet Connections", phone: "(214) 426-6262", link: "2144266262" }],
            "Austin, TX": [{ name: "Austin Yellow Cab", info: "Serving Travis County & Austin-Bergstrom Hubs", phone: "(512) 452-9999", link: "5124529999" }],
            "Phoenix, AZ": [{ name: "Discount Cab", info: "Serving Valley of the Sun Transit Circuits & PHX", phone: "(602) 200-2000", link: "6022002000" }],
            "Seattle, WA": [{ name: "Seattle Yellow Cab", info: "Serving King County & Sea-Tac Transport Links", phone: "(206) 622-6500", link: "2066226500" }],
            "Denver, CO": [{ name: "Metro Taxi Denver", info: "Mile High City Dedicated Regional Transit Provider", phone: "(303) 333-3333", link: "3033333333" }],
            "Las Vegas, NV": [{ name: "Whittlesea Blue Cab", info: "Serving The Main Strip & Harry Reid Intl Runways", phone: "(702) 384-6111", link: "7023846111" }]
        }
    }
};

function updateCityDropdown() {
    const zone = document.getElementById("regionSelect").value;
    const citySelect = document.getElementById("citySelect");
    
    citySelect.innerHTML = '<option value="">-- Choose City --</option>';
    
    if (!zone) {
        citySelect.disabled = true;
        clearDisplay();
        return;
    }
    
    const cityList = Object.keys(taxiDatabase[zone].cities);
    cityList.forEach(city => {
        let opt = document.createElement("option");
        opt.value = city;
        opt.textContent = city;
        citySelect.appendChild(opt);
    });
    
    citySelect.disabled = false;
}

function renderTaxiList() {
    const zone = document.getElementById("regionSelect").value;
    const city = document.getElementById("citySelect").value;
    const welcomeBox = document.getElementById("welcomeBox");
    const resultsHeader = document.getElementById("resultsHeader");
    const taxiList = document.getElementById("taxiList");
    
    if (!zone || !city) {
        clearDisplay();
        return;
    }
    
    welcomeBox.style.display = "none";
    resultsHeader.textContent = "Active Fleets in " + city;
    resultsHeader.style.display = "block";
    
    const dataRecords = taxiDatabase[zone].cities[city];
    let outputHTML = "";
    
    dataRecords.forEach(taxi => {
        outputHTML += '<div class="taxi-card"><div class="taxi-details"><div class="taxi-name">' + taxi.name + '</div><div class="taxi-info">' + taxi.info + '</div></div><a href="tel:' + taxi.link + '" class="call-btn">📞 Call ' + taxi.phone + '</a></div>';
    });
    
    taxiList.innerHTML = outputHTML;
}

function clearDisplay() {
    document.getElementById("welcomeBox").style.display = "block";
    document.getElementById("resultsHeader").style.display = "none";
    document.getElementById("taxiList").innerHTML = "";
}
