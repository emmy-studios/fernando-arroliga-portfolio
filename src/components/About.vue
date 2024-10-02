<script setup>
</script>

<template>

    <div class="container">
        <h1>About Us</h1>
    </div>

    <v-container>

        <v-row justify="center">

            <v-card 
                title="This is the title"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, consequatur.</">
            </v-card>

        </v-row>

    </v-container>

    <v-container>
        <v-row justify="center">
            <v-btn>
                Button
            </v-btn>
        </v-row>
    </v-container>

</template>

<style scoped>

    .container {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        margin-bottom: 20px;
    }

</style>