import highs_loader from "highs";

const highs = await highs_loader({
    // In a browser, one can load the wasm file from github
    // TODO: change to static import. currently using outside sources which is prohibited
    locateFile: (file) => "https://lovasoa.github.io/highs-js/" + file
});
/**
 * Solves a linear programming problem from LP file content.
 * @param {string} lpContent - The content of the LP file.
 * @returns {Promise<Object>} - The result of the LP solver.
 */
async function solveLP() {
    // Initialize highs.js solver
    //TODO: add method to change the LP named lpContent
    try {
        const result = highs.solve("Maximize\n" +
            " obj:\n" +
            "    x1 + 2 x2 + 4 x3 + x4\n" +
            "Subject To\n" +
            " c1: - x1 + x2 + x3 + 10 x4 <= 20\n" +
            " c2: x1 - 4 x2 + x3 <= 30\n" +
            " c3: x2 - 0.5 x4 = 0\n" +
            "Bounds\n" +
            " 0 <= x1 <= 40\n" +
            " 2 <= x4 <= 3\n" +
            "End");
        // Load the LP model into highs.js

        // Solve the LP problem
        displayResult(result);
        // Return the result
    } catch (error) {
        console.error('Error solving LP problem:', error);
        throw error;
    }
}

/**
 * Reads the LP file content from a file input element.
 * @param {File} file - The LP file to read.
 * @returns {Promise<string>} - The content of the LP file.
 */
function readLPFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });
}

/**
 * Displays the result of the LP solver.
 * @param {Object} result - The result of the LP solver.
 */
function displayResult(result) {
    console.log(result);
}

export { solveLP, readLPFile }; // Export functions for use in other modules
