// 1. Verbindung zur Datenbank sicherstellen 

const dbName = "testDB";
const db = db.getSiblingDB(dbName);

// 2. Collection 'kunden' vorbereiten (löschen, falls sie schon existiert, für einen sauberen Start)
db.kunden.drop();
console.log("--- Collection 'kunden' wurde zurückgesetzt ---");

// 3. Testdaten generieren (10 Kunden)
const testKunden = [];
for (let i = 1; i <= 10; i++) {
    testKunden.push({
        kunden_id: 1000 + i,
        name: "Kunde " + i,
        alter: 20 + (i * 2), // Alter variiert zwischen 22 und 40
        stadt: i % 2 === 0 ? "Berlin" : "Hamburg",
        aktiv: i % 3 !== 0,
        erstellt_am: new Date()
    });
}

// Daten einfügen
db.kunden.insertMany(testKunden);
console.log("--- 10 Testdaten wurden eingefügt ---");

// 4. Abfragen (Ähnlich wie SELECT / WHERE)

// Entspricht: SELECT * FROM kunden;
console.log("--- Alle Kunden in der Datenbank ---");

const alleKunden = db.kunden.find().toArray(); 
printjson(alleKunden);


// Beispiel A: Alle Kunden aus Berlin (SELECT * FROM kunden WHERE stadt = 'Berlin')
console.log("\nKunden in Berlin:");

const berlinKunden = db.kunden.find({ stadt: "Berlin" }).toArray();
printjson(berlinKunden);

// Beispiel B: Kunden über 30 Jahre (SELECT * FROM kunden WHERE alter > 30)
console.log("\nKunden älter als 30:");

const alterKunden = db.kunden.find({ alter: { $gt: 30 } }).toArray();
printjson(alterKunden);

// 5. Aufräumen (Collection wieder löschen)
console.log("\n--- Cleanup: Lösche Collection ---");
db.kunden.drop();
console.log("Erledigt.");

