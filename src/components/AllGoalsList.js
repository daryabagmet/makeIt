import { jsx as _jsx } from "react/jsx-runtime";
import Goal from './Goal';
const AllGoalsList = ({ goals }) => {
    if (goals.length === 0)
        return null;
    return (_jsx("div", { "data-testid": "all-goals-list", children: goals.map((goal) => (_jsx(Goal, { ...goal }, goal.id))) }));
};
export default AllGoalsList;
