import axios from "axios";
import { useState } from "react";

const usePostLinkData = () => {
  const [iconId, setIconId] = useState("");

  const postData = ({formData}) => {

    axios.post("/", { name: "No name", ...formData })
      .then((res) => {
        setIconId(res.data);
      });

      return iconId;
  };

  return postData;
};

export default usePostLinkData;
