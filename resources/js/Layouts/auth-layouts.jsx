import React from 'react';

const AuthLayouts = ({children}) => {
    return (
        <div className='w-full min-h-screen relative hero px-3' style={{ backgroundImage: `url("/assets/imgs/img1.jpg")` }}>
            <main>{children}</main>
        </div>
    );
}

export default AuthLayouts;
