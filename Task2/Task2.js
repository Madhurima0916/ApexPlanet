// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('formMessage');

    if (!email.includes('@') || name.trim() === '') {
        message.textContent = 'Please enter a valid name and email.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Form submitted successfully!';
        message.style.color = 'green';
    }
});

// Dynamic To-Do List
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}
