const texts = ['powered by sanelka ❤', 'i like bor.ci', 'skidding everything'];
let currentTextIndex = 0;
let textElement = document.getElementById('powered-text');
let index = 0;
let reverse = false;
let speed = 150; // Slow typing speed
let pauseAfterFullText = 2000; // 2 seconds pause after full text is displayed

function typeEffect() {
    let currentText = texts[currentTextIndex];

    if (!reverse) {
        index++;
    } else {
        index--;
    }

    textElement.innerHTML = currentText.slice(0, index);

    if (index === currentText.length && !reverse) {
        reverse = true;
        setTimeout(typeEffect, pauseAfterFullText); // Wait for 2 seconds before starting to delete the text
        return;
    }

    if (index === 0 && reverse) {
        reverse = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


<script>
    var audio = document.getElementById('audio');
    audio.oncanplaythrough = function() {
        console.log('Audio is ready to play');
        audio.play();
    };
    audio.onerror = function() {
        console.log('Error in loading audio');
    };
</script>