import { useRouter } from "next/router"

export default function Page({ id }) {
    const router = useRouter();
    if(router.isFallback) {
        return <h3>Loading</h3>
    }

    return <h3>{id}</h3>
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: "1" }},{ params: { id: "2" }}],
        fallback: true, //falseの場合、設定したID以外は404となる。
    }
}

//routerを設定することで存在しないID(3〜)がリクエストされると、Node.jsが代わりに処理する。
export async function getStaticProps({ params }) {
    return {
        props: {
            id: params.id,
        },
    }
}