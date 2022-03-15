<template>
  <div class="login">
    <div id="okta-signin-container" style="width: 900px;"></div>
  </div>
  <div>
    <article> 
      <img src="../assets/revenue-animate.svg" alt="" style="width: 900px; margin-left: 900px; margin-top: -700px;">
    </article>
  </div>
</template>

<script>
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import {oktaSignIn} from '../okta'

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      oktaSignIn.showSignInAndRedirect(
          { el: '#okta-signin-container' }
      )
    })
  },
  unmounted () {
    // Remove the widget from the DOM on path change
    oktaSignIn.remove()
  }
}
</script>
<style scoped>
.login{

}

</style>