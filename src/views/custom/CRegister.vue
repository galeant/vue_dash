<template>
  <div class="d-flex align-items-center min-vh-100">
    <Loading :active.sync="loading" :is-full-page="true"></Loading>
    <CContainer class="justify-content-center">
        <CCard class="mx-4 mb-0">
            <CCardHeader>
                <h1>Register</h1>
            </CCardHeader>
            <CCardBody class="p-4">
                <CForm @submit.prevent="formSubmit">
                <CRow>
                    <CCol md=6>
                        <CInput
                            label="Name"
                            v-model="payload.name"
                        />
                        <CInput
                            label="Username"
                            v-model="payload.username"
                        />
                        <CInput
                            label="Email"
                            v-model="payload.email"
                        />
                        <CInput
                            label="Phone"
                            v-model="payload.phone"
                        />
                        <CInput
                            label="Password"
                            type="password"
                            v-model="payload.password"
                        />
                        <CInput
                            label="Repeat Password"
                            type="password"
                            v-model="payload.repeat_password"
                        />
                    </CCol>
                    <CCol md=6>
                        <CInput
                            label="Store Name"
                            v-model="payload.store_name"
                        />
                        <CInput
                            label="Store Phone"
                            v-model="payload.store_phone"
                        />
                        <CInput
                            label="Store Email"
                            v-model="payload.store_email"
                        />
                        <CTextarea
                            label="Store Address"
                            v-model="payload.store_address"
                        />
                    </CCol>
                </CRow>
                <CButton type="submit" color="success" block>Create Account</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    </CContainer>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'CRegister',
  data(){
    return{
        loading:false,
        payload:{
            name:'',
            username:'',
            email:'',
            password:'',
            repeat_password:'',
            phone:'',
            store_name:'',
            store_email:'',
            store_address:'',
            store_phone:'',
            store_email:'',    
        },
        
    }
  },
  components:{
    Loading
  },
  methods:{
    formSubmit(){
        console.log(this.payload)
        if(this.payload.password !== this.payload.repeat_password){
            return;
        }
        let uri = 'http://enoxus.local/api/v1/admin/register';
        this.axios.post(uri, this.payload).then((response) => {
            // console.log(response)
            // if(response.data.meta.response === true){
                // localStorage.token = response.data.data.result.access_token
                // localStorage.refresh_token = response.data.data.result.refresh_token
                // // this.$store.commit('toAuth',true)
                // this.$router.push({
                //     name: 'Home'
                // });  
            // }
        }).catch(error => {
            console.log(error)
        });
    }
  }
}
</script>

<style scope>

</style>