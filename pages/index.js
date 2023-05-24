import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  //const {name} = router.query;
  return (
    <div>
      <h1>
        {router.query.name
          ? `Hello ${router.query.name}`
          :"I don't know your name"}
      </h1>
    </div>
  );
  //let sum = parseInt(router.query.a)+parseInt(router.query.b);
  //return (<h1>sum={sum}</h1>);
}