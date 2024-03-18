import AddPost from "../../components/Patinet Screens/Profile/AddPost";
import CommonQuestions from "../../components/Patinet Screens/Profile/CommonQuestions";
import MyQuestions from "../../components/Patinet Screens/Profile/MyQuestions";
import ProfileAndCover from "../../components/Patinet Screens/Profile/ProfileAndCover";
import st from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={st.container}>
      <ProfileAndCover />
      <AddPost />
      <MyQuestions />
      <CommonQuestions />
    </div>
  );
}
