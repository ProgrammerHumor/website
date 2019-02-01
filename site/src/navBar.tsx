import React, { Component, ReactNode } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from "semantic-ui-react";
import logo from "./logo.png"
import { Link } from "react-router-dom";

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
}:
  {
    children: ReactNode,
    leftItems?: Array<object>,
    rightItems?: Array<object>,
    onPusherClick: Function,
    onToggle: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    visible: boolean,
  }) => (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        direction="top"
      >
        <NavBarLeftMobile leftItems={leftItems} />
      </Sidebar>
      <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: "100vh" }}>
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Item onClick={onToggle} position="right">
            <Icon name="sidebar" />
          </Menu.Item>
          <NavBarRight rightItems={rightItems} />
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );


const NavBarDesktop = (
  { leftItems, rightItems }:
    {
      leftItems?: Array<object>,
      rightItems?: Array<object>
    }
) => (
    <Menu fixed="top" inverted>
      <Menu.Item onClick={() => console.log('test')}>
        <Image size="mini" src={logo} />
      </Menu.Item>
      <NavBarLeftDesktop leftItems={leftItems} />
      <NavBarRight rightItems={rightItems} />
    </Menu>
  );

const NavBarChildren = ({ children }: { children: ReactNode }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

const NavBarRight = ({ rightItems }: { rightItems?: Array<object> }) => {
  let items;
  if (rightItems) {
    items = rightItems.map((item: object) => (
      <Menu.Item {...item} />
    ));
    return (
      <Menu.Menu position="right">
        {items}
      </Menu.Menu>
    )
  }
  else {
    return (
      <>
        {items}
      </>
    );
  }
}

const NavBarLeftMobile = ({ leftItems }: { leftItems?: Array<object> }) => {
  let items;
  if (leftItems) {
    items = leftItems.map((item: object) => <Menu.Item {...item} />);
  }
  else {
    items = (
      <Menu.Menu>
        {items}
      </Menu.Menu>
    )
  }
  return (
    <>
      {items}
    </>
  )
}

const NavBarLeftDesktop = ({ leftItems }: { leftItems?: Array<object> }) => {
  let items;
  if (leftItems) {
    items = leftItems.map((item: object) => (
      <Menu.Item {...item} />
    ));
  }
  else {
    items = (
      <Menu.Menu>
        {items}
      </Menu.Menu>
    )
  }
  return (
    <Menu.Menu>
      {items}
    </Menu.Menu>
  )
}

export default class NavBar extends Component<{ leftItems?: Array<object>, rightItems?: Array<object> }, {}> {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems }: { children?: ReactNode, leftItems?: Array<object>, rightItems?: Array<object> } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
