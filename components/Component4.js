import React from 'react';
import styles from '../styles/Home.module.css';

import {IoPersonAdd,IoChatbubbles} from 'react-icons/io5';
import {MdLibraryAdd,MdOutlineRestore} from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {GiEarthAfricaEurope} from 'react-icons/gi';
import {FcDataRecovery} from 'react-icons/fc';

function Component4() {
    return (
        <div className={styles.container3}>
            <div className={styles.contentWrapper4}>
                <div className={styles.processWrapper}>
                    <IoPersonAdd className={styles.processIcon}></IoPersonAdd>
                    <h2>Signup or Login to create your memories.</h2>
                </div>
                <div className={styles.processWrapper}>
                    <h2>Start creating album by clicking <button>+create album</button></h2>
                    <MdLibraryAdd className={styles.processIcon}></MdLibraryAdd>
                </div>
                <div className={styles.processWrapper}>
                    <HiUserGroup className={styles.processIcon}></HiUserGroup>
                    <h2>Add friends who will be in part of your trip.</h2>
                </div>
                <div className={styles.processWrapper}>
                    <h2>Plan the routes & locate pin points with our interactive map.</h2>
                    <GiEarthAfricaEurope className={styles.processIcon}/>
                </div>
                <div className={styles.processWrapper}>
                    <IoChatbubbles className={styles.processIcon}/>
                    <h2>Chat ,fight & have fun convo.</h2>
                </div>
                <div className={styles.processWrapper}>
                    <h2>Store your trip vibes as memory after you done.</h2>
                    <FcDataRecovery className={styles.processIcon} />
                </div>
                <div className={styles.processWrapper}>
                    <MdOutlineRestore className={styles.processIcon}/>
                    <h2>Recall them with the option provided.</h2>
                </div>
            </div>
        </div>
    )
}

export default Component4