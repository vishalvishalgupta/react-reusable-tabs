import React from "react";

function Tab({ activeTab, label, onClick }) {

    let className = 'tab-list-item';

    if (activeTab === label) {
        className += ' tab-list-active';
    }

    function onClickTab() {
        onClick(label)
    }

    return (
        <li
            className={className}
            onClick={onClickTab}
        >
            {label}
        </li>
    );
}

export default Tab;
