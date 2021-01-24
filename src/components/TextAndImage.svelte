<script>
  export let src;
  export let alt;
</script>

<style>

  .TextAndImage {
    align-items: center;
    display: flex;
    flex: 1;
    margin: 0 0 4rem 0;
    justify-content: center;
  }

  .Text {
    width: 50%;
    padding: 4rem 4rem 4rem 0;
  }

  .Image {
    width: 50%;
    padding: 4rem 0 4rem 4rem;
  }
    
  img {
    display: block;
    width: 100%;
  }

  @media(max-width: 1024px) {
    .TextAndImage {
      flex-direction: column-reverse;
    }
    .Text,
    .Image {
      flex-shrink: 0;
      width: 100%;
    }
    .Text {
      position: relative;
      top: -50%;
      padding: 0 4rem 4rem 4rem;
    }
    .Image img {
      max-width: 480px;
      margin: 0 auto;
    }
    .Image {
      margin-bottom: 4rem;
    }
  }
  @media(max-width: 640px) {
    .Image {
      padding: 3rem;
      margin-bottom: 2rem;
    }
    .Text {
      text-align: center;
      padding: 0 2rem 4rem 2rem;
    }
  }

</style>

<div class="TextAndImage">
  <div class="Text">
    <slot></slot>
  </div>
  <div class="Image">
    <img {alt} {src}>
  </div>
</div>