import React from 'react';
// style component 
import { Inner, Container, Pane, Item, Image, SubTitle, Title } from "./styles/jumbotron";
export default function Jumbotron({ direction = "row", children, ...restProps }) {
    return (
        <Item>
            <Inner  direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}> {children}</Container>
}
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}> {children}</Pane>
}
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubtitle({ children, ...restProps }) {
    return <SubTitle {...restProps}> {children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps}></Image>
}