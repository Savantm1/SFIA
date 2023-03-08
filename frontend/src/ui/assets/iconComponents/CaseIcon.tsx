import * as React from 'react';

const CaseIcon = (props: any) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5.833 4.167v-2.5a.833.833 0 0 1 .834-.834h6.666a.833.833 0 0 1 .834.834v2.5H17.5a.833.833 0 0 1 .833.833v11.667a.833.833 0 0 1-.833.833h-15a.833.833 0 0 1-.833-.833V5a.833.833 0 0 1 .833-.833h3.333ZM12.5 5.833h-5v10h5v-10Zm-6.667 0h-2.5v10h2.5v-10Zm8.334 0v10h2.5v-10h-2.5ZM7.5 2.5v1.667h5V2.5h-5Z"
            fill="#fff"
        />
    </svg>
);

export default CaseIcon;
