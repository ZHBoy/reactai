import React from 'react';

const MyComponent = () => {
    return (
        <div className="card">
            <div className="card-header">
                <img src="avatar.jpg" alt="头像" className="card-avatar"/>
                <h2 className="card-title">标题</h2>
            </div>
            <div className="card-body">
                <p className="card-description">这里是描述内容，可以包含更多的信息或者简短介绍。</p>
            </div>
            <div className="card-footer">
                <span className="card-category">分类</span>
            </div>
        </div>
    );
};

export default MyComponent;
