import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // ✅ import Counter
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* User Profiles */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="Bob"
        age={30}
        bio="Enjoys cooking and traveling"
      />

      {/* Counter */}
      <Counter />   {/* ✅ render the Counter here */}

      <Footer />
    </div>
  );
}

export default App;
