function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    let conversionRate;

    switch (currency) {
        case 'EU':
            conversionRate = 4000; // 1 Euro = 4000 COP
            break;
        case 'USD':
            conversionRate = 3500; // 1 Dólar = 3500 COP
            break;
        case 'BR':
            conversionRate = 800; // 1 Real Brasileño = 800 COP
            break;
    }

    const result = amount * conversionRate;
    document.getElementById('result').innerText = `El valor en COP es: ${result} COP`;
}
