import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';

function Component3() {
    return (
        <div className={styles.container3}>
            <div className={styles.contentWrapper3}>
                <div className={styles.leftWrapper}>
                    <div className={styles.imageWrapper}>
                        <Image src="/images/img-1.jpg" className={styles.imgFriends} alt="image-friends-1" width={300} height={500}></Image>
                    </div>
                </div>
                <div className={styles.rightWrapper}>
                    <h1>Now <span>store</span> your memories with ease.</h1>
                    <p>We were planning to provide you a single app to do all the Planning, Chatting, Navigation & even more. You can directly create trip albums and can add any number of trip mates. Your album will be active untill you ended your trip. The participants of the trip can share the pictures and we will save those for the rest of your life.</p>
                    <p>You can recall those memories by navigating to the saved & past trip albums of you. If you or someone in your trip can recall the moment, then every participant will get notified to again chat about the past experience.</p>
                </div>
            </div>
        </div>
    )
}

export default Component3