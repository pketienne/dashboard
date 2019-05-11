<template>
  <header>
    <img
      id="iu-icon"
      src="../assets/trident-tab.gif"
    />
    <div class="institution flex-container">
      <div class="title">
        <span class="name">Indiana University</span>
      </div>
      <div class="utility">
        <b-button
          v-if="$store.state.auth.uid === ''"
          class="btn-success"
          to="/signin"
        >
          <span>Log in</span>
        </b-button>
        <!--
        <b-button
          v-if="$store.state.auth.uid !== ''"
          class="btn-warning"
          @click="logout"
        >
          <span>Log out</span>
        </b-button>
        -->
      </div>
    </div>
    <div class="project flex-container">
      <div class="title">
        <span class="name">Admin Dashboard</span>
      </div>
      <div
        v-if="$store.state.auth.uid !== ''"
        class="utility"
      >
        <span>Welcome</span>
				&nbsp;
        <span class="bold">{{ $store.state.auth.uid }}</span>
				&nbsp;
        <span>(role)</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
	font-family: "BentonSansCondBold", "Arial Narrow", Arial, Helvetica, sans-serif;
}
#iu-icon {
	position: absolute;
	top: 6px;
	left: 35px;
}
.flex-container {
	display: flex;
}
.title {
	flex-grow: 2;
}
.blatherskite {
  background: #fff;
  color: #000;
  padding: 12px 15px 0 15px;
  border-radius: 20px 20px 0 0;
}
.utility {
	flex-grow: 1;
	text-align: right;
	padding-right: 25px;
}
.institution {
	color: #fff;
	border-top: 6px solid #900;
	border-bottom: 6px solid #900;
	background: #7a1705;
	padding-left: 110px;
	display: flex;
	align-items: flex-end;
}
.institution div.title span.name {
	font-size: 18px;
	text-transform: uppercase;
}
.project {
	color: #fff;
	background: grey;
	padding-left: 110px;
}
.project div.title {
	font-size: 26px;
	font-weight: bold;
}
.project div.utility {
	display: flex;
	align-items: center;
    justify-content: flex-end;
}
.project div.utility span {
}
.bold { font-weight: bold; }
</style>
