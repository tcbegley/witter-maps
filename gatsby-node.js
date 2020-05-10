exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: '/',
    toPath: '/map',
    isPermanent: true,
  })
}
