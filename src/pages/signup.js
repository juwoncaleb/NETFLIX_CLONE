import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import * as ROUTES from '../constant/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const handleSignup = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(() => {
          history.push(ROUTES.BROWSE)
        })
      ).catch((error)=>{
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })
  }
  return (
    <div>
      <HeaderContainer>
        <Form>
          <Form.Title> Sign up</Form.Title>
          {/* check for error */}
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method='POST'>

            <Form.Input placeholder='First-name'
              onChange={({ target }) =>
                setFirstName(target.value)
              }>
            </Form.Input>
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
              disabled={isInvalid}
              type="submit">Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user <br></br> <br></br>
            <Form.Link to='/signin'>Sign in</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCH ,to ensure you not a bot
                    </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </div>
  )
}
