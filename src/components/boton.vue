<template>
  <div class="button">
    <button class="btn" onClick="window.location.reload();">Get color</button>
  </div>
</template>

<script>
export default {
  name: "boton"
};
</script>

<style>
.btn {
  text-transform: uppercase;
  font-size: 0.8em;
  text-decoration: none;
  background: #fff;
  color: #000;
  padding: 10px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  outline: none;
  cursor: pointer;
  width: 10em;
}

.btn:hover {
  background: #434343;
  color: white;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
</style>