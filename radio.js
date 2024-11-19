// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const channelcontainer = document.getElementById("channels");

async function getChanel() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  console.log(data);

  data.channels.forEach((channel) => {
    const channelEl = document.createElement("div");
    const channelEl2 = document.createElement("div");
    const imgEl = document.createElement("img");
    const name = document.createElement("h2");
    const chanAudio = document.createElement("audio");

    channelEl.setAttribute("class", "channel");
    channelEl2.setAttribute("class", "channel2");
    imgEl.setAttribute("class", "image");

    const source = document.createElement("source");

    source.src = channel.liveaudio.url;
    chanAudio.controls = true;
    source.type = "audio/mpeg";
    chanAudio.appendChild(source);

    imgEl.src = channel.image;

    name.textContent = channel.name;

    channelEl2.style.backgroundColor = `#${channel.color}`;

    channelEl2.appendChild(name);
    channelEl2.appendChild(chanAudio);

    channelEl.appendChild(imgEl);
    channelEl.appendChild(channelEl2);

    channelcontainer.appendChild(channelEl);
  });
}
getChanel();
