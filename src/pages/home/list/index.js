// App.js 或其他父组件
import React, {useEffect, useMemo, useState} from 'react';
import Card from './card/Card';
import "./index.css"

const ComponentContentList = (optionId) => {

    //正价的banner图
    const list1 = [
        {
            id: 1,
            title: '百度·创意应用空间',
            description: '文心大模型一站式企业级大模型平台',
            bgImage:
                'https://ecmb.bdimg.com/tam-ogel/1033851030_-2035694540_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80',
        },
    ]

    //正价的banner图
    const list2 = [
        {
            id: 2,
            title: '腾讯智影',
            description: '智影助力，轻松视频创作',
            bgImage:
                'https://ecmb.bdimg.com/tam-ogel/1033851030_-2035694540_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80',
        },
    ]
    //正价的banner图
    const list3 = [
        {
            id: 3,
            title: '快剪辑',
            description: '国内⾸款集⾳视频云端智能剪辑、视频包装、AI视频处理， ⾳视频云端协作于⼀体的智能内容⽣产平台。',
            bgImage:
                'https://ecmb.bdimg.com/tam-ogel/1033851030_-2035694540_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80',
        },
    ]
    //正价的banner图
    const list4 = [
        {
            id: 4,
            title: 'KreadoAI',
            description: 'Kreado 人工智能是一个视频创建工具，使用人工智能创建真实或虚拟人物的多语言口头视频。主要特点和优势\n',
            bgImage:
                'https://ecmb.bdimg.com/tam-ogel/1033851030_-2035694540_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80',
        },
    ]

    // 使用useState钩子来初始化一个空数组作为状态
    const [items, setItems] = useState([]);

    // 定义一个函数来生成mock数据并添加到数组中
    const addMockData = (count = 5) => {
        // 假设我们想要添加的对象结构如下
        const mockData = Array.from({length: count}, (_) => ({
            id: 3,
            title: '快剪辑',
            description: '国内⾸款集⾳视频云端智能剪辑、视频包装、AI视频处理， ⾳视频云端协作于⼀体的智能内容⽣产平台。',
            bgImage:
                'https://ecmb.bdimg.com/tam-ogel/1033851030_-2035694540_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80',
        }));

        // 将新生成的mock数据添加到现有的items数组中
        setItems(prevItems => [...prevItems, ...mockData]);
    };

    // 使用useEffect钩子在组件挂载后添加mock数据
    useEffect(() => {
        // 组件挂载后立即调用addMockData函数
        addMockData(100); // 假设我们想要添加10条mock数据
    }, []); // 空数组表示这个effect仅在组件挂载时运行一次

    const listInfo = useMemo(() => {
        if (optionId === 1) {
            return list1;
        } else if (optionId === 2) {
            return list2;
        } else if (optionId === 3) {
            return list3;
        } else if (optionId === 4) {
            return list4;
        } else {
            return list4;
        }
    })

    return (
        <div className="card-list-container">
            {items.map((item =>
                    <Card className="card-list-item"
                          key={item.id}
                          title={item.title}
                          description={item.description}
                          backgroundImage={item.bgImage}
                    />
            ))}
        </div>
    );
}
export default ComponentContentList;