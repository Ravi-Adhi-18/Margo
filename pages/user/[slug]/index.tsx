import Layout from "@/layout/userlayout/UserLayout";
import { useRouter } from 'next/router'
import User from "@/components/User";

export default function UserSlug() {
    const Router = useRouter();
    const { query } = Router;
    const { slug } = query;
    return (
        <>
        <Layout>
            <User slug={slug}/>
        </Layout>
           
        </>

    )
}