import { DiscordSDK } from "@discord/embedded-app-sdk";

import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import { Background } from "./scenes/Background";

// Instantiate the SDK
// Uncomment this once your work is done on browser, it will ONLY work on Discord Activities
/* const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
setupDiscordSdk()
  .then(() => {
    console.log("Discord SDK is ready");
  })
  .catch((error) => {
    console.log(error);
  });
async function setupDiscordSdk() {
  await discordSdk.ready();
} */

(async () => {
  const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: "game-container",
    backgroundColor: "#028af8",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Boot, Preloader, MainMenu, Game, Background],
  };

  new Phaser.Game(config);
})();
