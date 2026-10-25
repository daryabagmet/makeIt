import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDataStore } from './data/useDataStore';
import AllGoalsList from './components/AllGoalsList';
import Form from './components/Form';
import Goal from './components/Goal';
import Title from './components/Title';
const MainPage = () => {
    const { goals, currentGoal, addGoal } = useDataStore();
    const filteredGoals = goals.filter((goal) => goal.id !== currentGoal?.id);
    const title = 'Next 100 Days: Your Learning Journey';
    const subtitle = ' Transform Your Skills, Knowledge, and Habits in Just 100 Days';
    return (_jsx("div", { className: "bg-violet-100 ", children: _jsxs("div", { className: "flex flex-col p-8 h-full min-h-[100vh] m-auto max-w-[70%]", children: [_jsx(Title, { mainTitle: title, paragraph: subtitle }), _jsx(Form, { addGoal: addGoal }), currentGoal && (_jsx(Goal, { id: currentGoal.id, title: currentGoal.title, progress: currentGoal.progress, done: currentGoal.done })), _jsx(AllGoalsList, { goals: filteredGoals })] }) }));
};
export default MainPage;
