import { describe, it, expect, beforeAll, vi } from 'vitest';
import { solveLP } from '../src/businesslogic/solver/highsSolver.js'; // Adjust the import path accordingly
import highs_loader from 'highs';

// Mock the `highs_loader` to simulate loading the `highs` library
vi.mock('highs', () => {
    let mockSolve = vi.fn();

    return {
        __esModule: true,
        default: async () => {
            return {
                solve: mockSolve,
            };
        },
    };
});

describe('solveLP', () => {
    let highsMock;

    // Load the highs library mock before running tests
    beforeAll(async () => {
        highsMock = await highs_loader();
    });

    it('should solve an LP problem and return the result', async () => {
        // Mock result that would be returned by highs.solve
        const mockResult = { status: 'optimal', objectiveValue: 42, solution: { x: 1, y: 2 } };

        // Mock the solve function to return the mock result
        highsMock.solve.mockResolvedValueOnce(mockResult);

        const lpContent = `Minimize
 obj: 2 x + 3 y

Subject To
 c1: x + y <= 10

End
`;

        // Call solveLP and verify the result
        const result = await solveLP(lpContent);
        expect(result).toEqual(mockResult);

        // Verify that highs.solve was called with the correct content
        expect(highsMock.solve).toHaveBeenCalledWith(lpContent);
    });

    it('should throw an error when the highs.solve function fails', async () => {
        // Mock the solve function to throw an error
        highsMock.solve.mockRejectedValueOnce(new Error('Solver error'));

        const lpContent = `Minimize
 obj: 2 x + 3 y

Subject To
 c1: x + y <= 10

End
`;

        // Call solveLP and expect it to throw an error
        await expect(solveLP(lpContent)).rejects.toThrow('Solver error');

        // Verify that highs.solve was called with the correct content
        expect(highsMock.solve).toHaveBeenCalledWith(lpContent);
    });

    it('should handle empty or malformed LP content gracefully', async () => {
        const lpContent = ''; // Empty content

        // Mock the solve function to throw an error for empty content
        highsMock.solve.mockRejectedValueOnce(new Error('Invalid LP content'));

        // Call solveLP and expect it to throw an error
        await expect(solveLP(lpContent)).rejects.toThrow('Invalid LP content');

        // Verify that highs.solve was called with the correct content
        expect(highsMock.solve).toHaveBeenCalledWith(lpContent);
    });
});
