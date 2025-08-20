import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, 
  Calendar, 
  AlertTriangle, 
  TrendingDown, 
  BarChart3, 
  Clock,
  ArrowLeft,
  Download,
  Filter,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface InventoryItem {
  id: string;
  itemCode: string;
  itemName: string;
  category: string;
  quantity: number;
  unitCost: number;
  totalValue: number;
  lastReceived: string;
  ageDays: number;
  status: 'normal' | 'warning' | 'critical';
}

const InventoryAging: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // サンプルデータの生成
  useEffect(() => {
    const sampleData: InventoryItem[] = [
      {
        id: '001',
        itemCode: 'PRD-001',
        itemName: '電子部品A',
        category: '電子部品',
        quantity: 150,
        unitCost: 2500,
        totalValue: 375000,
        lastReceived: '2024-10-15',
        ageDays: 127,
        status: 'warning'
      },
      {
        id: '002',
        itemCode: 'PRD-002',
        itemName: '金属部品B',
        category: '金属部品',
        quantity: 80,
        unitCost: 5000,
        totalValue: 400000,
        lastReceived: '2024-06-20',
        ageDays: 243,
        status: 'critical'
      },
      {
        id: '003',
        itemCode: 'PRD-003',
        itemName: 'プラスチック部品C',
        category: 'プラスチック部品',
        quantity: 200,
        unitCost: 1000,
        totalValue: 200000,
        lastReceived: '2025-01-10',
        ageDays: 40,
        status: 'normal'
      },
      {
        id: '004',
        itemCode: 'PRD-004',
        itemName: '電子部品D',
        category: '電子部品',
        quantity: 50,
        unitCost: 8000,
        totalValue: 400000,
        lastReceived: '2024-03-15',
        ageDays: 340,
        status: 'critical'
      },
      {
        id: '005',
        itemCode: 'PRD-005',
        itemName: '金属部品E',
        category: '金属部品',
        quantity: 120,
        unitCost: 3000,
        totalValue: 360000,
        lastReceived: '2024-12-01',
        ageDays: 80,
        status: 'normal'
      }
    ];
    setInventoryData(sampleData);
  }, []);

  // フィルタリング処理
  const filteredData = inventoryData.filter(item => {
    let periodMatch = true;
    let categoryMatch = true;

    if (selectedPeriod !== 'all') {
      switch(selectedPeriod) {
        case '0-30':
          periodMatch = item.ageDays <= 30;
          break;
        case '31-90':
          periodMatch = item.ageDays > 30 && item.ageDays <= 90;
          break;
        case '91-180':
          periodMatch = item.ageDays > 90 && item.ageDays <= 180;
          break;
        case '180+':
          periodMatch = item.ageDays > 180;
          break;
      }
    }

    if (selectedCategory !== 'all') {
      categoryMatch = item.category === selectedCategory;
    }

    return periodMatch && categoryMatch;
  });

  // 統計データの計算
  const statistics = {
    totalItems: filteredData.length,
    totalValue: filteredData.reduce((sum, item) => sum + item.totalValue, 0),
    criticalItems: filteredData.filter(item => item.status === 'critical').length,
    warningItems: filteredData.filter(item => item.status === 'warning').length,
    averageAge: filteredData.length > 0 
      ? Math.round(filteredData.reduce((sum, item) => sum + item.ageDays, 0) / filteredData.length)
      : 0
  };

  // データのリフレッシュ
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // CSVエクスポート
  const handleExport = () => {
    alert('CSV形式でデータをエクスポートします');
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                戻る
              </button>
              <h1 className="text-2xl font-bold text-gray-900">在庫エージング分析</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleRefresh}
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                更新
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                エクスポート
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 統計カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">総アイテム数</p>
                <p className="text-2xl font-bold text-gray-900">{statistics.totalItems}</p>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">在庫総額</p>
                <p className="text-2xl font-bold text-gray-900">¥{statistics.totalValue.toLocaleString()}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">要注意</p>
                <p className="text-2xl font-bold text-red-600">{statistics.criticalItems}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">警告</p>
                <p className="text-2xl font-bold text-yellow-600">{statistics.warningItems}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">平均経過日数</p>
                <p className="text-2xl font-bold text-gray-900">{statistics.averageAge}日</p>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* フィルター */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-gray-600" />
            <h2 className="text-lg font-semibold">フィルター</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                経過日数
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">すべて</option>
                <option value="0-30">0-30日</option>
                <option value="31-90">31-90日</option>
                <option value="91-180">91-180日</option>
                <option value="180+">180日以上</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                カテゴリー
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">すべて</option>
                <option value="電子部品">電子部品</option>
                <option value="金属部品">金属部品</option>
                <option value="プラスチック部品">プラスチック部品</option>
              </select>
            </div>
          </div>
        </div>

        {/* データテーブル */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">在庫詳細</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ステータス
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    品目コード
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    品目名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    カテゴリー
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    数量
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    単価
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    在庫金額
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    最終入荷日
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    経過日数
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusIcon(item.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.itemCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.itemName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {item.quantity.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      ¥{item.unitCost.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                      ¥{item.totalValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.lastReceived}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(item.status)}`}>
                        {item.ageDays}日
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">該当するデータがありません</p>
            </div>
          )}
        </div>

        {/* エージング分析グラフ */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">エージング分布</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="h-32 bg-green-500 rounded-lg flex items-end justify-center">
                <div className="bg-green-600 rounded-t-lg w-full" style={{height: '30%'}}>
                  <div className="text-white font-bold pt-2">2</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">0-30日</p>
            </div>
            <div className="text-center">
              <div className="h-32 bg-yellow-500 rounded-lg flex items-end justify-center">
                <div className="bg-yellow-600 rounded-t-lg w-full" style={{height: '20%'}}>
                  <div className="text-white font-bold pt-2">1</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">31-90日</p>
            </div>
            <div className="text-center">
              <div className="h-32 bg-orange-500 rounded-lg flex items-end justify-center">
                <div className="bg-orange-600 rounded-t-lg w-full" style={{height: '20%'}}>
                  <div className="text-white font-bold pt-2">1</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">91-180日</p>
            </div>
            <div className="text-center">
              <div className="h-32 bg-red-500 rounded-lg flex items-end justify-center">
                <div className="bg-red-600 rounded-t-lg w-full" style={{height: '30%'}}>
                  <div className="text-white font-bold pt-2">2</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">180日以上</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAging;