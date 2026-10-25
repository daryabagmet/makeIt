import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Form = ({ addGoal }) => {
    const [field, setField] = useState('');
    const handleFieldChange = (e) => {
        setField(e.target.value);
    };
    const handleAddGoal = () => {
        addGoal(field);
        setField('');
    };
    return (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-lg mx-auto my-10 w-full md:w-lg", children: [_jsx("p", { className: "text-xl text-gray-600 mb-4", children: "What I want to achieve in next 100 days?" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", name: "goal", value: field, onChange: handleFieldChange, className: "p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "Enter your goal", "data-testid": "add-goal-input" }), _jsx("button", { onClick: handleAddGoal, className: "w-40 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400", "data-testid": "add-goal-btn", children: "Make it!" })] })] }));
};
export default Form;
