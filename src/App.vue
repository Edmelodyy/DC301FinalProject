<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="app-shell">
    <aside class="sidebar">
      <RouterLink to="/" class="brand"><span class="brand-mark">Z</span><span>ZooCare<small>Zoo Management System</small></span></RouterLink>
      <p class="nav-label">WORKSPACE</p>
      <nav>
        <RouterLink to="/" class="nav-link" exact-active-class="active">Dashboard</RouterLink>
        <RouterLink to="/animals" class="nav-link" active-class="active">Animals</RouterLink>
        <RouterLink to="/staff" class="nav-link" active-class="active">Staff</RouterLink>
        <RouterLink to="/care-records" class="nav-link" active-class="active">Care Records</RouterLink>
      </nav>
      <div class="sidebar-bottom"><div class="status-dot"></div><span>Local demo system</span></div>
    </aside>
    <main class="main-area">
      <header class="topbar"><div><span class="eyebrow">ZOO OPERATIONS</span><h2>ZooCare Management</h2></div><div class="user-chip"><span class="avatar">A</span><span>Administrator</span></div></header>
      <div class="page-wrap"><RouterView /></div>
      <footer>ZooCare Zoo Management System · Vue.js Student Project</footer>
    </main>
  </div>
</template>
