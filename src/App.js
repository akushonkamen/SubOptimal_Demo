import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* 左侧模块选择区 */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700">模块选择</h2>
            {/* 模块列表将在这里实现 */}
          </div>
        </div>

        {/* 中间画布区域 */}
        <div className="flex-1 bg-gray-50">
          <div className="h-full p-4">
            <div className="bg-white h-full rounded-lg shadow-lg">
              {/* 画布将在这里实现 */}
            </div>
          </div>
        </div>

        {/* 右侧聊天面板 */}
        <div className="w-96 bg-white shadow-lg">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700">AI 助手</h2>
            {/* 聊天界面将在这里实现 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 