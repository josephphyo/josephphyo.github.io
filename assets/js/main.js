
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://medium.com/@phyominhtun/infrastructure-as-code-with-aws-codepipeline-f413c78a7503',
            title: 'Infrastructure as Code with AWS CodePipeline',
        },
        {
            url: 'https://medium.com/@phyominhtun/amazon-eks-cluster-provisioning-17194be3c466',
            title: 'Amazon EKS Cluster Provisioning',
        },
        {
            url: 'https://medium.com/@phyominhtun/using-aws-systems-manager-to-login-ec2-instance-without-ssh-a1044b0aef18',
            title: 'Using AWS Systems Manager to login EC2 instance without SSH',
        },
        {
            url: 'https://medium.com/@phyominhtun/managing-private-ec2-instance-with-bastion-host-78e92a421f68',
            title: 'Managing private EC2 instance with Bastion Host',
        },
        // {
        //   url: 'https://www.nagekar.com/2018/07/eli5-how-https-works.html',
        //    title: 'ELI5 - How HTTPS Works',
        //},
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://medium.com/@phyominhtun');">

        <div class="blog-link">

            <h3><a href="https://medium.com/@phyominhtun">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}