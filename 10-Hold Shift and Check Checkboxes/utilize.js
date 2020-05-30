const checkboxes = document.querySelectorAll('input[type=checkbox]')
let lastChecked

function checkHandle (e) {
  let inBetween = false
  //   lastChecked = this
  //check if shiftkey is pressed
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        //console.log('yes')
      }

      //change the checkedStatus of checkbox
      if (inBetween) {
        //console.log('ha')
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', checkHandle)
})
