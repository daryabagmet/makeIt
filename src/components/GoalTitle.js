import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckIcon, UndoIcon } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useDataStore } from '../data/useDataStore';
const GoalTitle = ({ isEditing, newTitle, onTitleChange, goal, }) => {
    const { doActivity, undoActivity, markDone } = useDataStore();
    const { progress, title, id } = goal;
    const cardTitle = useMemo(() => progress === 100
        ? `My goal of ${title} is completed!`
        : `My goal is: ${title}`, [goal]);
    useEffect(() => {
        if (progress === 100)
            markDone(id);
    }, [progress]);
    const handleDoProgress = () => {
        doActivity(id);
    };
    const handleUndoProgress = () => {
        undoActivity(id);
    };
    return isEditing ? (_jsx("input", { type: "text", value: newTitle, onChange: onTitleChange, className: "border border-gray-300 rounded mb-2", "data-testid": "edit-title-input" })) : (_jsxs("div", { className: "flex gap-2 justify-between align-middle", children: [_jsx("h2", { className: "text-lg font-semibold mb-2", children: cardTitle }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("button", { className: "flex gap-0.5 text-violet-500", onClick: handleDoProgress, "data-testid": "do-activity-button", children: [_jsx(CheckIcon, { className: "w-6 h-6 text-violet-600" }), "Do activity"] }), _jsxs("button", { className: "flex gap-0.5 text-violet-500", onClick: handleUndoProgress, "data-testid": "undo-activity-button", children: [_jsx(UndoIcon, { className: "w-6 h-6 text-violet-600" }), "Undo"] })] })] }));
};
export default GoalTitle;
