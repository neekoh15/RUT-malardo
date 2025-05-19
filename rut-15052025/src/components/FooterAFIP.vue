<template>
    <section class="footer">
        <div class="footer__logo_title">
            <img src="/icons/icon__logo_header.svg" alt="">
            <div class="footer__title">
                <h3>RUT - REGISTRO ÚNICO TRIBUTARIO</h3>
                <p>VERSIÓN consectetur adipiscing elit, sed do eiusmod</p>
            </div>
        </div>
        <div class="footer__options">
            <div class="option">Lorem ipsum dolor</div>
            <div class="option">Lorem ipsum dolor</div>
        </div>
    </section>
</template>


<style scoped>

.footer {
    margin-top: 4rem;
    margin-bottom: 1rem;
    max-width: 1280px;
    margin-inline: auto;


    display: flex;
    justify-content: space-between;
}

.footer__logo_title {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.footer_title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer__options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
}



@media (max-width:1280px) {
    .footer {
        margin-inline: 2rem;
    }
}

</style>