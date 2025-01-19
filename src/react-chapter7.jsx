
import CounterWithUseState from './chapter-7-react-state-management/Counter/CounterWithUseState';
import CounterWithUseReducer from './chapter-7-react-state-management/Counter/CounterWithUseReducer';
import CounterWithPropsParent from './chapter-7-react-state-management/Counter/CounterWithProps/CounterWithPropsParent';

function ReactChapter7() {
  return (
    <div>
      <h1>React State Management</h1>
      <CounterWithUseState />
      <CounterWithUseReducer />
      <CounterWithPropsParent />
      
    </div>
  );
}

export default ReactChapter7;
