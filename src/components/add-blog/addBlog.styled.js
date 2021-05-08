import styled, { css } from "styled-components";
import xImage from "../../resources/images/x-png.png";

export const Container = styled.div`
  margin: 20px !important;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
`;

export const ErrorSpan = styled.span`
  color: red;
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  ${(props) => {
    if (!props.validTitle) {
      return css`
        background-image: url(${xImage});
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-position: right 10px top 10px;
        border-color: red;
      `;
    }
  }}
`;

export const ImageInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;
export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  ${(props) => {
    if (!props.validDescription) {
      return css`
        background-image: url(${xImage});
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-position: right 10px top 10px;
        border-color: red;
      `;
    }
  }}
`;

export const DecriptionContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :disabled {
    cursor: auto;
    pointer-events: all !important;
    opacity: 0.7
  }
  ${(props) => {
    if (props.variant === "blue") {
      return css`
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
      `;
    }
    if (props.variant === "light") {
      return css`
        color: #000;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
      `;
    }
    if (props.variant === "grey") {
      return css`
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      `;
    }
  }}
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;
