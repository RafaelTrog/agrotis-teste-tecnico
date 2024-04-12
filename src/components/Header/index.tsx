import * as S from "./style";
import logoAgrotis from "../../assets/logoAgrotis.svg";

export default function Header() {
  return (
    <S.Container>
      <img
        src={logoAgrotis}
        alt="Agrotis"
        title="Agrotis"
        width={74}
        height={14}
      />
    </S.Container>
  )
}