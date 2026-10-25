import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const GoalProgress = ({ progress }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "text-gray-700", children: ["Progress: ", progress, " / 100"] }), _jsx("div", { className: "flex gap-0.5 w-full my-2", "data-testid": "progress-row", children: Array.from({ length: 100 }).map((_, index) => (_jsx("div", { className: `h-[20px] bg-gray-300 rounded-xs flex-1 ${index < progress ? 'bg-violet-500' : 'bg-gray-300'}` }, index))) })] }));
};
export default GoalProgress;
