import React from "react";
import { AddChannelList } from "../assets";

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="Team-channel-list">
        <p className="team-channel-list__message">
          Erro de conexão, por favor espere um momento e tente novamente.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    <div className="Team-channel-list">
      <p className="team-channel-list__message loading">
        {type === "team" ? "Channels" : "Messages"} Carregando...
      </p>
    </div>;
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        {/* Button - add channel */}
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
