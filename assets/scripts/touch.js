$(() => {
  $('.dropdown').on('touchstart', e => {
    $(e.currentTarget).toggleClass('hover')
  })
})
