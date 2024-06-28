import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: #0d1117;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .repo-details {
    margin-left: 20px;
    flex-grow: 1;
  }

  h3 {
    font-size: 24px;
    color: #c9d1d9;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #8b949e;
    margin-bottom: 10px; 
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between; 

    /* Ajuste de espaço entre os links */
    gap: 20px;

    a {
      color: #58a6ff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: #1f6feb;
      }

      &.remover {
        color: #f85149;

        &:hover {
          color: #da3633;
        }
      }
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: #30363d;
    margin: 20px 0;
  }
`;

export const OwnerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #c9d1d9;
  margin-right: 20px; 
`;
