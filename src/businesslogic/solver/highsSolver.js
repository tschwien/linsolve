import highs_loader from "highs";

// Lädt highs.js und initialisiert den Solver
let highs;
(async () => {
  try {
    highs = await highs_loader({
      locateFile: (file) => "https://lovasoa.github.io/highs-js/" + file
    });
    console.log("Highs library loaded successfully.");
  } catch (error) {
    console.error("Failed to load the Highs library:", error);
  }
})();

/**
 * Wandelt die Eingaben in das CPLEX-Format um.
 * @returns {string} - Das LP-Problem im CPLEX-Format.
 */
function transformCPLEX() {
  let cplexFormat = "";

  // Holen des Wertes der Zielfunktion
  let objectiveElement = document.getElementById("objectiveFunction");

  if (objectiveElement) {
    let objectiveValue = objectiveElement.value;
    let optimizationType = optimizationStore.optimizationType || "Maximize"; // Standardwert auf "Maximize"
    cplexFormat += `${optimizationType}\n obj: ${objectiveValue}\n`;
  } else {
    console.warn("Zielfunktionseingabe nicht gefunden.");
  }

  // Hinzufügen der Einschränkungen
  cplexFormat += "Subject To\n";

  // Schleife durch alle Einschränkungen
  for (let i = 0; i < this.constraints.length; i++) {
    let constraintId = this.constraints[i];
    let inputElement = document.getElementById(constraintId);

    if (inputElement) {
      let inputValue = inputElement.value;
      cplexFormat += ` c${i + 1}: ${inputValue}\n`;
    } else {
      console.warn(`Eingabefeld mit ID ${constraintId} nicht gefunden.`);
    }
  }

  console.log(cplexFormat);
  return cplexFormat;
}

/**
 * Löst das LP-Problem mit Highs.
 * @param {string} lpContent - Der Inhalt der LP-Datei im CPLEX-Format.
 * @returns {Promise<void>} - Ein Promise, das aufgelöst wird, wenn das Problem gelöst ist.
 */
async function solveLP(lpContent) {
  if (!highs) {
    console.error("Highs-Bibliothek ist nicht geladen.");
    return;
  }

  try {
    // Das LP-Modell in den Solver laden
    await highs.loadFromLPString(lpContent); // Ändere dies entsprechend der richtigen Methode
    const result = await highs.solve(); // Löst das LP-Problem
    displayResult(result);
    return result; // Ergebnis zurückgeben
  } catch (error) {
    console.error("Fehler beim Lösen des LP-Problems:", error);
    throw error;
  }
}

/**
 * Zeigt das Ergebnis des LP-Solvers an.
 * @param {Object} result - Das Ergebnis des LP-Solvers.
 */
function displayResult(result) {
  if (result) {
    console.log("Lösungsstatus:", result.status || "Unbekannter Status");
    console.log("Zielfunktionswert:", result.objectiveValue || "Kein Zielfunktionswert");
    console.log("Primal-Lösung:", result.primalValues || "Keine Primal-Lösung");
    console.log("Dual-Lösung:", result.dualValues || "Keine Dual-Lösung");
  } else {
    console.log("Kein Ergebnis verfügbar.");
  }
}

export { solveLP }; // Exportiert die Funktion zur Verwendung in anderen Modulen

