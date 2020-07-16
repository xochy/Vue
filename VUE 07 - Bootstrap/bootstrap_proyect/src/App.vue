<template>
<div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">KiGool</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/" exact>Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/grid">Grid</b-nav-item>
                <b-nav-item to="/validaciones">Validaciones</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
    <router-view />
</div>
</template>
