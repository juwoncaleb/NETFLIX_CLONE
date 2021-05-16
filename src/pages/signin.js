import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import * as ROUTES from '../constant/routes';

export default function SignIn() {
  const history  = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

     firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title> Sign In</Form.Title>
                    {/* check for error */}
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method='POST'>
                        <Form.Input placeholder="Email address"
                            onChange={({ target }) =>
                                setEmailAddress(target.value)} >
                        </Form.Input>

                        <Form.Input
                            type='password'
                            placeholder="Password"
                            autocomplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit
                        disabled= { isInvalid }
                         type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <br></br> <br></br>
                        <Form.Link to='/signup'>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCH ,to ensure you not a bot
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};





