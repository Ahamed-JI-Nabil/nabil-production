import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ borderBottom: match ? "1px solid gray" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;