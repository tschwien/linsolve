import { describe, it, expect } from 'vitest';
import { generateLPFile } from '../src/businesslogic/inputToLPInterface.js';

describe('generateLPFile', () => {
    it('should generate an LP file with a simple objective function', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = '2 x + 3 y';
        const result = generateLPFile(objectiveType, objectiveFunction);

        const expected = `Minimize
 obj: 2 x + 3 y

Subject To

End
`;
        expect(result).toBe(expected);
    });

    it('should include constraints in the LP file', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = '2 x + 3 y';
        const constraints = [
            { content: 'x + y <= 10' },
            { content: 'x - y >= 2' },
        ];
        const result = generateLPFile(objectiveType, objectiveFunction, constraints);

        const expected = `Minimize
 obj: 2 x + 3 y

Subject To
 c1: x + y <= 10
 c2: x - y >= 2

End
`;
        expect(result).toBe(expected);
    });

    it('should include bounds in the LP file', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = '2 x + 3 y';
        const constraints = [{ content: 'x + y <= 10' }];
        const bounds = ['0 <= x <= 5', 'y free'];
        const result = generateLPFile(objectiveType, objectiveFunction, constraints, bounds);

        const expected = `Minimize
 obj: 2 x + 3 y

Subject To
 c1: x + y <= 10

Bounds
 0 <= x <= 5
 y free

End
`;
        expect(result).toBe(expected);
    });

    it('should include general variable types in the LP file', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = '2 x + 3 y';
        const constraints = [{ content: 'x + y <= 10' }];
        const bounds = ['0 <= x <= 5'];
        const variableTypes = { general: ['x'] };
        const result = generateLPFile(objectiveType, objectiveFunction, constraints, bounds, variableTypes);

        const expected = `Minimize
 obj: 2 x + 3 y

Subject To
 c1: x + y <= 10

Bounds
 0 <= x <= 5

General
 x

End
`;
        expect(result).toBe(expected);
    });

    it('should include binary variable types in the LP file', () => {
        const objectiveType = 'Minimize';
        const objectiveFunction = '2 x + 3 y';
        const constraints = [{ content: 'x + y <= 10' }];
        const bounds = ['0 <= x <= 5'];
        const variableTypes = { binary: ['y'] };
        const result = generateLPFile(objectiveType, objectiveFunction, constraints, bounds, variableTypes);

        const expected = `Minimize
 obj: 2 x + 3 y

Subject To
 c1: x + y <= 10

Bounds
 0 <= x <= 5

Binary
 y

End
`;
        expect(result).toBe(expected);
    });

    it('should include both general and binary variable types in the LP file', () => {
        const objectiveType = 'Maximize';
        const objectiveFunction = '5 a + 4 b';
        const constraints = [{ content: 'a + b <= 8' }];
        const bounds = ['0 <= a <= 3', '0 <= b <= 2'];
        const variableTypes = { general: ['a'], binary: ['b'] };
        const result = generateLPFile(objectiveType, objectiveFunction, constraints, bounds, variableTypes);

        const expected = `Maximize
 obj: 5 a + 4 b

Subject To
 c1: a + b <= 8

Bounds
 0 <= a <= 3
 0 <= b <= 2

General
 a

Binary
 b

End
`;
        expect(result).toBe(expected);
    });
});
