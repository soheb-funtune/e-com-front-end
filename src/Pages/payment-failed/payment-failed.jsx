import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();
  const { paymentErrors } = useSelector((state) => state?.home);
  return (
    <StyledWrap>
      {paymentErrors && (
        <InnerContainer>
          <SuccessHeading>Payment Successfull</SuccessHeading>

          <p>Order ID : {paymentErrors?.description}</p>
          <p>Payment ID : {}</p>
          <StyledButton onClick={() => navigate("/")}>Go To Home</StyledButton>
        </InnerContainer>
      )}
    </StyledWrap>
  );
};

export default PaymentFailed;

const StyledWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
`;
const InnerContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SuccessHeading = styled.h2`
  color: greenyellow;
`;
const StyledButton = styled.button`
  width: fit-content;
  margin: auto;
  margin-top: 20px;
  padding: 10px 15px;
  background: orange;
  border: none;
  color: white;
`;
