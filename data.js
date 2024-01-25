function csvToObject(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');

    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }

        result.push(obj);
    }

    return result;
}

function fetchDataAndConvert() {
    fetch('contact.csv')
        .then(response => response.text())
        .then(csvData => {
            const objects = csvToObject(csvData);
            console.log(objects);
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchDataAndConvert();