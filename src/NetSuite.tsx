import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, ArrowRight, Menu, X, Phone, Mail, Clock, Users, TrendingUp, Settings, Globe, Shield, Zap, Database, BarChart3, Package, FileText, Layers, Building2, Truck, Calculator, RefreshCw, Sparkles, Award, Target, Star, ChevronRight, CheckCircle, Trophy, Briefcase, HeadphonesIcon, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import StatsSection from './components/StatsSection';
import { FeatureGrid } from './components/FeatureCard';
import { useScrollPosition } from './hooks/useScrollPosition';
import { Feature, StatItem } from './types';

const NetSuite = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeTab, setActiveTab] = useState(0);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const solutions: Feature[] = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "入金消込ソリューション",
      description: "銀行口座や決済サービスの入金データを自動取得し、売掛金との突合を効率化"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ECデータ連携基盤",
      description: "各種ECサイトやモール、決済サービスとNetSuiteをシームレスに連携"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "業界特化OMS",
      description: "製造、小売、商社など業界の特性に合わせた受注管理システムを提供"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "資材計画の見える化",
      description: "需要予測や生産計画と連動し、資材の発注・在庫状況をリアルタイムに可視化"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ハンディ連携／WMS連携",
      description: "倉庫内の入出庫、棚卸、ピッキング作業をハンディ端末やWMSと連動"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "在庫年齢表",
      description: "在庫品目ごとの滞留期間を分析し、デッドストックのリスクを可視化"
    }
  ];

  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "導入支援",
      description: "要件定義から導入まで、貴社に最適な設計をご提案",
      features: ["業務分析", "要件定義", "プロジェクト管理"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "カスタマイズ開発",
      description: "SuiteScriptやワークフローで業務に合わせた機能拡張",
      features: ["SuiteScript開発", "ワークフロー構築", "API連携"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "データ移行支援",
      description: "既存システムからの安全で確実なデータ移行",
      features: ["移行計画策定", "マスタ整備", "データクレンジング"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "運用・保守サポート",
      description: "導入後の安定運用と継続的な改善をサポート",
      features: ["ヘルプデスク", "トレーニング", "運用改善提案"]
    }
  ];

  const heroStats = [
    { number: "3", label: "最短導入期間", suffix: "ヶ月", icon: <Target className="w-6 h-6" /> },
    { number: "20-25", label: "残業時間削減", suffix: "%", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "0.01", label: "出荷ミス率", suffix: "%以下", icon: <Award className="w-6 h-6" /> },
    { number: "40", label: "在庫回転率向上", suffix: "%", icon: <Sparkles className="w-6 h-6" /> }
  ];

  const stats: StatItem[] = [
    { value: "20-25%", label: "残業時間削減", description: "月末売上処理業務の均一化により実現" },
    { value: "0.01%", label: "出荷ミス率", description: "1万個に1個以下の誤配送率を達成" },
    { value: "40%", label: "在庫回転率向上", description: "リアルタイム在庫管理で最適化" },
    { value: "3ヶ月", label: "最短導入期間", description: "業界標準の半分以下で稼働開始" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-slate-200' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              {/* Logo Image */}
              <img 
                src={`${process.env.PUBLIC_URL}/EvangSol_logo.png`} 
                alt="EvangSol"
                className="h-12"
              />
              <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-sky-50 to-blue-50 rounded-full border border-sky-200">
                <Trophy className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-bold text-sky-700">Oracle NetSuite認定パートナー</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => navigate('/services')}
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium relative group cursor-pointer"
              >
                サービス
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </button>
              
              {/* Solutions Dropdown */}
              <div 
                className="relative py-6"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button className="text-slate-700 hover:text-sky-600 transition-colors font-medium relative group flex items-center py-2 px-2 -m-2">
                  ソリューション
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-2 left-2 right-2 h-0.5 bg-sky-600 transition-all scale-x-0 group-hover:scale-x-100"></span>
                </button>
                
                {/* Dropdown Menu */}
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 -mt-2 pt-2 w-72">
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="py-2">
                      <button
                        onClick={() => navigate('/solutions/payment-matching')}
                        className="w-full px-4 py-3 hover:bg-sky-50 flex items-start group transition-colors"
                      >
                        <RefreshCw className="w-5 h-5 text-sky-600 mr-3 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium text-slate-800 group-hover:text-sky-600">入金消込ソリューション</div>
                          <div className="text-xs text-slate-600 mt-0.5">銀行データと売掛金の自動突合</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/solutions/ec-integration')}
                        className="w-full px-4 py-3 hover:bg-sky-50 flex items-start group transition-colors"
                      >
                        <Globe className="w-5 h-5 text-sky-600 mr-3 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium text-slate-800 group-hover:text-sky-600">ECデータ連携基盤</div>
                          <div className="text-xs text-slate-600 mt-0.5">ECサイトとNetSuiteをシームレス連携</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/solutions/industry-oms')}
                        className="w-full px-4 py-3 hover:bg-sky-50 flex items-start group transition-colors"
                      >
                        <Package className="w-5 h-5 text-sky-600 mr-3 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium text-slate-800 group-hover:text-sky-600">業界特化OMS</div>
                          <div className="text-xs text-slate-600 mt-0.5">業界特性に合わせた受注管理</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/solutions/material-planning')}
                        className="w-full px-4 py-3 hover:bg-sky-50 flex items-start group transition-colors"
                      >
                        <BarChart3 className="w-5 h-5 text-sky-600 mr-3 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium text-slate-800 group-hover:text-sky-600">資材計画の見える化</div>
                          <div className="text-xs text-slate-600 mt-0.5">需要予測と在庫の最適化</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/solutions/warehouse-integration')}
                        className="w-full px-4 py-3 hover:bg-sky-50 flex items-start group transition-colors"
                      >
                        <Database className="w-5 h-5 text-sky-600 mr-3 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium text-slate-800 group-hover:text-sky-600">ハンディ連携／WMS連携</div>
                          <div className="text-xs text-slate-600 mt-0.5">倉庫作業の効率化と自動化</div>
                        </div>
                      </button>
                      <button
                        onClick={() => navigate('/solutions/inventory-aging')}
                        className="w-full px-4 py-3 hover:bg-sky-50 flex items-start group transition-colors"
                      >
                        <FileText className="w-5 h-5 text-sky-600 mr-3 mt-0.5" />
                        <div className="text-left">
                          <div className="font-medium text-slate-800 group-hover:text-sky-600">在庫年齢表</div>
                          <div className="text-xs text-slate-600 mt-0.5">滞留在庫のリスク可視化</div>
                        </div>
                      </button>
                    </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => navigate('/case-studies')}
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium cursor-pointer relative group">
                導入事例
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="text-slate-700 hover:text-sky-600 transition-colors font-medium cursor-pointer relative group"
              >
                会社概要
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-sky-500/30 flex items-center group ml-4"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                無料相談
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={() => {
                navigate('/services');
                setIsMenuOpen(false);
              }}
              className="text-2xl text-slate-700 hover:text-sky-500"
            >
              サービス
            </button>
            <a href="#solutions" className="text-2xl text-slate-700 hover:text-sky-500">ソリューション</a>
            <button 
              onClick={() => {
                navigate('/case-studies');
                setIsMenuOpen(false);
              }}
              className="text-2xl text-slate-700 hover:text-sky-500">
              導入事例
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-2xl text-slate-700 hover:text-sky-500"
            >
              会社概要
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-full font-semibold"
            >
              無料相談
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 to-blue-300/40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <HeroSection 
            badge={undefined}
            title={
              <>
                <span className="text-slate-900 text-5xl md:text-6xl leading-tight">
                  最短<span className="text-sky-600 font-black">3ヶ月</span>で
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent text-5xl md:text-6xl font-black">
                  NetSuite導入を実現
                </span>
              </>
            }
            description={
              <>
                <span className="text-lg text-slate-700">
                  20年以上の実績を持つグループ会社EvangTechの技術力と
                </span>
                <br />
                <span className="text-lg font-bold text-slate-900">
                  AWS連携による革新的なクラウド統合で
                </span>
                <br />
                <span className="text-lg text-slate-700">
                  業界標準の<span className="font-black text-sky-600 text-xl">半分以下</span>の期間で確実に導入
                </span>
              </>
            }
            actions={
              <>
                <div className="flex flex-col items-center space-y-8">
                  {/* 実績データ */}
                  <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-lg rounded-2xl p-6 max-w-3xl w-full border border-slate-200 shadow-xl mt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="group">
                        <div className="text-3xl font-black text-sky-600 group-hover:scale-110 transition-transform">40,000+</div>
                        <div className="text-xs text-slate-600 font-medium">導入企業数</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform">219</div>
                        <div className="text-xs text-slate-600 font-medium">対応国・地域</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl font-black text-cyan-600 group-hover:scale-110 transition-transform">99.5%</div>
                        <div className="text-xs text-slate-600 font-medium">稼働率</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl font-black text-indigo-600 group-hover:scale-110 transition-transform">24/7</div>
                        <div className="text-xs text-slate-600 font-medium">サポート体制</div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-sky-200 shadow-md">
                      <Award className="w-5 h-5 mr-2 text-sky-600" />
                      <span className="text-sm font-bold text-slate-700">Oracle公式認定パートナー</span>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-green-200 shadow-md">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-sm font-bold text-slate-700">導入実績100社以上</span>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-blue-200 shadow-md">
                      <Shield className="w-5 h-5 mr-2 text-blue-600" />
                      <span className="text-sm font-bold text-slate-700">ISO 27001認証取得</span>
                    </div>
                  </div>

                  {/* Performance Badge */}
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full border border-sky-300 shadow-lg mt-2">
                    <Zap className="w-5 h-5 mr-2 text-sky-600" />
                    <span className="text-sm font-bold text-sky-800">業界最速導入・最高のコストパフォーマンス</span>
                  </div>

                  {/* CTAボタン */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="group px-10 py-5 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-600 hover:via-blue-600 hover:to-sky-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-sky-500/40 flex items-center justify-center relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                      <span className="relative flex items-center">
                        今すぐ無料相談
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    </button>
                    <button 
                      onClick={() => navigate('/features')} 
                      className="group px-8 py-5 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-sky-500 text-sky-700 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center justify-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        NetSuiteの強み
                      </span>
                    </button>
                  </div>

                  {/* Quick Contact Info */}
                  <div className="flex flex-wrap justify-center gap-6 text-sm mt-8">
                    <a href="tel:0120-123-456" className="flex items-center text-slate-600 hover:text-sky-600 transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="font-bold">0120-123-456</span>
                    </a>
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">平日 9:00-18:00</span>
                    </div>
                    <div className="flex items-center text-green-600 font-bold">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>相談無料</span>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </section>

      {/* 3 Core Values Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              なぜEvangSolが<span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">選ばれるのか</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">大手SIerとは違う、中堅・中小企業に最適な導入支援</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100 h-full flex flex-col">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="inline-flex items-center px-2 py-0.5 bg-sky-100 rounded-full mb-4 w-fit">
                  <span className="text-xs font-bold text-sky-700">POINT 01</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">業界最速導入</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Oracle認定のSuiteSuccess手法と20年の経験を融合。大手SIerの半分以下の期間で、確実な導入を実現します。
                </p>
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-200">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">通常導入期間</span>
                      <span className="text-sm font-bold text-slate-700">6-12ヶ月</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-sky-600 font-bold">EvangSol</span>
                      <span className="text-lg font-black text-sky-600">3-5ヶ月</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-xs font-bold text-sky-700">最短3ヶ月で本番稼働</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100 h-full flex flex-col">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <div className="inline-flex items-center px-2 py-0.5 bg-cyan-100 rounded-full mb-4 w-fit">
                  <span className="text-xs font-bold text-cyan-700">POINT 02</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">AWS連携の革新</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  最新のサーバーレス技術でWMS・EC・EDIを完全自動化。大手SIerの複雑な構成より、シンプルで拡張性の高いアーキテクチャを実現。
                </p>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-xs font-bold text-cyan-700">手作業ゼロ化</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-xs font-bold text-cyan-700">99.9%エラー削減</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-cyan-600" />
                      <span className="text-xs font-bold text-cyan-700">AWS認定資格取得者在籍</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100 h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="inline-flex items-center px-2 py-0.5 bg-blue-100 rounded-full mb-4 w-fit">
                  <span className="text-xs font-bold text-blue-700">POINT 03</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">真のプロ集団</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  2005年設立EvangTechの技術力継承。Oracle認定コンサルタント・会計事務所経験者が、大手にはできない柔軟で迅速なサポートを提供。
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-xs font-bold text-blue-700">ISO 27001認証取得</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-xs font-bold text-blue-700">会計事務所経験者在籍</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-xs font-bold text-blue-700">Oracle「Multi-Book Authorized」取得者在籍</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              導入プロセス<span className="text-sky-600">（最短3ヶ月）</span>
            </h2>
            <p className="text-xl text-slate-600">明確なステップで確実な導入を実現</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-sky-400 to-blue-500 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                {
                  step: "STEP 1",
                  title: "ヒアリング",
                  duration: "1週間",
                  description: "現状の課題と要件を詳細に把握",
                  icon: <Users className="w-8 h-8" />,
                  color: "from-sky-400 to-cyan-500"
                },
                {
                  step: "STEP 2", 
                  title: "要件定義",
                  duration: "2-3週間",
                  description: "業務フローの分析と最適な設計",
                  icon: <FileText className="w-8 h-8" />,
                  color: "from-cyan-500 to-sky-500"
                },
                {
                  step: "STEP 3",
                  title: "開発・設定",
                  duration: "4-6週間",
                  description: "カスタマイズと各種設定の実装",
                  icon: <Settings className="w-8 h-8" />,
                  color: "from-sky-500 to-blue-500"
                },
                {
                  step: "STEP 4",
                  title: "データ移行",
                  duration: "2-3週間",
                  description: "既存データの安全な移行",
                  icon: <Database className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "STEP 5",
                  title: "運用開始",
                  duration: "継続サポート",
                  description: "トレーニングと本番稼働",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-blue-600 to-indigo-600"
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 mx-auto`}>
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-sky-600 mb-2">{process.step}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                    <div className="text-sm text-sky-600 font-semibold mb-3">{process.duration}</div>
                    <p className="text-sm text-slate-600">{process.description}</p>
                  </div>
                  
                  {/* Connector dot for desktop */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-sky-500 rounded-full z-20"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">なぜ3ヶ月で導入できるのか？</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">SuiteSuccess手法</p>
                    <p className="text-xs text-slate-600">Oracleの迅速導入メソッド</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">20年の経験</p>
                    <p className="text-xs text-slate-600">蓄積されたノウハウ</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">専門チーム</p>
                    <p className="text-xs text-slate-600">各分野のエキスパート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              提供サービス
            </h2>
            <p className="text-xl text-slate-600">導入から運用まで、ワンストップでサポート</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-sky-400 transition-all hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl h-full flex flex-col">
                  <div className="text-sky-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 mr-2 text-sky-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              業界特化ソリューション
            </h2>
            <p className="text-xl text-slate-600">貴社の業界・業務に最適化された専門ソリューション</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => {
                  const routes = [
                    '/solutions/payment-matching',
                    '/solutions/ec-integration', 
                    '/solutions/industry-oms',
                    '/solutions/material-planning',
                    '/solutions/warehouse-integration',
                    '/solutions/inventory-aging'
                  ];
                  navigate(routes[index]);
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-sky-50 border border-slate-200 hover:border-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl p-6">
                  <div className="text-sky-500 mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{solution.title}</h3>
                  <p className="text-slate-600 text-sm">{solution.description}</p>
                  <div className="mt-4 inline-flex items-center text-sky-600 font-semibold">
                    詳細を見る <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button 
          onClick={() => navigate('/contact')}
          className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce flex items-center font-bold"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          無料相談
        </button>
      </div>

      {/* Trust Building Section with Numbers */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 relative overflow-hidden">
        <StatsSection 
          title="数字で見る導入効果"
          stats={stats}
          variant="gradient"
        />
        <div className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="text-white text-lg mb-6">
                中堅・中小企業のERP導入において、高額な初期投資を抑えながら<br />
                大企業並みのシステム環境を構築可能です
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                導入効果を詳しく聞く
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              業界別導入事例
            </h2>
            <p className="text-xl text-slate-600">製造業、小売業、サービス業など幅広い業界での成功実績</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                industry: "製造業", 
                company: "精密機器メーカーA社", 
                challenge: "複数拠点の在庫管理が煩雑",
                result: "在庫回転率40%向上・リードタイム50%短縮", 
                icon: <Building2 className="w-8 h-8" />, 
                color: "from-blue-400 to-blue-500" 
              },
              { 
                industry: "小売・商社", 
                company: "アパレル商社B社", 
                challenge: "ECと実店舗の在庫連携が困難",
                result: "残業時間50%削減・売上10%向上", 
                icon: <Truck className="w-8 h-8" />, 
                color: "from-sky-400 to-sky-500" 
              },
              { 
                industry: "サービス業", 
                company: "IT企業C社", 
                challenge: "プロジェクト収支の可視化が不十分",
                result: "収益性30%改善・請求漏れゼロ化", 
                icon: <Package className="w-8 h-8" />, 
                color: "from-cyan-400 to-cyan-500" 
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-sky-400 transition-all hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${study.color} text-white mb-4`}>
                  {study.icon}
                </div>
                <div className="text-sm text-sky-600 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{study.company}</h3>
                <div className="mb-4">
                  <p className="text-sm text-slate-500 mb-2">【課題】</p>
                  <p className="text-sm text-slate-700 mb-3">{study.challenge}</p>
                  <p className="text-sm text-slate-500 mb-2">【成果】</p>
                  <p className="text-slate-800 font-semibold">{study.result}</p>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-sky-500 hover:text-sky-600 transition-colors flex items-center font-semibold"
                >
                  詳細を聞く
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for Lead Nurturing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              よくあるご質問
            </h2>
            <p className="text-xl text-slate-600">NetSuite導入に関する疑問にお答えします</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "導入費用はどのくらいかかりますか？",
                a: "企業規模や導入範囲により異なりますが、クラウド型のため初期投資を大幅に抑えられます。詳細は無料相談でご案内いたします。"
              },
              {
                q: "既存システムからのデータ移行は可能ですか？",
                a: "はい、可能です。マスタ整備からデータクレンジングまで、安全で確実なデータ移行をサポートいたします。"
              },
              {
                q: "導入後のサポート体制は？",
                a: "24/7のヘルプデスク、定期的なトレーニング、運用改善提案など、導入後も継続的にサポートいたします。"
              },
              {
                q: "カスタマイズはどの程度可能ですか？",
                a: "SuiteScriptやワークフローを活用し、貴社独自の業務プロセスに合わせた柔軟なカスタマイズが可能です。"
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                  <span className="text-sky-500 mr-3">Q.</span>
                  {item.q}
                </h3>
                <p className="text-slate-700 ml-7">
                  <span className="text-sky-500 mr-3">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              その他のご質問はこちら
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative z-10">
          <div className="text-center py-6 px-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <Clock className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm text-white font-semibold">平均回答時間：1営業日以内</span>
            </div>
          </div>
          <CTASection 
            title={<>今すぐ無料相談で<br />貴社に最適な導入プランをご提案</>}
            description="20年以上の経験を持つ専門家が、貴社の課題を解決します"
            primaryButtonText="無料相談を予約する"
            primaryButtonAction={() => navigate('/contact')}
            gradient="from-sky-500 to-blue-600"
          />
          <div className="text-center pb-6 px-4 bg-gradient-to-r from-sky-500 to-blue-600">
            <p className="text-white/80 text-sm">
              ※ご相談は無料です。お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetSuite;