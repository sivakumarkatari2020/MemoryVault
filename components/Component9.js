import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Component9() {
    return (
        <div className={styles.container3} style={{backgroundColor:'#edecec'}}>
            <div className={styles.contentWrapper3}>
                <div className={styles.leftWrapper}>
                    <div className={styles.imageWrapper}>
                        <Image src="/images/img-2.jpg" className={styles.imgFriends} alt="image-friends-1" width={300} height={400}></Image>
                    </div>
                </div>
                <div className={styles.rightWrapper}>
                    <h1>Plan, <span>Share</span> & Store the best moments of your life.</h1>
                    <p>Remember the lovely moments of your life by capturing in our app. MemoryVault is always for you. Thank you!</p>
                </div>
            </div>
        </div>
    )
}

export default Component9