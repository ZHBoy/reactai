import React, {useState, useRef, useEffect} from 'react';
import './styles.css'
import options1 from '../../../asserts/options01.svg';
import arrowLeft from '../../../asserts/arrow_left.png';
import arrowRight from '../../../asserts/arrow_right.png';

/**
 * 首也所有的选项卡
 * @returns {Element}
 * @constructor
 */
const HomeOptionsComponent = () => {

    const options = [
        {
            id: '01',
            key: 'cartoon',
            title: '动画',
            image: options1,
        },
        {
            key: 'food',
            title: '美食',
            image: options1,
        },
        {
            key: 'movie',
            title: '电影',
            image: options1,
        },
        {
            key: 'life',
            title: '生活',
            image: options1,
        },
        {
            key: 'cartoon',
            title: '动画',
            image: options1,
        },
        {
            key: 'food',
            title: '美食',
            image: options1,
        },
        {
            key: 'movie',
            title: '电影',
            image: options1,
        },
        {
            key: 'life',
            title: '生活',
            image: options1,
        },
        {
            key: 'cartoon',
            title: '动画',
            image: options1,
        },
        {
            key: 'food',
            title: '美食',
            image: options1,
        },
        {
            key: 'movie',
            title: '电影',
            image: options1,
        },
        {
            key: 'movie',
            title: '电影',
            image: options1,
        },
        {
            key: 'life',
            title: '生活',
            image: options1,
        },
        {
            key: 'cartoon',
            title: '动画',
            image: options1,
        },
        {
            key: 'food',
            title: '美食',
            image: options1,
        },
        {
            id: '16',
            key: 'movie',
            title: '电影',
            image: options1,
        },
    ]
    const scrollContainerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
            console.log(isAtEnd);
            setIsVisible(isAtEnd);
        };

        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener('scroll', handleScroll);

        // 清理函数
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []); // 空依赖数组表示这个effect只在组件挂载时运行一次
    return (
        <div className={"wrapper"} >
            <ul ref={scrollContainerRef}>
                {options.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt=""/>
                        <span className={"options-text"}>{item.title}</span>
                    </li>
                ))}
            </ul>

            {!isVisible && (
                <div id="arrowRightId"
                     style={{
                         display: "flex",
                         alignItems: "center",
                         width: "100%", justifyContent: "end"
                     }}>
                    <img className={"arrow-img-end"} src={arrowRight} alt=""/>
                </div>
            )}
        </div>
    );
};

export default HomeOptionsComponent;
