import ColorBoxes from './components/ColorBox/ColorBoxes';

const colors = ['#F6F5F2', '#F0EBE3', '#F3D0D7', '#FFEFEF', '#FFC94A', '#C08B5C', '#795458', '#453F78', '#0C0C0C', '#481E14', '#627254'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorBoxes colors={colors} />
      </header>
    </div>
  );
}

export default App;
