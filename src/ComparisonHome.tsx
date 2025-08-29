import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ComparisonHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">ランディングページ比較</h1>
          <p className="text-xl text-slate-600">2つの異なるデザインアプローチを比較してください</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* サイトA */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold">A</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">サイト A</h2>
              <p className="text-center text-white/90">NetSuite.tsx ベース</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">特徴</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">製品中心のアプローチ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">NetSuite機能の詳細説明</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">技術的な詳細情報</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">包括的な機能一覧</span>
                </li>
              </ul>
              <button
                onClick={() => navigate('/site-a')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                サイト A を見る
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* サイトB */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold">B</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">サイト B</h2>
              <p className="text-center text-white/90">WhatIsNetSuite.tsx ベース</p>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">特徴</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">価値提案中心のアプローチ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">カスタマイズ性の強調</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">EvangSolとの相乗効果</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-slate-700">ビジネス成果にフォーカス</span>
                </li>
              </ul>
              <button
                onClick={() => navigate('/site-b')}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                サイト B を見る
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 mb-2">比較のポイント</h3>
            <p className="text-slate-600">
              両方のサイトを訪問して、デザイン、コンテンツ構成、ユーザー体験の違いを確認してください。
              <br />
              それぞれのアプローチがターゲットユーザーにどのように響くかを検討できます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonHome;
