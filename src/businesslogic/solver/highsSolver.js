import highs_loader from "highs";


/**
 * Läd den Solver
 */
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
 function generateLPFile(objectiveType,objectiveFunction, constraints =[], bounds = [], variableTypes = {}) {
    let lpFile = "";
    // Add the objective function (assuming "Minimize" by default)
    lpFile += objectiveType +"\n";
    lpFile += " obj: " + objectiveFunction + "\n\n";
    // Add constraints
    lpFile += "Subject To\n";
    constraints.forEach((constraint,index) => {
        lpFile += ` c${index + 1}: ${constraint.content}\n`;
    });
    lpFile += "\n";
    // Add bounds if any
    if (bounds.length > 0) {
        lpFile += "Bounds\n";
        bounds.forEach((bound) => {
            lpFile += ` ${bound}\n`;
        });
        lpFile += "\n";
    }

    // Add variable types if any
    if (Object.keys(variableTypes).length > 0) {
        if (variableTypes.general) {
            lpFile += "General\n";
            variableTypes.general.forEach((varName) => {
                lpFile += ` ${varName}\n`;
            });
            lpFile += "\n";
        }
        // add binary type if any
        if (variableTypes.binary) {
            lpFile += "Binary\n";
            variableTypes.binary.forEach((varName) => {
                lpFile += ` ${varName}\n`;
            });
            lpFile += "\n";
        }
    }

    // End of the LP file
    lpFile += "End\n";
    return lpFile;
}

// Example usage:
const objectiveType = "Maximisation";
const objectiveFunction = "2 x1 + 3 x2";
const constraints = [
    "x1 + x2 <= 10",
    "x1 - x2 >= 3"
];
const bounds = [
    "0 <= x1 <= 5",
    "0 <= x2 <= 10"
];
const variableTypes = {
    general: ["x1"],
    binary: ["x2"]
};

const lpString = generateLPFile(objectiveType,objectiveFunction, constraints, bounds, variableTypes);
//console.log(lpString);


/**
 * Löst das LP-Problem mit Highs.
 * @param {string} lpContent - Der Inhalt der LP-Datei im CPLEX-Format.
 * @returns {Promise<void>} - Ein Promise, das aufgelöst wird, wenn das Problem gelöst ist.
 */

async function solveLP(lpContent) {
  try {
    // Das LP-Modell in den Solver laden
    const result = await highs.solve(lpContent); // Löst das LP-Problem
    return result; // Ergebnis zurückgeben
  } catch (error) {
    console.error("Fehler beim Lösen des LP-Problems:", error);
    throw error;
  }
}



export { solveLP, generateLPFile }; // Exportiert die Funktion zur Verwendung in anderen Modulen

