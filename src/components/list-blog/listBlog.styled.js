import styled, { css } from "styled-components";
import { Card } from "react-bootstrap";
import { MdNavigateNext } from "react-icons/md";

export const StyledCard = styled(Card)`
  width: 18rem;
  margin:auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StyledCardImage = styled(Card.Img)`
 max-width:200;
`;

export const Link = styled.a`
 text-align:right;
 margin-right:10px;
 text-decoration: none;
`;

export const ContinueReadingIcon = styled(MdNavigateNext)`
  width: 25px;
  height: 25px;
 
`;

export const DateLabel = styled.div`
 color:grey;
`;

export const FreeStyleText = styled.div`
`;


