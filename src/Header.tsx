import * as React from 'react';

interface IProps {
    name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
    <h1>
        Hello, {props.name}, this is the header.
    </h1>
);

Header.defaultProps = {
    name: 'world',
};

export default Header;