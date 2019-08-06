import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepearIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}

    <Sound url="" />

    <Current>
      <img
        src="https://f4.bcbits.com/img/a2939269798_10.jpg"
        alt="Album de musica"
      />

      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="BackwardIcon" />
        </button>
        <button>
          <img src={PlayIcon} alt="PlayIcon" />
        </button>
        <button>
          <img src={ForwardIcon} alt="ForwardIcon" />
        </button>
        <button>
          <img src={RepearIcon} alt="RepearIcon" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

/*Player.PropTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired
}*/

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
