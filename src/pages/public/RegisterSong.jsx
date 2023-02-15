import React from "react";
import TitlePage from "../../components/TitlePage";
import Page from "../../components/Page";

export default function RegisterSong() {
  return (
    <Page config={{ pt: 5, pl: 5, pr: 5 }}>
      <TitlePage title="Registrar cancion" />
    </Page>
  );
}
