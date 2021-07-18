import { showMessage } from "react-native-flash-message";

import defaultStyle from "../config/styles";
import Sounds from "./Sounds";

const showRemove = (msg) => {
    Sounds.SoundRemove()
    return showMessage({
        message: msg,
        type: "success",
        icon: "auto",
        backgroundColor: defaultStyle.colors.favorit,
        titleStyle: defaultStyle.errorMsg,
    });
}

export default showRemove;