import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '../components/Title';
describe('Main page title', () => {
    test('render title', () => {
        render(_jsx(Title, { mainTitle: "Test title" }));
        expect(screen.getByText('Test title')).toBeInTheDocument();
    });
});
