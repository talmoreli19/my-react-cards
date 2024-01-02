// Import necessary components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import SignUp from './components/Signup';
import SignIn from './components/SignIn';
import SignOut from './components/signout';
import SignUpBiz from './components/SignUpBiz';
import MyCards from './components/Mycards';
import ProtectedRoute from './components/common/protectedRoute';
import CardsCreate from './components/CardsCreate';
import CardDelete from './components/carddelete';
import MyNavbar from './components/Navbar';
import CardsEdit from './components/cardsedit';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfoPage from './components/UserInfopage';

function App() {
  return (
    <Router>
      <div className="app d-flex flex-column min-vh-100">
        <header className="pb-3">
          <MyNavbar />
        </header>
        <main className="flex-fill container">
          <Routes>
            {/* Add the route for the Home component */}
            <Route path="/home" element={<Home />} />

            {/* Add other routes as needed */}
            <Route path="/signin" element={<SignIn redirect="/" />} />
            <Route path="/signup" element={<SignUp redirect="/sign-in" />} />
            <Route path="/signupbiz" element={<SignUpBiz redirect="/my-cards" />} />
            <Route path="/signout" element={<SignOut />} redirect="/" />
            <Route path="/mycards" element={<MyCards />} />
            <Route path="/create-card" element={<CardsCreate />} />
            <Route path="/my-cards/delete/:id" element={<CardDelete />} />
            <Route path="/my-cards/edit/:id" element={<CardsEdit />} />
            <Route path="/user-info" element={<UserInfoPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
