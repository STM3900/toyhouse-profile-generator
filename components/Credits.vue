<template>
  <aside>
    <p>Website made by <a href="https://theomigeat.com/" target="_blank" class="theo">Théo</a> <a href="https://twitter.com/STM3900" target="_blank" class="icon-twitter"><i class="fab fa-twitter"></i></a></p>
    <p>Pretty drawings made by <a href="https://toyhou.se/Ram_drawing">Ram</a> <a href="https://twitter.com/RAM_drawings" class="icon-twitter"><i class="fab fa-twitter"></i></a></p>
  </aside>
</template>

<script setup>

</script>

<style scoped>
aside {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: white;
  border: solid 1px rgba(0, 0, 0, .125);
  ;
  transition: 0.3s;
  padding: 10px 15px;
  border-radius: 20px;
  z-index: 9999999;
}

aside p {
  margin: 0;
  font-size: 12px;
}

aside a {
  color: #0096c7;
  transition: 0.3s;
}

aside a:active {
  transform: scale(0.9);
}

aside a:hover {
  color: #076888;
}

aside .theo:hover {
  animation: fadeTheo 1.5s linear infinite;
}

.icon-twitter {
  transition: 0.3s;
  display: inline-block;
  margin-left: 2px;
  color: #8ecae6;
}

.icon-twitter:hover {
  transform: rotate(10deg);
}

.icon-twitter:active {
  transform: rotate(10deg) scale(0.9);
}

@keyframes fadeTheo {
  0% {
    color: #0096c7;
  }

  12.5% {
    color: #219ebc;
  }

  25% {
    color: #023047;
  }

  37.5% {
    color: #ffb703;
  }

  50% {
    color: #fb8500;
  }

  62.5% {
    color: #ffb703;
  }

  75% {
    color: #023047;
  }

  87.5% {
    color: #219ebc;
  }

  100% {
    color: #0096c7;
  }
}</style>