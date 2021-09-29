import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Twitch } from '../../icons/twitch.svg';

const View = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AuthorizeButton = styled.div`
    display: inline-flex;
    border: 2px solid transparent;
    background-color: #9147ff;
    padding: 15px;
    color: #fff;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: .3s;
    &:hover {
        background-color: #fff;
        color: #9147ff;
        border-color: #9147ff;
        svg path {
          fill: #9147ff;
        }
    }
`;

const Button = styled.a`
    text-decoration: none;
`;

const TwitchIcon = styled(Twitch)`
      width: 15px;
      height: 15px;
      path {
        fill: #fff;
      }
      margin-right: 7px;
`;

const clientId = "o7hx4ouu9dcuuui6k8xc9gt073epbg";
const registeredURI = "http://localhost:3000";
const responseType = "token";
const scope = "chat:read chat:edit";
const redirectUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${registeredURI}&response_type=${responseType}&scope=${scope}`;

const LoginView = () => (
    <View>
        <Button href={redirectUrl}>
            <AuthorizeButton>
                <TwitchIcon />
                Authorize via Twitch
            </AuthorizeButton>
        </Button>
    </View>
);

export default LoginView;