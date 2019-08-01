import React from "react";

import { Container, NewPlayList, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a>Navegar</a>
        </li>
        <li>
          <a>Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a>Seu daily Mix</a>
        </li>
        <li>
          <a>Todos recentemente</a>
        </li>
        <li>
          <a>Álbums</a>
        </li>
        <li>
          <a>Artistas</a>
        </li>
        <li>
          <a>Estações</a>
        </li>
        <li>
          <a>Arquivos locais</a>
        </li>
        <li>
          <a>Vídeos</a>
        </li>
        <li>
          <a>Podcats</a>
        </li>
      </Nav>

      <Nav main>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a>Melhores do rock </a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlayList>
  </Container>
);

export default Sidebar;
