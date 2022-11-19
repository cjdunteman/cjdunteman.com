import { getProviders, signIn } from 'next-auth/react';
import SignIn from './SignIn';

export default async function SignInPage() {
    const providers = await getProviders();

    return (
        <div>
            <div>SignInPage</div>
            <SignIn providers={providers}></SignIn>
        </div>
    )
}