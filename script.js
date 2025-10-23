// Unit definitions with short forms
const unitData = {
    length: {
        units: {
            km: "Kilometer (km)",
            mi: "Mile (mi)",
            nm: "Nautical Mile (nm)",
            m: "Meter (m)",
            yd: "Yard (yd)",
            ft: "Foot (ft)",
            in: "Inch (in)",
            cm: "Centimeter (cm)",
            mm: "Millimeter (mm)"
        },
        factors: {
            km: 0.001,
            mi: 0.000621371,
            nm: 0.000539957,
            m: 1,
            yd: 1.09361,
            ft: 3.28084,
            in: 39.3701,
            cm: 100,
            mm: 1000
        }
    },
    weight: {
        units: {
            tonne: "Tonne (tonne)",
            t: "Metric Ton (t)",
            quintal: "Quintal (quintal)",
            kg: "Kilogram (kg)",
            lb: "Pound (lb)",
            st: "Stone (st)",
            oz: "Ounce (oz)",
            g: "Gram (g)",
            carat: "Carat (carat)",
            mg: "Milligram (mg)"
        },
        factors: {
            tonne: 0.001,
            t: 0.001,
            quintal: 0.01,
            kg: 1,
            lb: 2.20462,
            st: 0.157473,
            oz: 35.274,
            g: 1000,
            carat: 5000,
            mg: 1000000
        }
    },
    temperature: {
        units: {
            "°F": "Fahrenheit (°F)",
            "°C": "Celsius (°C)",
            K: "Kelvin (K)"
        },
        factors: {
            "°F": 1,
            "°C": 1,
            K: 1
        }
    },
    volume: {
        units: {
            gal: "Gallon (gal)",
            L: "Liter (L)",
            qt: "Quart (qt)",
            pt: "Pint (pt)",
            cup: "Cup (cup)",
            fl_oz: "Fluid Ounce (fl oz)",
            tbsp: "Tablespoon (tbsp)",
            tsp: "Teaspoon (tsp)",
            mL: "Milliliter (mL)"
        },
        factors: {
            gal: 0.264172,
            L: 1,
            qt: 1.05669,
            pt: 2.11338,
            cup: 4.22675,
            fl_oz: 33.814,
            tbsp: 67.628,
            tsp: 202.884,
            mL: 1000
        }
    },
    area: {
        units: {
            km2: "Square Kilometer (km²)",
            mi2: "Square Mile (mi²)",
            ha: "Hectare (ha)",
            bigha: "Bigha (bigha)",
            kotha: "Kotha (kotha)",
            ac: "Acre (ac)",
            ar: "Are (ar)",
            m2: "Square Meter (m²)",
            yd2: "Square Yard (yd²)",
            ft2: "Square Foot (ft²)",
            in2: "Square Inch (in²)",
            cm2: "Square Centimeter (cm²)",
            lecha: "Lecha (lecha)"
        },
        factors: {
            km2: 0.000001,
            mi2: 3.86102e-7,
            ha: 0.0001,
            bigha: 0.0007475,  // 1 bigha = 1337.8032 m² (factor = 1/1337.8032)
            kotha: 0.003737,   // 1 kotha = 267.56064 m² (factor = 1/267.56064)
            ac: 0.000247105,
            ar: 0.01,
            m2: 1,
            yd2: 1.19599,
            ft2: 10.7639,
            in2: 1550,
            cm2: 10000,
            lecha: 0.07475    // 1 lecha = 13.378032 m² (factor = 1/13.378032)
        }
    },
    time: {
        units: {
            year: "Year (year)",
            month: "Month (month)",
            week: "Week (week)",
            day: "Day (day)",
            h: "Hour (h)",
            min: "Minute (min)",
            s: "Second (s)",
            ms: "Millisecond (ms)"
        },
        factors: {
            year: 0.0000000317098,
            month: 0.000000380517,
            week: 0.00000165344,
            day: 0.0000115741,
            h: 0.000277778,
            min: 0.0166667,
            s: 1,
            ms: 1000
        }
    },
    speed: {
        units: {
            c: "Speed of Light (c)",
            knot: "Knot (knot)",
            mph: "Mile per Hour (mph)",
            km_h: "Kilometer per Hour (km/h)",
            m_s: "Meter per Second (m/s)",
            ft_s: "Foot per Second (ft/s)"
        },
        factors: {
            c: 0.00000000333564,  // Speed of light in m/s is 299,792,458, so factor is 1/299792458
            knot: 1.94384,
            mph: 2.23694,
            km_h: 3.6,
            m_s: 1,
            ft_s: 3.28084
        }
    },
    data: {
        units: {
            PB: "Petabyte (PB)",
            TB: "Terabyte (TB)",
            GB: "Gigabyte (GB)",
            MB: "Megabyte (MB)",
            KB: "Kilobyte (KB)",
            B: "Byte (B)",
            bit: "Bit (bit)",
            PiB: "Pebibyte (PiB)",
            TiB: "Tebibyte (TiB)",
            GiB: "Gibibyte (GiB)",
            MiB: "Mebibyte (MiB)",
            KiB: "Kibibyte (KiB)"
        },
        factors: {
            PB: 0.000000000000001,
            TB: 0.000000000001,
            GB: 0.000000001,
            MB: 0.000001,
            KB: 0.001,
            B: 1,
            bit: 8,
            PiB: 0.00000000000000088817841970012523233890533447265625,
            TiB: 0.0000000000009094947017729282379150390625,
            GiB: 0.000000000931322574615478515625,
            MiB: 0.00000095367431640625,
            KiB: 0.0009765625
        }
    },
    energy: {
        units: {
            J: "Joule (J)",
            kJ: "Kilojoule (kJ)",
            cal: "Calorie (cal)",
            kcal: "Kilocalorie (kcal)",
            Wh: "Watt-hour (Wh)",
            kWh: "Kilowatt-hour (kWh)",
            BTU: "British Thermal Unit (BTU)",
            W: "Watt (W)",
            kW: "Kilowatt (kW)",
            hp: "Horsepower (hp)",
            "BTU/h": "BTU per hour (BTU/h)"
        },
        factors: {
            J: 1,
            kJ: 0.001,
            cal: 0.239006,
            kcal: 0.000239006,
            Wh: 0.000277778,
            kWh: 0.000000277778,
            BTU: 0.000947817,
            W: 1,
            kW: 0.001,
            hp: 0.00134102,
            "BTU/h": 0.000293071
        }
    },
    angle: {
        units: {
            "°": "Degree (°)",
            rad: "Radian (rad)",
            gon: "Grad (gon)",
            tr: "Turn (tr)",
            arcmin: "Minute of arc (arcmin)",
            arcsec: "Second of arc (arcsec)"
        },
        factors: {
            "°": 1,
            rad: 0.01745329252,
            gon: 0.9,
            tr: 360,
            arcmin: 0.01666666667,
            arcsec: 0.00027777778
        }
    }
};

// Get DOM elements
const category = document.getElementById('category');
const fromValue = document.getElementById('from-value');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

// Initialize
updateUnitOptions();

// Update unit options based on category
function updateUnitOptions() {
    const selectedCategory = category.value;
    const units = unitData[selectedCategory].units;
    
    // Clear existing options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    // Get unit keys and sort them in descending order (largest to smallest)
    const unitKeys = Object.keys(units);
    
    // For temperature, use fixed order
    if (selectedCategory === 'temperature') {
        const tempOrder = ['°F', '°C', 'K'];
        tempOrder.forEach(key => {
            addOption(key, units[key]);
        });
    } else if (selectedCategory === 'area') {
        // Fixed order for area units
        const areaOrder = ['km2', 'mi2', 'ha', 'bigha', 'kotha', 'ac', 'ar', 'm2', 'yd2', 'ft2', 'in2', 'cm2', 'lecha'];
        areaOrder.forEach(key => {
            addOption(key, units[key]);
        });
    } else if (selectedCategory === 'data') {
        // Fixed order for data units - decimal first, then binary
        const dataOrder = ['PB', 'TB', 'GB', 'MB', 'KB', 'B', 'bit', 'PiB', 'TiB', 'GiB', 'MiB', 'KiB'];
        dataOrder.forEach(key => {
            addOption(key, units[key]);
        });
    } else if (selectedCategory === 'angle') {
        // Fixed order for angle units
        const angleOrder = ['tr', '°', 'gon', 'rad', 'arcmin', 'arcsec'];
        angleOrder.forEach(key => {
            addOption(key, units[key]);
        });
    } else {
        // For other categories, sort by factor value (ascending order of factor means larger unit)
        // Since smaller factor means larger unit (e.g., km has factor 0.001, which is smaller than m's factor 1)
        unitKeys.sort((a, b) => {
            const factorA = unitData[selectedCategory].factors[a];
            const factorB = unitData[selectedCategory].factors[b];
            return factorA - factorB; // Sort ascending by factor (largest units first)
        });
        
        unitKeys.forEach(key => {
            addOption(key, units[key]);
        });
    }
    
    // Set default selections
    if (selectedCategory === 'length') {
        fromUnit.value = 'm';
        toUnit.value = 'km';
    } else if (selectedCategory === 'weight') {
        fromUnit.value = 'kg';
        toUnit.value = 'lb';
    } else if (selectedCategory === 'temperature') {
        fromUnit.value = '°C';
        toUnit.value = '°F';
    } else if (selectedCategory === 'volume') {
        fromUnit.value = 'L';
        toUnit.value = 'gal';
    } else if (selectedCategory === 'area') {
        fromUnit.value = 'm2';
        toUnit.value = 'ft2';
    } else if (selectedCategory === 'time') {
        fromUnit.value = 'day';
        toUnit.value = 'month';
    } else if (selectedCategory === 'speed') {
        fromUnit.value = 'm_s';
        toUnit.value = 'km_h';
    } else if (selectedCategory === 'data') {
        fromUnit.value = 'GiB';
        toUnit.value = 'MiB';
    } else if (selectedCategory === 'energy') {
        fromUnit.value = 'J';
        toUnit.value = 'kJ';
    } else if (selectedCategory === 'angle') {
        fromUnit.value = '°';
        toUnit.value = 'rad';
    }
}

// Helper function to add option
function addOption(value, text) {
    const option1 = document.createElement('option');
    option1.value = value;
    option1.textContent = text;
    fromUnit.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = value;
    option2.textContent = text;
    toUnit.appendChild(option2);
}

// Format number according to requirements
function formatNumber(num) {
    // Round to 2 decimal places
    const rounded = Math.round(num * 100) / 100;
    
    // Convert to string and remove trailing zeros and decimal point if needed
    let str = rounded.toString();
    
    // If there's a decimal point
    if (str.includes('.')) {
        // Check if there are two zeros after decimal
        if (str.endsWith('.00')) {
            str = str.substring(0, str.indexOf('.'));
        } else {
            // Remove trailing zeros after decimal
            str = str.replace(/\.?0+$/, '');
        }
    }
    
    return str;
}

// Format large numbers with Indian comma separators
function formatLargeNumber(num) {
    // First apply our standard decimal formatting
    const formatted = formatNumber(num);
    
    // Split into integer and decimal parts
    const parts = formatted.split('.');
    let integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    
    // Add comma separators using Indian numbering system
    if (integerPart.length > 3) {
        // Indian numbering system: first three digits, then every two digits
        let lastThree = integerPart.substring(integerPart.length - 3);
        let otherNumbers = integerPart.substring(0, integerPart.length - 3);
        
        if (otherNumbers !== '') {
            // Add commas to the remaining part, every two digits
            otherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
            integerPart = otherNumbers + ',' + lastThree;
        }
    }
    
    return integerPart + decimalPart;
}

// Convert based on current category
function convert() {
    const value = parseFloat(fromValue.value);
    
    // Check if value is valid
    if (isNaN(value)) {
        result.textContent = '';
        return;
    }

    const selectedCategory = category.value;
    const from = fromUnit.value;
    const to = toUnit.value;
    const factors = unitData[selectedCategory].factors;

    let convertedValue;
    let fromUnitShort = from;
    let toUnitShort = to;

    if (selectedCategory === 'temperature') {
        // Special handling for temperature
        if (from === '°C' && to === '°F') {
            convertedValue = (value * 9/5) + 32;
        } else if (from === '°C' && to === 'K') {
            convertedValue = value + 273.15;
        } else if (from === '°F' && to === '°C') {
            convertedValue = (value - 32) * 5/9;
        } else if (from === '°F' && to === 'K') {
            convertedValue = (value - 32) * 5/9 + 273.15;
        } else if (from === 'K' && to === '°C') {
            convertedValue = value - 273.15;
        } else if (from === 'K' && to === '°F') {
            convertedValue = (value - 273.15) * 9/5 + 32;
        } else {
            convertedValue = value; // Same unit
        }
    } else if (selectedCategory === 'time' && to === 'month') {
        // Special handling for time conversion to months
        // Convert the input value to days first
        let totalDays;
        
        if (from === 'year') {
            totalDays = value * 365;
        } else if (from === 'month') {
            totalDays = value * 30;
        } else if (from === 'week') {
            totalDays = value * 7;
        } else if (from === 'day') {
            totalDays = value;
        } else if (from === 'h') {
            totalDays = value / 24;
        } else if (from === 'min') {
            totalDays = value / (24 * 60);
        } else if (from === 's') {
            totalDays = value / (24 * 3600);
        } else if (from === 'ms') {
            totalDays = value / (24 * 3600 * 1000);
        }
        
        // Calculate months and remaining days (1 month = 30 days)
        const months = Math.floor(totalDays / 30);
        const remainingDays = Math.round(totalDays % 30);
        
        // Format the result
        if (remainingDays === 0) {
            result.textContent = `${value} ${fromUnitShort} = ${months} month`;
        } else {
            result.textContent = `${value} ${fromUnitShort} = ${months} month ${remainingDays} days`;
        }
        return;
    } else {
        // For all other categories
        convertedValue = value * (factors[to] / factors[from]);
    }

    // Format the result
    let formattedResult;
    
    // Special formatting for very large or small numbers
    if (Math.abs(convertedValue) > 1000000 || (Math.abs(convertedValue) < 0.000001 && convertedValue !== 0)) {
        // Use comma formatting for large numbers instead of scientific notation
        const formattedValue = formatLargeNumber(convertedValue);
        formattedResult = `${value} ${fromUnitShort} = ${formattedValue} ${toUnitShort}`;
    } else {
        const formattedValue = formatNumber(convertedValue);
        formattedResult = `${value} ${fromUnitShort} = ${formattedValue} ${toUnitShort}`;
    }

    result.textContent = formattedResult;
}

// Event listeners
category.addEventListener('change', updateUnitOptions);
convertBtn.addEventListener('click', convert);

// Allow Enter key to convert
fromValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convert();
    }
});
