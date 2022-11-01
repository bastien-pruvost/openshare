import styles from './styles.module.scss';

interface DataType {
  text: string;
}

const getData = async (): Promise<DataType> => {
  const res = await fetch('http://localhost:3000/api/route');
  return res.json();
};

const LoginPage = async () => {
  const _data = getData();

  const data = await _data;

  return (
    <div className={styles.container}>
      <h1>{data.text}</h1>
    </div>
  );
};

export default LoginPage;
