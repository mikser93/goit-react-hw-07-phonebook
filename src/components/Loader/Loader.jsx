import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import styles from './Loader.module.css';

export function Loader() {
  const isLoading = useSelector(state => state.items.isLoading);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
}
