document.addEventListener('DOMContentLoaded', function () {
    var projects = [
        {
            title: "Diabetes Diagnostic Analysis: Predictive Modeling with Decision Trees",
            description: "Utilized a dataset from the National Institute of Diabetes to predict diabetes outcomes...",
            image: "images/ds_pic_web4.jpg",
            link: "link_to_project"
        },
        {
            title: "Health and Sociodemographic Correlation Analysis: A Regularized Linear Regression Approach",
            description: "Conducted a detailed study of U.S. county-level sociodemographic and health data...",
            image: "images/ds_pic_web2.jpg",
            link: "link_to_project"
        },
        {
            title: "Google Play Review Sentiment Classifier: A Naive Bayes Approach",
            description: "Developed a Naive Bayes classifier for sentiment analysis on Google Play store reviews...",
            image: "images/ds_pic_web3.jpg",
            link: "link_to_project"
        }
    ];

    var projectList = document.getElementById('project-list');

    projects.forEach(function (project) {
        var projectItem = document.createElement('div');
        projectItem.className = 'project';

        var projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;

        var projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        var projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        var projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = 'More Details';

        projectItem.appendChild(projectImage);
        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectDescription);
        projectItem.appendChild(projectLink);

        projectList.appendChild(projectItem);
    });
});



