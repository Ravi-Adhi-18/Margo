import Admin from '@/components/Admin';
import AuthLayout from '@/layout/authlayout/AuthLayout';
import { useRouter } from 'next/router';

export default function homePage() {
    const router = useRouter();
    const { query } = router;
    const { slug } = query;
    return (
        <>
            <AuthLayout>
                <Admin slug={slug} />
            </AuthLayout>
        </>

    )
}