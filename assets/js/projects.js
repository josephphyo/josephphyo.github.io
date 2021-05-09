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
            technologies: ['Amazon Web Services', 'Startup'],
            description: "Working together with AWS to support early-stage tech startups in Myanmar.",
            categories: ['featured', 'aws', 'contributions' ]
        },
        {
            image: 'assets/images/gameday.jpg',
            link: 'https://aws.amazon.com/gameday/',
            title: 'AWS Ninja Game Day (Champion)',
            //demo: 'https://aws.amazon.com/gameday/',
            technologies: ['Amazon Web Services', 'Migrations'],
            description: "GameDay is a collaborative learning exercise that tests skills ...",
            categories: ['featured', 'aws', 'contributions', 'awards']
        },
        {
            image: 'assets/images/github.jpg',
            link: 'https://github.com/josephphyo',
            title: 'Visit my github',
            //demo: 'https://aws.amazon.com/gameday/',
            //technologies: ['Amazon Web Services', 'Migrations'],
            description: "https://github.com/josephphyo",
            categories: ['aws','contributions']
        },
        {
            image: 'assets/images/talk-1.jpg',
            link: 'https://www.youtube.com/watch?v=MeHSAsvtqVI&t=453s',
            title: 'AWS Cloud Business Essentials',
            technologies: ['Amazon Web Services', 'Architecture'],
            description: "Event - Phandeeyar Remote Learning Festival.",
            categories: ['featured', 'aws', 'talks']
        },
        {
            image: 'assets/images/talk-2.jpg',
            link: 'https://www.youtube.com/watch?v=W8VX2T_fzJ8',
            title: 'Amazon EKS - Kubernetes on AWS',
            //demo: 'https://www.youtube.com/watch?v=W8VX2T_fzJ8',
            technologies: ['Amazon Web Services', 'kubernetes'],
            description: "Event - AWS User Group Myanmar - Online Meetup.",
            categories: ['featured', 'aws', 'talks']
        },
        {
            image: 'assets/images/workshop-1.jpg',
            link: 'https://github.com/josephphyo/aws-infra-pipeline-demo',
            title: 'Provision AWS Resources with Terraform',
            demo: 'https://github.com/josephphyo/aws-infra-pipeline-demo',
            technologies: ['Amazon Web Services', 'IaC'],
            description: "Provision AWS Resources with Terraform.",
            categories: ['aws', 'iac', 'workshop']
        },
        {
            image: 'assets/images/workshop-3.jpg',
            link: 'https://github.com/josephphyo/cloudformation-codepipeline',
            title: 'Provision AWS Resources with AWS CloudFormation',
            demo: 'https://github.com/josephphyo/cloudformation-codepipeline',
            technologies: ['Amazon Web Services', 'IaC'],
            description: "Provision AWS Resources with AWS CloudFormation.",
            categories: ['aws', 'iac', 'workshop']
        },
        {
            image: 'assets/images/workshop-2.jpg',
            link: 'https://github.com/josephphyo/aws-packer-ami-image-pipeline',
            title: 'AWS AMI Pipeline with Packer',
            demo: 'https://github.com/josephphyo/aws-packer-ami-image-pipeline',
            technologies: ['Amazon Web Services'],
            description: "Create Automated AMI Image Pipeline with HashiCorp Packer and AWS CodeBuild.",
            categories: ['aws', 'workshop']
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