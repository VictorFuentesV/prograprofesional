import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProfileEmail = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Cuenta = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <ProfileWrapper>
      <ProfilePicture src={user.picture} alt={user.name} />
      <ProfileName>Nombre: {user.name}</ProfileName>
      <ProfileEmail>Correo: {user.email}</ProfileEmail>
      <ProfileDetails>
        <DetailRow>
          <DetailLabel>Nombre de usuario:</DetailLabel>
          {user.nickname}
        </DetailRow>
        
        {/* Agrega más campos según tus necesidades */}
        <DetailRow>
          <DetailLabel>Categoria:</DetailLabel>
            Holas
        </DetailRow>
        <DetailRow>
          <DetailLabel>Carrera</DetailLabel>
            Holas
        </DetailRow>
        <DetailRow>
          <DetailLabel>Última actualización:</DetailLabel>
          {new Date(user.updated_at).toLocaleString()}
        </DetailRow>
      </ProfileDetails>
    </ProfileWrapper>
  ) : null;
};

export default Cuenta;