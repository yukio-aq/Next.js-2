import { useEffect, useState } from "react";

//初回レンダリングや再読み込み時に関数コンポーネントが走り(CSR)、ページ遷移時は実行されない(SSR)
export default function SSR() {

    //Node.js上にはwindowなどは存在しないのでuseEffectを使用してwindowオブジェクトにアクセスする
    useEffect(() => {
        window.localStorage.setItem('key', 'value')
    },[])

    const [state, setState] = useState('bye');
    const val = 0;
    return <h3>{ val }{ state }</h3>
}