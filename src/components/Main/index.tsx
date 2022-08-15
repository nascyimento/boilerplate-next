import { MouseEvent } from "react";
import * as S from "./styles";

export type MainProps = {
   title?: string;
   description?: string;
};

const Main = ({
   title = "React Avançado",
   description = "TypeScript, React, NextJS e Styled Components",
}: MainProps) => (
   <S.Container>
      <S.Logo
         src="/assets/logo.svg"
         alt="Logo do react e React Avançado escrito ao lado."
         onDragStart={(e: MouseEvent) => {
            e.preventDefault();
         }}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
         src="/assets/hero-illustration.svg"
         alt="Um desenvolvedor sentado de frente para uma tela com código."
         onDragStart={(e: MouseEvent) => {
            e.preventDefault();
         }}
      />
   </S.Container>
);

export default Main;
