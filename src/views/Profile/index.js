import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const View = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 15px 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileName = styled.p`
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: bold;
    color: darkblue;
`;

const Avatar = styled.div`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    background-color: gray;
    border-radius: 50%;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`;

const hash = document.location.hash.split("&");
const accessToken = hash[0].split("=")[1];

const config = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-Id": "o7hx4ouu9dcuuui6k8xc9gt073epbg"
    }
};

const ProfileView = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://api.twitch.tv/helix/users`, config)
            .then(function (response) {
                setUserData(response.data.data[0]);
                setIsLoading(false);
            })
            .catch(function (error) {
                setIsLoading(false);
                console.log(error);
            });
    }, []);
    return (
        <View>
            {
                isLoading ?
                    <p>Loading...</p>
                    :
                    <>
                        <ProfileName>{userData.display_name}</ProfileName>
                        <Avatar>
                            <Image src={userData.profile_image_url} alt="Avatar"/>
                        </Avatar>
                        <iframe
                            title="chat"
                            id="twitch-chat-embed"
                            src={`https://www.twitch.tv/embed/t_hrytsaienko/chat?parent=localhost`}
                            height="450"
                            width="400">
                        </iframe>
                    </>
            }
        </View>
    )
}

export default ProfileView;