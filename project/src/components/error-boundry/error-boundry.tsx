import React, { ErrorInfo, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props:IProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error( error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Возникла ошибка.</h1>;
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary;