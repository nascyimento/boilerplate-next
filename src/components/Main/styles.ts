import styled from "styled-components";

export const Container = styled.main`
   background-color: #06092b;
   color: #efefef;
   width: 100%;
   height: 100%;
   padding: 1rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;

export const Logo = styled.img`
   width: min(28rem, 100%);
`;

export const Title = styled.h1`
   margin: 2rem 0 0.5rem;
`;

export const Description = styled.h2`
   margin-bottom: 4rem;
   text-align: center;
`;

export const Illustration = styled.img`
   width: min(30rem, 100%);
`;
