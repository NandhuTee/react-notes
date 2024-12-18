import { HelloWorld } from './chapter1-introduction-to-react/functional-components/HelloWorld.jsx';
import {GreetUser} from './chapter1-introduction-to-react/functional-components/GreetUser.jsx'
import {Counter} from './chapter1-introduction-to-react/state/Counter.jsx'
import ToggleEvent from './chapter1-introduction-to-react/state/Counter.jsx'
import WelcomeMessage from './chapter1-introduction-to-react/props/WelcomeMessage.jsx'
import ProductCard from './chapter1-introduction-to-react/props/ProductCard.jsx'


const LearnReactChapter1 = () => {
  return (
    <div>
      <HelloWorld />
      <GreetUser />  
      <Counter/>  
      <ToggleEvent/>
      <WelcomeMessage name="Nandhu"/>
      <ProductCard 
      name="Smartphone" 
      price={699} 
      description="A high-end smartphone with excellent features." />

    </div>
  );
};

export default LearnReactChapter1;
