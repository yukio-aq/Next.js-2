import { useEffect, useState } from "react";

//初回レンダリングや再読み込み時に関数コンポーネントが走り(CSR)、ページ遷移時は実行されない(SSR)
export default function SSR({ message }) {
    console.log(message);

    //Node.js上にはwindowなどは存在しないのでuseEffectを使用してwindowオブジェクトにアクセスする
    useEffect(() => {
        document.cookie = 'val=0; path=/;'
        window.localStorage.setItem('key', 'value')
    },[])

    const [state, setState] = useState('bye');
    const val = 0;
    return <h3>{ val }{ state }</h3>
}

//コンポーネントに渡すpropsを定義できる、Node.js上で実行される関数(/pagesでのみ使用)
export async function getServerSideProps(context) {
    const { cookie } = context.req.header;
    console.log(cookie);

    return {
        redirect: {
            destination: '/',
            permanent: false
        },
        props: { message: 'ServerSideProps'}
    }
}