import * as S from "./Styles";

export default function Typography({ type, color, opacity, align, children }) {
  return (
    <S.Typography type={type} opacity={opacity} color={color} align={align}>
      {children}
    </S.Typography>
  );
}
