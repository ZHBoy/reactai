import React, {useState, useRef, useEffect} from 'react';
import './styles.css'
import options1 from '../../../asserts/options01.svg';
import arrowRight from '../../../asserts/arrow_right.png';
import {useDispatch, useSelector} from "react-redux";
import {incremented, incrementedByAmount} from "../../../redux/counterSlice";

/**
 * 首也所有的选项卡
 * @returns {Element}
 * @constructor
 */
const HomeOptionsComponent = () => {

    const options = [
        {
            id: 1,
            key: '001',
            title: 'AI图像工具',
            image: options1,
        },
        {
            id: 2,
            key: '002',
            title: 'AI写作工具',
            image: options1,
        },
        {
            id: 3,
            key: '003',
            title: 'AI视频/音频',
            image: options1,
        },
        {
            id: 4,
            key: '004',
            title: 'AI办公工具',
            image: options1,
        },
        {
            id: 1,
            key: '001',
            title: 'AI图像工具',
            image: options1,
        },
        {
            id: 2,
            key: '002',
            title: 'AI写作工具',
            image: options1,
        },
        {
            id: 3,
            key: '003',
            title: 'AI视频/音频',
            image: options1,
        },
        {
            id: 4,
            key: '004',
            title: 'AI办公工具',
            image: options1,
        },
        {
            id: 1,
            key: '001',
            title: 'AI图像工具',
            image: options1,
        },
        {
            id: 2,
            key: '002',
            title: 'AI写作工具',
            image: options1,
        },
        {
            id: 3,
            key: '003',
            title: 'AI视频/音频',
            image: options1,
        },
        {
            id: 4,
            key: '004',
            title: 'AI办公工具',
            image: options1,
        },

    ]

    const scrollContainerRef = useRef(null);

    const dispatch = useDispatch();

    function optionItemClick(id) {
        dispatch(incrementedByAmount(id))
    }

    return (
        <div className={"wrapper"}>
            <ul ref={scrollContainerRef}>
                {options.map((item =>
                        <li key={item.id} onClick={() => optionItemClick(item.id)}>
                            <img src={item.image} alt=""/>
                            <span className={"options-text"}>{item.title}</span>
                        </li>
                ))}
            </ul>
        </div>

    );
};

export default HomeOptionsComponent;
