    const music = document.getElementById("bg-music");
    let musicStarted = false;
    document.addEventListener("click", function (e) {
      if (!musicStarted && e.target.tagName === "BUTTON") {
        music.play().catch(() => {});
        musicStarted = true;
      }
    });