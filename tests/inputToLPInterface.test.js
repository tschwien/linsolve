import { describe, it, expect } from 'vitest';
import { generateLPFile, convertLatexToBasic } from '../src/businesslogic/inputToLPInterface.js'; // Update the path as necessary

describe('generateLPFile', () => {
    it('should generate the correct LP file with the objective function and constraints', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = 'x + 2y';
        const constraints = [
            { content: 'x + y <= 10' },
            { content: '2x - y >= 3' }
        ];

        const lpFile = generateLPFile(objectiveType, objectiveFunction, constraints);

        expect(lpFile).toContain('Minimize\n obj: x + 2y');
        expect(lpFile).toContain('Subject To\n c1: x + y <= 10\n c2: 2x - y >= 3');
        expect(lpFile).toContain('End');
    });

    it('should correctly add bounds to the LP file', () => {
        const objectiveType = 'Maximize';
        const objectiveFunction = '3x + 4y';
        const constraints = [{ content: 'x - y = 5' }];
        const bounds = ['x >= 0', 'y <= 5'];

        const lpFile = generateLPFile(objectiveType, objectiveFunction, constraints, bounds);

        expect(lpFile).toContain('Bounds\n 3x + 4y\n 3x + 4y');
        expect(lpFile).toContain('End');
    });

    it('should correctly add general and binary variable types', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = 'x + 2y';
        const constraints = [{ content: 'x + y <= 10' }];
        const variableTypes = {
            general: ['x'],
            binary: ['y']
        };

        const lpFile = generateLPFile(objectiveType, objectiveFunction, constraints, [], variableTypes);

        expect(lpFile).toContain('General\n x');
        expect(lpFile).toContain('Binary\n y');
        expect(lpFile).toContain('End');
    });

    it('should handle cases with no constraints, bounds, or variable types', () => {
        const objectiveType = 'Maximize';
        const objectiveFunction = 'x';

        const lpFile = generateLPFile(objectiveType, objectiveFunction);

        expect(lpFile).toContain('Maximize\n obj: x');
        expect(lpFile).toContain('Subject To\n');
        expect(lpFile).toContain('End');
    });

    it('should handle LaTeX expressions in the objective function and constraints', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = 'x * y';
        const constraints = [
            { content: 'x \ge y' },
            { content: 'y \le 10' }
        ];

        const lpFile = generateLPFile(objectiveType, objectiveFunction, constraints);

        expect(lpFile).toContain('Minimize\n obj: x * y');
        expect(lpFile).toContain('Subject To\n c1: x >= y\n c2: y <= 10');
        expect(lpFile).toContain('End');
    });
});

describe('convertLatexToBasic', () => {
    it('should convert LaTeX expressions to basic format', () => {
        expect(convertLatexToBasic('x \ge y')).toBe('x >= y');
        expect(convertLatexToBasic('x \le y')).toBe('x <= y');
    });

    it('should handle expressions without LaTeX formatting', () => {
        expect(convertLatexToBasic('x + y')).toBe('x + y');
    });
});
