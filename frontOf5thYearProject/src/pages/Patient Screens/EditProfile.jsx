import { useEffect } from "react";
import ProfAndCovEdit from "../../components/Patinet Screens/EditProfile/ProfAndCovEdit";
import st from "./Profile.module.css";

import { CircularProgress } from "@mui/material";
import getData from "../../functions/getData";

export default function EditProfile() {
  useEffect(() => {});

  return (
    <div className={st.container}>
      <ProfAndCovEdit />
    </div>
  );
}
