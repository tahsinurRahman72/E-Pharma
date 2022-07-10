<template>
  <div id="Pagination">
    <section class="py-7">
      <div class="container">
        <div class="row justify-space-between py-2">
          <div class="col-lg-4 mx-auto">
            <ul class="pagination pagination-primary m-4">
              <li class="page-item">
                <a class="page-link" href="javascript:;" aria-label="Previous">
                  <span aria-hidden="true">
                    <i class="material-icons" aria-hidden="true">&lt;</i></span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:;">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:;">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:;">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:;">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:;">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:;" aria-label="Next">
                  <span aria-hidden="true">
                    <i class="material-icons" aria-hidden="true">&gt;</i></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default{
  name: 'pagination'
}
</script>
<style scoped>
ul{
  justify-content: center;
}
</style>
