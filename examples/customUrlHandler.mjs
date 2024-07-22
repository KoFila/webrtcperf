export default function ({
  id,
  sessions,
  tabIndex,
  tabsPerSession,
  index,
  pid,
}) {
  //  return `https://example.com/${id}/${sessions}/${tabIndex}/${tabsPerSession}/${index}/${pid}`
  return `https://start.playful.cz/login/54bead2d-c8b8-4992-b784-e91bcab9554d?${id}/${sessions}/${tabIndex}/${tabsPerSession}/${index}/${pid}`
}
