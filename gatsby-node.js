const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const omOssPost = path.resolve('./src/templates/blog-post.js')
  // Define a template for larare post
  const lararePostPath = path.resolve('./src/templates/larare-post.js')

  const nyheterPostPath = path.resolve('./src/templates/nyheter-post.js')

  const result = await graphql(
    `
      {
        allContentfulOmOss {
          nodes {
            title
            slug
          }
        }
        allContentfulLarare {
          nodes {
            title
            slug
          }
        }
        allContentfulNyheter {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulOmOss.nodes

  const lararePosts = result.data.allContentfulLarare.nodes
  
  const nyheterPosts = result.data.allContentfulNyheter.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/omoss/${post.slug}/`,
        component: omOssPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  // Create posts for larare pages
  // But only if there's at least one larare post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (lararePosts.length > 0) {
    lararePosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : lararePosts[index - 1].slug
      const nextPostSlug =
        index === lararePosts.length - 1 ? null : lararePosts[index + 1].slug

      createPage({
        path: `/varalarare/${post.slug}/`,
        component: lararePostPath,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }

  if (nyheterPosts.length > 0) {
    nyheterPosts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : nyheterPosts[index - 1].slug
      const nextPostSlug =
        index === nyheterPosts.length - 1 ? null : nyheterPosts[index + 1].slug

      createPage({
        path: `/nyheter/${post.slug}/`,
        component: nyheterPostPath,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
