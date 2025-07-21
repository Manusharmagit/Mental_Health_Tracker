document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('gadForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let totalScore = 0;
    for (let i = 1; i <= 7; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        alert(`Please answer question ${i}`);
        return;
      }
      totalScore += parseInt(selected.value);
    }

    let interpretation = '';
    if (totalScore <= 4) {
      interpretation = 'Minimal Anxiety';
    } else if (totalScore <= 9) {
      interpretation = 'Mild Anxiety';
    } else if (totalScore <= 14) {
      interpretation = 'Moderate Anxiety';
    } else {
      interpretation = 'Severe Anxiety';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your GAD-7 score is ${totalScore} — ${interpretation}`;
  });
});
