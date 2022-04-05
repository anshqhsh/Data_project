{
  isLoggedIn ? (
    <Li>
      <DropDown>
        <FontAwesomeIcon
          icon={faUser}
          style={{ justifyContent: 'center', alignItems: 'center' }}
          size="2x"
          color="black"
        />
        <ListContainer>
          <Ul>
            <Li>
              <Link to={`/user/${data?.me?.studentId}`}>프로필</Link>
            </Li>
            {data?.me?.isManaged ? (
              <Li>
                <Link to={`/manager`}>매니저</Link>
              </Li>
            ) : null}
            <Li onClick={logUserOut}>
              <Link>로그아웃</Link>
            </Li>
          </Ul>
        </ListContainer>
      </DropDown>
    </Li>
  ) : (
    <Link href={routes.home}>
      <Button>Login</Button>
    </Link>
  );
}
