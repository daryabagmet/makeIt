import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { GoalIcon, MedalIcon } from 'lucide-react';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import GoalProgress from './GoalProgress';
import GoalActions from './GoalActions';
import GoalTitle from './GoalTitle';
const Goal = ({ id, title, progress, done }) => {
    const icon = progress === 100 ? (_jsx(MedalIcon, { className: "w-10 h-10 text-violet-500" })) : (_jsx(GoalIcon, { className: "w-10 h-10 text-violet-500" }));
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [showFireworks, setShowFireworks] = useState(false);
    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };
    useEffect(() => {
        let timeoutId = null;
        if (progress === 100) {
            timeoutId = setTimeout(() => setShowFireworks(true), 0);
        }
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [progress]);
    return (_jsxs("div", { className: "bg-white rounded-lg p-6 my-2 flex gap-4 border border-violet-400 shadow-md", children: [icon, _jsxs("div", { className: "flex-1", children: [_jsx(GoalTitle, { isEditing: isEditing, newTitle: newTitle, onTitleChange: handleTitleChange, goal: { id, title, progress, done } }), _jsx(GoalProgress, { progress: progress })] }), _jsx(GoalActions, { id: id, isEditing: isEditing, setIsEditing: setIsEditing, newTitle: newTitle }), showFireworks && (_jsx(Fireworks, { autorun: {
                    speed: 0.75,
                    duration: 5000,
                } }))] }, id));
};
export default Goal;
