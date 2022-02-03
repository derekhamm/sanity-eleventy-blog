export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fb431919625f71ccadc579',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-es78cru9',
                  apiId: '8f29c912-4140-461d-a435-1ee17e8c06d7'
                },
                {
                  buildHookId: '61fb43195e642d664c7f4b42',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-n5oazahq',
                  apiId: '2c2bf72d-d827-41e6-a029-fd5d43884b66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/derekhamm/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-n5oazahq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
