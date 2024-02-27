import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Card,
  NavDropdown,
} from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
function RootLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((store) => store.auth);
  const { userInfo } = userLogin;
  const handleLogout = () => {
    dispatch(logout());
    navigate("login");
  };
  const registerHandler = () => {
    navigate("/register");
  };
  const redirectProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="root-layout">
      <header>
        <Navbar bg="primary" variant="dark " expand="lg" collapseOnSelect>
          <Container>
            {/* <Navbar.Brand href="/">
             
             
            </Navbar.Brand> */}
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={require("./logo.png")}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
                Testcms
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* {userInfo && (
                  <div>
                    <LinkContainer to="/tests">
                      <Nav.Link>
                        <i className="fa-regular fa-flask"></i>Tests
                      </Nav.Link>
                    </LinkContainer>
                  </div>
                )} */}

                {userInfo ? (
                  <>
                    <Nav.Link href="/tests">
                      <i className="fa-regular fa-flask"></i>Tests
                    </Nav.Link>
                    {/* <NavDropdown title={userInfo.username} id="username">
                      <NavDropdown.Item onClick={redirectProfile}>
                        Profile
                      </NavDropdown.Item>

                      <NavDropdown.Item onClick={handleLogout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown> */}

                    {userInfo ? (
                      <NavDropdown title={userInfo.name} id="username">
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/">
                          <NavDropdown.Item onClick={handleLogout}>
                            Logout
                          </NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    ) : (
                      <LinkContainer to="/">
                        <Nav.Link>
                          <i className="fa fa-user"></i>Login
                        </Nav.Link>
                      </LinkContainer>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="adminmenu">
                        <LinkContainer to="/admin/userlist">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/register">
                          <NavDropdown.Item>Register</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </>
                ) : (
                  <Nav.Link href="login">
                    <i className="fa-solid fa-user"></i>Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main
        className="py-3  "
        style={{ marginVertical: 40, marginLeft: 50, marginRight: 50 }}
      >
        <Card className="m-2  shadow-lg">
          <Outlet />
        </Card>
      </main>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; TRMS</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default RootLayout;
