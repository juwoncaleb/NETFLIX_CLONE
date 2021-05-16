import React from 'react';
import { Header, Profiles} from "../components";
import * as ROUTES from "../constant/routes";
import logo from "../logo.svg";


export  function SelectProfileContainer({ user, setProfile }) {
    return (
        <div>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                    </Header.Frame>
            </Header> 
            <Profiles>
                <Profiles.Title>Who is watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={()=> 
                    setProfile({
                        displayName:user.displayName,
                        photoURL:user.photoURL
                    })}>
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </div>
    )
}
