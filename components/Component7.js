import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

function Component7() {
    return (
        <div className={styles.container3}>
            <div className={styles.contentWrapper7}>
                <h1>Our <span>team</span> of Developers!</h1>

                <div className={styles.detailsWrapper}>
                    <div className={styles.detailsWrapperRow}>
                        <div className={styles.details}>
                            <Image src="/images/people/photo-dp.jpeg" alt='img-people-1' className={styles.imgPerson} width={250} height={250}></Image>
                            <Link href="https://www.linkedin.com/in/durga-prasad-mallireddi-7885531a2">Durga Prasad Mallireddy</Link>
                            <h6>Team member</h6>
                            <p>Python Developer / Backend</p>
                        </div>
                        <div className={styles.details}>
                            <Image src="/images/people/photo-ap.jpeg" alt='img-people-2' className={styles.imgPerson} width={250} height={250}></Image>
                            <Link href="https://www.linkedin.com/in/arun-pandyan-8904791b6">Arun Pandyan Davalagiri</Link>
                            <h6>Team member</h6>
                            <p>Python Developer / ML Enthusiast</p>
                        </div>
                    </div>
                    <div className={styles.detailsWrapperRow}>
                        <div className={styles.details}>
                            <Image src="/images/people/photo-ag.jpeg" alt='img-people-3' className={styles.imgPerson} width={250} height={250}></Image>
                            <Link href="https://www.linkedin.com/in/abhishekgedela">Abhishek Gedela</Link>
                            <h6>Team member</h6>
                            <p>Python Developer / Django / Linux</p>
                        </div>
                        <div className={styles.details}>
                            <Image src="/images/people/photo-sk.jpeg" alt='img-people-4' className={styles.imgPerson} width={250} height={250}></Image>
                            <Link href="https://www.linkedin.com/in/siva-kumar-katari-25519919a/">Siva Kumar Katari</Link>
                            <h6>Team lead</h6>
                            <p>MERN Stack Developer / Cloud</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component7