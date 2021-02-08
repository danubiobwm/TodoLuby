import React from 'react';
import GlobalStyles from '../styles/global';
import NavBar from './NavBar';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {Container, Content} from './styles';

import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';


const App = () => {

    return (
        <>
            <TodoContext>
                <Router>
                    <NavBar />
                    <Container>
                        <Content>
                        <Switch>
                            <Route path='/create'>
                                <AddTodo />
                            </Route>
                            <Route path='/'>
                                <h4>Minha Lista de tarefas</h4>
                                <TodoList />
                            </Route>
                        </Switch>
                        </Content>
                    </Container>
                </Router>
            </TodoContext>
            <GlobalStyles />
           
        </>
    );
}
export default App;