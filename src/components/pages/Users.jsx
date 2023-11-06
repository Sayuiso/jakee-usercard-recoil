import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

//10件のダミーデータ。valには番号が入る
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `さゆいそ${val}`,
    image:
      "https://source.unsplash.com/elephant-walking-during-daytime-QJbyG6O0ick",
    email: "1234@ezweb.jp",
    phone: "080-6560-6118",
    company: {
      name: "ライト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
    // console.log(userInfo);
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SSecondaryButton onClick={onClickSwitch}>切り替え</SSecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* text-align: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const SUserArea = styled.div`
  /* flex: 1; */
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

//なぜかスタイル拡張ができない、未解決
const SSecondaryButton = styled(SecondaryButton)`
  margin-top: 16px;
  color: red;
`;
