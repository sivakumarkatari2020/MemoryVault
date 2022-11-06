import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

function Banner() {
    const [text,setText] = useState('Plan');
    const [flag,setFlag] = useState(false);

    function animationExec(){
        setText('Plan');
        setFlag(false);
        let textEle = document.getElementById('mainText');
        textEle.style.animationPlayState = 'running';
        textEle.style.borderColor = '#ef018a';

        setTimeout(()=>{
            setText('Share');
        },1000);

        setTimeout(()=>{
            setText('Store');
        },2000);

        setTimeout(()=>{
            textEle.style.animationPlayState = 'paused';
            textEle.style.borderColor = 'none';
            setFlag(true);
        },3000);
    }

    useEffect(()=>{
        animationExec();

        setInterval(()=>{
            animationExec();
        },10000);
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.containerBg}>
                <div className={styles.contentWrapper}>
                    <div className={styles.appBar}>
                        <h1><span>Memory</span>Valut</h1>
                        <button className={styles.button1}>Preview</button>
                    </div>

                    <div className={styles.textWrapper}>
                        <div className={styles.textEffect}>
                            {
                                flag
                                ? <h1 className={styles.normal_text} id='mainText'>Plan, <span>Share</span> & Store</h1>
                                : <h1 className={styles.typed_out} id='mainText'>{text}</h1>
                            }
                        </div>
                        <p>A single place to <span>organize</span> your trips,events & store them as <span>memories</span> in our app.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner