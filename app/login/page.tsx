import styles from './styles.module.scss';

interface DataType {
  name: string;
}

async function getData(): Promise<DataType> {
  const res = await fetch('http://localhost:3000/api/hello');
  // console.log(res);
  return res.json();
}

export default async function LoginPage() {
  const _data = getData();

  const data = await _data;
  console.log(data);
  console.log('ici');

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <h2>{data.name}</h2>
    </div>
  );
}
