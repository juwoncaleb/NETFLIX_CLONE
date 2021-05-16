import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { PlayButton, Search, SearchIcon, SearchInput ,Profile,Dropdown,Container,Link,Group, Background, Logo, Picture, ButtonLink, Feature, Text,FeatureCallOut} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}> {children}</Background> : children;

}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}
Header.Search = function HeaderSearch({ searchTerm,setSearchTerm, ...restProps}) {
const [searchActive, setSearchActive] = useState(false);
return (
    <Search {...restProps}>
        <SearchIcon onClick={()=> setSearchActive((searchTerm)=>!searchActive)}>
            <img src="/images/icons/search.png" alt="Search"/>
        </SearchIcon>
        <SearchInput value={searchTerm} 
        onChange={({target})=> setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        >

        </SearchInput>
    </Search>
)
}
Header.FeatureCallOut= function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}
Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}
Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>
}

 Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
     return <Link {...restProps}>{children}</Link>
 }
 Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}


Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}></Logo>
        </ReactRouterLink>
    )
}
