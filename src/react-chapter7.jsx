
import CounterWithUseState from './chapter-7-react-state-management/Counter/CounterWithUseState';
import CounterWithUseReducer from './chapter-7-react-state-management/Counter/CounterWithUseReducer';
import CounterWithPropsParent from './chapter-7-react-state-management/Counter/CounterWithProps/CounterWithPropsParent';
import ProviderComponent from './chapter-7-react-state-management/ContextAPIExample1/ProviderComponent';


function ReactChapter7() {
  return (
    <div>
      <h1>React State Management</h1>
      <CounterWithUseState />
      <CounterWithUseReducer />
      <CounterWithPropsParent />
      <ProviderComponent />
      
    </div>
  );
}

export default ReactChapter7;
