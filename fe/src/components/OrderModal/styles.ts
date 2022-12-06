import styled from 'styled-components';

export const Overlay  = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 400px;
  border-radius: 8px;
  padding: 32px;



  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
    font-size: 24px;
  }

    button {
    background: transparent;
    border: 0;
    line-height: 0;
  }

  }

  .status-container {
    margin-top: 32px;


    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }


`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      opacity: 0.8;
    }

    strong {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;


export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }


  .primary {
    background: #333333;
    color: #fff;
    border-radius: 48px;
    border: 0;
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .secondary {
    border: 0;
    border-radius: 48px;
    background: transparent;
    color: #D73035;
    font-weight: bold;
    margin-top: 16px;
  }
`;
