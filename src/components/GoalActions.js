import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PencilIcon, SaveIcon, SparklesIcon, Trash2Icon } from 'lucide-react';
import { useDataStore } from '../data/useDataStore';
const GoalActions = ({ id, isEditing, setIsEditing, newTitle, }) => {
    const { goals, currentGoal, editGoal, removeGoal, setCurrentGoal, } = useDataStore();
    const iconClassStr = `w-6 h-6 text-violet-500 ${currentGoal?.id === id ? 'fill-current' : ''}`;
    const handleGoalEdit = () => {
        setIsEditing(true);
    };
    const handleDeleteGoal = (id) => {
        removeGoal(id);
    };
    const handleSave = (id) => {
        editGoal(id, newTitle);
        setIsEditing(false);
    };
    const toggleCurrentGoal = (id) => {
        const newGoal = goals.find((goal) => goal.id === id) || null;
        const newGoalValue = currentGoal?.id === id ? null : newGoal;
        setCurrentGoal(newGoalValue);
    };
    return (_jsxs("div", { className: "flex flex-col gap-2", "data-testid": "goal-actions-btn", children: [_jsx("button", { onClick: () => toggleCurrentGoal(id), "data-testid": "goal-toggle-btn", children: _jsx(SparklesIcon, { className: iconClassStr }) }), _jsxs("div", { className: "flex gap-2", children: [!isEditing && (_jsx("button", { onClick: handleGoalEdit, "data-testid": "goal-edit-btn", children: _jsx(PencilIcon, { className: "w-6 h-6 text-violet-500" }) })), isEditing && (_jsx("button", { onClick: () => handleSave(id), className: "text-violet-500", "data-testid": "goal-save-btn", children: _jsx(SaveIcon, { className: "w-6 h-6 text-violet-500" }) }))] }), _jsx("button", { onClick: () => handleDeleteGoal(id), "data-testid": "goal-delete-btn", children: _jsx(Trash2Icon, { className: "w-6 h-6 text-violet-500" }) })] }));
};
export default GoalActions;
