$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/scout.jpg',
            link: 'https://aws.amazon.com/startups/',
            title: 'AWS Startup Scout',
            //demo: 'https://aws.amazon.com/startups/',
            technologies: ['Amazon Web Services'],
            description: "Working together with AWS to support early-stage tech startups in Myanmar.",
            categories: ['featured', 'aws', 'contributions' ]
        },
        {
            image: 'assets/images/gameday.jpg',
            link: 'https://aws.amazon.com/gameday/',
            title: ' AWS Ninja Game Day (Champion)',
            //demo: 'https://aws.amazon.com/gameday/',
            technologies: ['Amazon Web Services'],
            description: "GameDay is a collaborative learning exercise that tests skills in implementing AWS solutions to solve real-world problems in a gamified, risk-free environment.",
            categories: ['featured', 'aws', 'awards']
        },
        {
            image: 'assets/images/talk-1.jpg',
            link: 'https://www.youtube.com/watch?v=MeHSAsvtqVI&t=453s',
            title: 'AWS Cloud Business Essentials',
            technologies: ['Amazon Web Services'],
            description: "Event - Phandeeyar Remote Learning Festival.",
            categories: ['featured', 'talks']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/abhn/mpw',
            title: 'Master Password',
            demo: 'https://www.nagekar.com/mpw',
            technologies: ['Semantic UI', 'CSS3'],
            description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
            categories: ['featured', 'security']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}