document.getElementById('reminderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get the reminder text and time
  const reminderText = document.getElementById('reminderText').value;
  const reminderTime = document.getElementById('reminderTime').value;

  if (reminderText && reminderTime) {
    // Create a new reminder element
    const reminder = document.createElement('div');
    reminder.className = 'reminder';
    reminder.innerHTML = `<p>${reminderText} - ${new Date(reminderTime).toLocaleString()}</p>`;

    // Add to the reminder list
    document.getElementById('reminderList').appendChild(reminder);

    // Reset form
    document.getElementById('reminderForm').reset();
  }
});
