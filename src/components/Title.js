import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
const Title = React.memo(({ mainTitle, paragraph = null }) => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 w-full", children: mainTitle }), paragraph && (_jsx("p", { className: "text-xl text-gray-600 w-full", children: paragraph }))] }));
});
export default Title;
