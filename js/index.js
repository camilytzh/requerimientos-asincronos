const processSalesCoffee = async () => {

    const xmlData = await getSalesCoffee();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");

    const sales = xmlDoc.getElementsByTagName("row");

    let table = $('#example').DataTable();

    for (let sale of sales) {

        table.row.add([
            sale.getElementsByTagName("hour_of_day")[0]?.textContent,
            sale.getElementsByTagName("cash_type")[0]?.textContent,
            sale.getElementsByTagName("money")[0]?.textContent,
            sale.getElementsByTagName("coffee_name")[0]?.textContent,
            sale.getElementsByTagName("Time_of_Day")[0]?.textContent,
            sale.getElementsByTagName("Weekday")[0]?.textContent,
            sale.getElementsByTagName("Month_name")[0]?.textContent,
            sale.getElementsByTagName("Weekdaysort")[0]?.textContent,
            sale.getElementsByTagName("Monthsort")[0]?.textContent,
            sale.getElementsByTagName("Date")[0]?.textContent,
            sale.getElementsByTagName("Time")[0]?.textContent
        ]);
    }

    table.draw();
};

window.addEventListener("load", processSalesCoffee);