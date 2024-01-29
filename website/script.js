document.addEventListener('DOMContentLoaded', function () {
    var projects = ['Project 1', 'Project 2', 'Project 3']; // Add more projects or fetch from an API
    var projectList = document.getElementById('project-list');

    projects.forEach(function (project) {
        var listItem = document.createElement('div');
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });
});

