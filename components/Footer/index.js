import styles from '../../styles/Footer.module.css';
import { withRouter } from 'next/router';

const Footer = ({ router }) => {
  if(router.pathname === '/'){
    return <div className={styles.footermain}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34485D" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
              <div className={styles.footerhome}>
                      <div className="row">
                        <div className="col-5">
                        </div>
                        <div className="col-7">
                          <div className="row justify-content-end">
                                <span className={styles.field}>About</span>
                                <span className={styles.field}>Help</span>
                                <span className={styles.field}>Legal</span>
                          </div>
                        </div>
                      </div>
                  </div>
            </div>
  }else {
    return <div className={styles.footermain}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34485D" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className={styles.footerhome}>
                    <div className="row">
                      <div className="col-5">
                      </div>
                      <div className="col-7">
                        <div className="row justify-content-end">
                              <span className={styles.field}>About</span>
                              <span className={styles.field}>Help</span>
                              <span className={styles.field}>Legal</span>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
  }
}

export default withRouter(Footer);
