import React from 'react';
import Tab from './Tab/Tab';
import styles from "./Tabs.module.scss"

const Tabs: React.FC = () => {
    return (
        <div className={styles.tabsContainer}>
            <Tab title='All'/>
            <Tab title='My favorites'/>
            <Tab title='Popular'/>
        </div> 
    );
};

export default Tabs;