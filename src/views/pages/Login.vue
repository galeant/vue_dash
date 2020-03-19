<template>
  <CContainer class="d-flex content-center min-vh-100">
    <Loading :active.sync="loading" 
        :is-full-page="true"></Loading>
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
                <CForm @submit.prevent="loginProced">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Username"
                    autocomplete="username email"
                    v-model="username"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton type="submit" color="primary" class="px-4">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-md-none">Register now!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
            </CCardBody>
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-sm-down-none"
            body-wrapper
          >
            <h2>Sign up</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <router-link :to="{name: 'Register'}">
              <CButton
                color="primary"
                class="active mt-3"
              >
                Register Now!
              </CButton>
            </router-link>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data(){
    return {
      loading:false,
      username:'',
      password:''
    }
  },
  name: 'Login',
  components: {
      Loading
  },
  computed:{
    encryptPassword: function(){
      return btoa(this.password);
    }
  },
  methods:{
    loginProced(){
      this.loading = true;
      let uri = 'http://enoxus.local/api/v1/admin/login';
      this.axios.post(uri, {
        username:this.username,
        password:this.encryptPassword,
        client_id:4
      }).then((response) => {
          if(response.data.meta.response === true){
            localStorage.token = response.data.data.result.access_token
            localStorage.refresh_token = response.data.data.result.refresh_token
            // this.$store.commit('toAuth',true)
            this.$router.push({
                name: 'Home'
            });  
          }
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>
