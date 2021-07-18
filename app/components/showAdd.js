import { showMessage } from "react-native-flash-message";

import defaultStyle from "../config/styles";
import Sounds from "./Sounds";

const showAdd = (msg) => {
    Sounds.SoundOk()
    return showMessage({
        message: msg,
        type: "success",
        icon: "auto",
        backgroundColor: defaultStyle.colors.ok,
        titleStyle: defaultStyle.errorMsg,
    });
}

export default showAdd;