import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';
import './App.css';

function App() {
  const users = [
    { name: "Alice", age: 25, bio: "Loves hiking and photography" },
    { name: "Bob", age: 30, bio: "Enjoys cooking and traveling" }
  ];

  return (
    <UserContext.Provider value={users}>
      <Header />
      <MainContent />
      <UserProfile /> {/* <-- Will consume context */}
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
