import React from 'react';

export const renderHTML = (rawHTML: string) => React.createElement(
        "div", { dangerouslySetInnerHTML: { __html: rawHTML } 
    });

export default renderHTML;