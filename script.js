const consoleDiv = document.getElementById('console');
    const inputField = document.getElementById('inputField');
    const modal = document.getElementById('modal');
    const videoModal = document.getElementById('videoModal');
    const submitBtn = document.getElementById('submitBtn');
    const closeBtn = document.getElementById('closeBtn');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const video = document.getElementById('video');

    const meowSound = new Audio('./meow1.mp3');
    const errorSound = new Audio('./errorSound.mp3');

    const availableCommands = ['Cat', 'Proposal', 'Commands', 'Why?', 'Developer'];

    inputField.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const command = inputField.value.trim();
        if (command === 'Cat') {
          meowSound.play();
          consoleDiv.innerHTML += `<br>---> ${command} (Command 'Cat' was executed)`;
        } else if (command === 'Proposal') {
          modal.style.display = 'block';
          consoleDiv.innerHTML += `<br>---> ${command} (Proposal window opened)`;
        } else if (command === 'Commands') {
          consoleDiv.innerHTML += `<br>---> Available commands: ${availableCommands.join(', ')}`;
        } else if (command === 'Why?') {
          videoModal.style.display = 'block';
          video.play();
          consoleDiv.innerHTML += `<br>---> ${command} (Why video opened)`;
        } else if (command === 'Developer') {
          window.open('https://tonaza.github.io/Naza_Hub/', '_blank');
          consoleDiv.innerHTML += `<br>---> ${command} (Developer link opened)`;
        } else {
          errorSound.play();
          consoleDiv.innerHTML += `<br>---> ${command} (Unknown command)`;
        }

        inputField.value = '';
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
      }
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    closeVideoBtn.addEventListener('click', function() {
      videoModal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    });

    submitBtn.addEventListener('click', function() {
      const proposal = document.getElementById('proposalInput').value;
      if (proposal) {
        consoleDiv.innerHTML += `<br>---> Proposal submitted: ${proposal}`;
        modal.style.display = 'none';
        document.getElementById('proposalInput').value = '';
      } else {
        alert("Please enter a proposal.");
      }
    });