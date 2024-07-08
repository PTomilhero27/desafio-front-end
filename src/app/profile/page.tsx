import HeaderContainer from "@/components/header/HeaderContainer";
import UserProfile from "./components/profile";

function Page() {
  return (
    <div>
      <HeaderContainer />

      <div className="p-5">
        <UserProfile />
      </div>
    </div>
  );
}

export default Page;
