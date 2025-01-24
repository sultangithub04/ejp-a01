'use client';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

import { useRouter } from 'next/navigation';

const Profile = () => {
    const { user, getUser } = useKindeBrowserClient();
    const router = useRouter();

  
        if (!user) {
            // Redirect to login if user is not authenticated
            router.push('/api/auth/login');
        }


    if (!user) {
        // Show a loading state while redirecting
        return <div>Loading...</div>;
    }

    const userDetails = getUser();

    return (
        <div>
            <h2>Welcome to your profile!</h2>
            <p>Name: {userDetails?.name || ' '}</p>
            <p>Email: {userDetails?.email || 'N/A'}</p>
        </div>
    );
};

export default Profile;
