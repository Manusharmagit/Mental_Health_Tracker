// phq9.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('phqForm');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let totalScore = 0;

    for (let i = 1; i <= 9; i++) {
      const options = document.getElementsByName('q' + i);
      let answered = false;

      for (const option of options) {
        if (option.checked) {
          totalScore += parseInt(option.value);
          answered = true;
          break;
        }
      }

      if (!answered) {
        alert('Please answer question ' + i);
        return;
      }
    }

    // Interpretation of score
    let interpretation = '';
    if (totalScore <= 4) {
      interpretation = 'None-minimal Depression';
    } else if (totalScore <= 9) {
      interpretation = 'Mild Depression';
    } else if (totalScore <= 14) {
      interpretation = 'Moderate Depression';
    } else if (totalScore <= 19) {
      interpretation = 'Moderately Severe Depression';
    } else {
      interpretation = 'Severe Depression';
    }

    // Check for question 9 (suicidal thoughts)
    const q9 = document.querySelector('input[name="q9"]:checked');
    let suicideWarning = '';
    if (q9 && parseInt(q9.value) >= 1) {
      suicideWarning =
        '\n\n⚠️ You may be experiencing thoughts of self-harm. Please speak to a mental health professional immediately.';
    }

    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      resultDiv.textContent = `Your PHQ-9 score is ${totalScore} — ${interpretation}${suicideWarning}`;
    }
  });
});
