import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Typography = styled.Text`
  font-size: ${(props) => {
    switch (props.type) {
      case "primary":
        return "16px";
      case "secondary":
        return "16px";
      default:
        return "16px";
    }
  }};

  font-family: ${(props) => {
    switch (props.type) {
      case "primary":
        return "Poppins-SemiBold";
      case "secondary":
        return "Poppins-Regular";
      default:
        return "Poppins-Medium";
    }
  }};

  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || colors.brandBlack};
  opacity: ${(props) => props.opacity || "1"};
`;
