<template>
  <!-- <CRow> -->
    <!-- <CCol md="6"> -->
      <CDropdown
        inNav
        class="c-header-nav-items"
        placement="bottom-end"
        add-menu-classes="pt-0"
      >
        <template #toggler>
          <CHeaderNavLink>
            <div class="c-avatar">
              <img
                src="img/avatars/6.jpg"
                class="c-avatar-img "
              />
            </div>
          </CHeaderNavLink>
        </template>
        <CDropdownItem @click="logout">
          <CIcon name="cil-lock-locked" /> Logout
        </CDropdownItem>
      </CDropdown>
    <!-- </CCol> -->
  <!-- </CRow> -->
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      this.$router.push({
          name: 'Login'
      });  
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>