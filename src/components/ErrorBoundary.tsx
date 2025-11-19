import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Custom fallback UI to render when an error occurs */
  fallback?: (error: Error, errorInfo: ErrorInfo, resetError: () => void) => ReactNode;
  /** Callback function called when an error is caught */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component to catch React component errors
 * Provides a fallback UI and error logging capabilities
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call optional onError callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Update state with error info
    this.setState({
      error,
      errorInfo,
    });

    // In production, you would send this to an error reporting service
    // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
  }

  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback(
          this.state.error,
          this.state.errorInfo!,
          this.resetError
        );
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold text-center text-slate-900 mb-4">
                エラーが発生しました
              </h1>

              <p className="text-center text-slate-600 mb-8">
                申し訳ございません。予期しないエラーが発生しました。
                <br />
                問題が解決しない場合は、お手数ですがページをリロードしてください。
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-8 p-4 bg-slate-100 rounded-lg border border-slate-300">
                  <h2 className="text-lg font-bold text-slate-900 mb-2">
                    エラー詳細（開発環境のみ表示）
                  </h2>
                  <p className="text-sm text-red-600 mb-2 font-mono">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="text-xs text-slate-600">
                      <summary className="cursor-pointer font-semibold mb-2">
                        コンポーネントスタック
                      </summary>
                      <pre className="whitespace-pre-wrap overflow-auto max-h-60 p-2 bg-white rounded border border-slate-200">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.resetError}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  再試行
                </button>

                <button
                  onClick={() => (window.location.href = '/')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-bold hover:bg-slate-300 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  ホームに戻る
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
