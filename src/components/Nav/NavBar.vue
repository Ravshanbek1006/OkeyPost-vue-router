<template>
    <div class="container-fluid">
     <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="@/assets/imgs/Лого.png" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Как покупать</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Распродажи</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Цены</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Помощь</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Бонусы</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Блог</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Магазины</a>
            </li>

          </ul>
          <form class="d-flex justify-content-center align-items-center">
            <a class="nav-link"> <i class="bi bi-person"> </i> Вход</a>
           <button-btn class="ms-3">Связаться с нами</button-btn>
          </form>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
import ButtonBtn from "@/components/ButtonBtn.vue"
export default {
    components:{
        ButtonBtn,
    }
}
</script>

<style>
    
</style>