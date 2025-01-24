'use client';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const { user, getUser } = useKindeBrowserClient();
    const router = useRouter();
        if (!user) {
            router.replace('/api/auth/login'); 
        } 


    const userDetails = getUser();

    return (
        <div className='min-h-[calc(100vh-16rem)]  pt-32'>
            <h2>Welcome to your profile!</h2>
            <p>Name: {userDetails?.name || ' '}</p>
            <p>Email: {userDetails?.email || 'N/A'}</p>
        </div>
    );
};

export default Profile;
