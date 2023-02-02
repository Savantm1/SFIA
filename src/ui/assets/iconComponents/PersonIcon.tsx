import * as React from 'react';

const PersonIcon = (props: any) => (
    <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9 7.5a2.625 2.625 0 1 0 0-5.25A2.625 2.625 0 0 0 9 7.5v0Zm-6.75 7.8v.45h13.5v-.45c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327h-3.9c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311c-.327.642-.327 1.482-.327 3.162Z"
            stroke="#F0F0F0"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default PersonIcon;
