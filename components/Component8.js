import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Component8() {
    return (
        <div className={styles.container3} style={{backgroundColor:'#edecec'}}>
            <div className={styles.contentWrapper3}>
                <div className={styles.leftWrapper}>
                    <div className={styles.imageWrapper}>
                        <Image src="/images/img-4.png" className={styles.imgFriends} alt="image-friends-1" width={300} height={600}></Image>
                    </div>
                </div>
                <div className={styles.rightWrapper}>
                    <h1>Get <span>live locations</span> of your friends with our map.</h1>
                    <p>We are teenagers & we want to explore places without map we know, but what happened whenever we lost our friends in the trip journey? Calling them & reaching is a big task. We are providing a solution to this problem with our MapVault. Which is a unique map which will show the destination points , your route & the live-location of your friends.</p>
                    <p>More over that you can tag pictures you had taken in the places you visited and they will be stored for life-time & can be shown in the map to remember the moments.</p>
                </div>
            </div>
        </div>
    )
}

export default Component8