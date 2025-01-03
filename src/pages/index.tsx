import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to TikTok UI</h1>
            <p>This is the home page of the TikTok UI project.</p>
        </div>
    );
};

const ProfilePage: React.FC = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>This is the profile page.</p>
        </div>
    );
};

export { HomePage, ProfilePage };