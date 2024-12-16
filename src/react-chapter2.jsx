import {GreetingComponent} from './chapter2-react-components-and-props/functional-components/GreetingComponent.jsx';
import LifecycleDemo from './chapter2-react-components-and-props/class-components/LifecycleDemo.jsx';
import UserCard from './chapter2-react-components-and-props/props/UserCard.jsx';
import WelcomeMessage from './chapter2-react-components-and-props/default-props/WelcomeMessage.jsx';
import ProfileCard from './chapter2-react-components-and-props/prop-types/ProfileCard.jsx';
import ListItems from './chapter2-react-components-and-props/react-fragments/ListItems.jsx';
const ReactChapter2 = () => {
  return (
    <div>
      <h1>React Components and Props Examples</h1>
      <GreetingComponent name="nandu"/>
      <LifecycleDemo />
      <UserCard school="Newton School" fees={250000} />
      <WelcomeMessage />
      <ProfileCard name="Jothi" age={31} />
      <ListItems></ListItems>
      
    </div>
  );
};

export default ReactChapter2;
