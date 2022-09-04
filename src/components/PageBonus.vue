<template>
    <div>
       <gradient-box>
         <div class="container-fluid economy">
            <div class="container p-5">
                <span><a href="index.html">Главная </a> / <a href="#"> Бонусы и партнёрская программа</a></span>
                <h3 style="color: #fff;" class="mt-4">Бонусы и партнёрская программа</h3>
                <h5 style="font-weight:700; font-size: 24px;">Платим $3 с каждой отправленной посылки </h5>
                <button-btn class="mt-4">Начать зарабатывать</button-btn>
            </div>
        </div>
       </gradient-box>

         <section class=" container bonus-box my-5 py-5">
        <h3 class="mb-5">Зарабатывать с нами — проще простого:</h3>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 bonus-item">
                <img src="@/assets/imgs/Groupbonus-1.png" alt="Groupbonus-1.png">
                <h6>Дарим скидку 10% вашим друзьям и подписчикам</h6>
                <p>На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему
                    реферальному коду или ссылке.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 bonus-item">
                <img src="@/assets/imgs/Groupbonus (2).png" alt="Groupbonus (2).png">
                <h6>Платим по £3 за отправленную посылку </h6>
                <p>Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете
                    оплачивать этими деньгами ваши посылки или выводить их себе на счет.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 bonus-item">
                <img src="@/assets/imgs/Groupbonus (3).png" alt="Groupbonus (3).png">
                <h6>Промо на любой вкус</h6>
                <p>Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры
                    или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 bonus-item">
                <img src="@/assets/imgs/Groupbonus (4).png" alt="Groupbonus (4).png">
                <h6>Выплаты по запросу</h6>
                <p>Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы
                    можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 bonus-item">
                <img src="@/assets/imgs/Group group(5).png" alt="Group group(5).png">
                <h6>Начисляем кэшбэк £1 на 1 посылку</h6>
                <p>За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов </p>
            </div>
        </div>
    </section>

    <section class="container-fluid px-3 my-5 py-5">
        <div class="container-fluid box-1 py-5">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                        <img width="100%" style="object-fit:cover ;" src="@/assets/imgs/bonus-10.png" alt="icon">
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center  flex-column p-5 ">
                        <h4 style="font-size: 48px; font-weight: 800;">
                            Готовы начать зарабатывать вместе с нами?   
                        </h4>
                        <p style="margin-top:20px; text-align: start;">Присоединяйтесь к партнерской программе
                            Okeypost.com уже сегодня!</p>
                        <div class="m-box"><button class="btn-okey ">Попробовать </button></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <footer-section></footer-section>






    </div>
</template>

<script>
import GradientBox from "@/components/cards/GradientBox.vue"
import ButtonBtn from "@/components/ButtonBtn.vue"
import FooterSection from "@/components/cards/FooterSection.vue"
export default {
    name: 'OkeypostvuePageBonus',
    components:{
        GradientBox,
        ButtonBtn,
        FooterSection,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>