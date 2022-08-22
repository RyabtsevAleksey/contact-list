import './App.css';
import Parent from './components/ParentToChild/Parent';
import Parent2 from './components/ChildToParent/Parent2';
import Parent3 from './components/SiblingToSibling/Parent3';
import Parent4 from './components/ParentToGrandchild/Parent4';


function App() {
  return (
    <>
    <div className='main__flex' >
      <Parent />
      <Parent2 />
      <Parent3 />
      <Parent4 />
    </div>
    </>
  );
}

export default App;
