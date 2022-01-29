import loadingImg from '../../img/loading.svg'
import styles from './Loading.module.css'

function Loading(){
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loadingImg} alt="Loading" />
        </div>
    )
}


export default Loading;