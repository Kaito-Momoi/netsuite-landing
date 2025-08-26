import { RefreshCw, Globe, Package, BarChart3, Database, FileText } from 'lucide-react';
import { Feature } from '../types';

export const SOLUTION_FEATURES: Feature[] = [
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