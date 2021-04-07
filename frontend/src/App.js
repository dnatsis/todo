import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import TodoScreen from './screens/TodoScreen';
import EditScreen from './screens/EditScreen';
import CompletedScreen from './screens/CompletedScreen';
import PomodoroScreen from './screens/PomodoroScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/create" component={CreateScreen} />
          <Route path="/pomodoro" component={PomodoroScreen} />
          <Route path="/completed" component={CompletedScreen} />
          <Route path="/todo/:id" component={TodoScreen} exact />
          <Route path="/todo/:id/edit" component={EditScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
