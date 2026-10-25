import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoalProgress from '../components/GoalProgress';
describe('Progress component', () => {
    test('render progress row', () => {
        render(_jsx(GoalProgress, { progress: 60 }));
        const progressElement = screen.getByTestId('progress-row');
        expect(progressElement).toBeInTheDocument();
        expect(progressElement.childElementCount).toBe(100);
    });
});
