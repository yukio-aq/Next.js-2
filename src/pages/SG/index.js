export default function IndexPage(message) {
    return <h3>SG</h3>
}

//SGでのプロパティ設定関数。ビルド時に実行される。
export async function getStaticProps() {
    return {
        props: { message: 'Static Props'}
    }
}