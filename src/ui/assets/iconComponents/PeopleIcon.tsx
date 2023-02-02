import * as React from 'react';

const PeopleIcon = (props: any) => (
    <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.5 6.188a1.688 1.688 0 1 1 3.375 0 1.688 1.688 0 0 1-3.375 0Zm1.688-2.813a2.813 2.813 0 1 0 0 5.625 2.813 2.813 0 0 0 0-5.625Zm5.625 3.375a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm1.124-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-11.25 7.313a1.687 1.687 0 0 1 1.688-1.688H9a1.687 1.687 0 0 1 1.688 1.688v.125a1.527 1.527 0 0 1-.012.155 3.21 3.21 0 0 1-.59 1.51c-.615.849-1.785 1.585-3.899 1.585-2.112 0-3.282-.736-3.9-1.586a3.21 3.21 0 0 1-.588-1.51 2.144 2.144 0 0 1-.012-.154v-.126Zm1.125.1v.009l.005.055c.044.348.174.68.38.964.367.504 1.166 1.121 2.99 1.121 1.825 0 2.624-.617 2.99-1.121a2.085 2.085 0 0 0 .386-1.02v-.108A.562.562 0 0 0 9 11.25H3.375a.563.563 0 0 0-.563.563v.1Zm10.126 2.15c-.662 0-1.204-.102-1.643-.268.18-.33.317-.683.406-1.049.302.114.702.191 1.236.191 1.26 0 1.776-.43 2.003-.749.133-.186.217-.403.245-.63l.002-.031a.281.281 0 0 0-.28-.277h-3.15a2.8 2.8 0 0 0-.507-1.125h3.656c.776 0 1.406.63 1.406 1.406v.02a2.503 2.503 0 0 1-.457 1.293c-.474.664-1.364 1.219-2.918 1.219Z"
            fill="#fff"
        />
    </svg>
);

export default PeopleIcon;
