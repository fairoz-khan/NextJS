export default async function Page() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data = await res.json();

    return (
        <div>
            <h1>Hello, Learn NextJS</h1>
            <span>Data {data.id}</span>
        </div>
    )
}