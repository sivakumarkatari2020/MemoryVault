import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Component5() {
    return (
        <div className={styles.container3} style={{backgroundColor:'#edecec'}}>
            <div className={styles.contentWrapper3}>
                <div className={styles.rightWrapper}>
                    <h1>Store <span>unlimited</span> pictures with our MemoryValut.</h1>
                    <p>What is the first thing you will do after you back from a long trip? Definitely asking pictures what you had taken in the trip from your friends and gathering all of those and storing them. We are making this process easier & hastle free.</p>
                    <p>You can simple take photos & store them in our memory vault, which will be accessible to download by the members of trip in your life-time.</p>
                </div>
                <div className={styles.leftWrapper}>
                    <div className={styles.imageWrapper}>
                        <Image src="/images/img-3.jpg" className={styles.imgFriends} alt="image-friends-1" width={300} height={500}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component5