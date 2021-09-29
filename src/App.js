import React from 'react';
import './App.css';
import styled from 'styled-components';
import LoginView from './views/Login';
import ProfileView from './views/Profile';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    const hashExists = document.location.hash.includes("access_token");
    return (
        <Container>
            {
                hashExists ?
                <ProfileView />
                :
                <LoginView />
            }
        </Container>
    );
}

export default App;
