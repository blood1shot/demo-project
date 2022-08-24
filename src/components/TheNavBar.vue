<template lang="pug">
.navbar
  form
    input.search-field(placeholder="Search...", type="text")
    button(type="submit")
      i.fa-solid.fa-magnifying-glass
  .navbar-profile
    i.fa-solid.fa-bell
    i.fa-solid.fa-comment-dots
    .profile-info
      img(src="@/assets/online-user.png")
      h6 Username T.
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.navbar {
  padding-top: 25px;
  width: 80%;
  float: right;
}

.navbar-profile {
  display: flex;
  align-items: center;
}

form {
  position: relative;
  &:hover .search-field {
    border-color: #dc3545;
  }
}

.search-field {
  height: 50px;
  border: 2px solid #434b51;
  border-radius: 50px;
  background-color: transparent;
  padding: 10px 10px 10px 45px;
  // outline-color: #dc3545;
  color: #fff;
  transition: all ease-in-out 200ms;
}

// button:hover .search-field {
//   border-color: #dc3545;
// }

button {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #434b51;
  font-size: 20px;
}

.navbar-profile svg {
  margin-right: 35px;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  transition: all ease-in-out 200ms;
  &:hover {
    color: #dc3545;
  }
}

.profile-info {
  margin-right: 40px;
  align-items: center;
  color: #fff;
  display: flex;
  & h6 {
    margin-left: 10px;
  }
}

.profile-info img {
  border-radius: 50px;
  transition: all ease-in-out 200ms;
  cursor: pointer;
  border: 3px solid #dc3545;
}
</style>
