import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
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
        margin-left: 20px;

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

const OwnerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #c9d1d9;
  margin-right: 20px;
`;

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = (e) => {
    e.stopPropagation();
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <OwnerAvatar src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} />
      <div className="repo-details">
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <div className="links">
          <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
          <a href="#" rel="noreferrer" className="remover" onClick={handleRemove}>Remover</a>
        </div>
      </div>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
