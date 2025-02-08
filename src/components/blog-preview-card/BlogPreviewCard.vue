<template>
  <div
    class="w-[327px] flex flex-col justify-start items-start gap-y-6 p-6 rounded-[1.25rem] bg-white inside-border drop-shadow-[0.5rem_0.5rem_0_rgba(0,0,0,1)] overflow-hidden md:w-[384px]"
  >
    <!-- BLog image -->
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="w-full h-[200px] rounded-[0.625rem] bg-[--color-yellow]"
    />

    <!-- Blog content -->
    <div class="w-full flex flex-col justify-start items-start gap-3">
      <span class="flex justify-center items-center gap-x-2 px-3 py-1 rounded bg-[--color-yellow] text-[12px] leading-[1.5] font-extrabold text-[--color-gray-950] md:text-sm md:leading-[1.5]">{{
        category
      }}</span>
      <p class="text-[12px] leading-[1.5] text-[--color-gray-950] md:text-sm md:leading-[1.5]">Published {{ publishedDate }}</p>
      <h2 class="w-full text-xl leading-[1.5] font-extrabold text-[--color-gray-950] md:text-2xl md:leading-[1.5] hover:text-[--color-yellow] hover:cursor-pointer">{{ title }}</h2>
      <p class="w-full text-sm leading-[1.5] text-[--color-gray-500] md:text-base md:leading--[1.5]">{{ description }}</p>
    </div>

    <!-- Author -->
    <div class="flex justify-start items-center gap-x-3">
      <img
        :src="authorImage"
        :alt="authorName"
        class="w-8 h-8 rounded-full"
      />
      <p class="text-sm leading-[1.5] font-extrabold text-[--color-gray-950]">{{ authorName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    imageAlt: String,
    category: String,
    publishedDate: String,
    title: String,
    description: String,
    authorImage: String,
    authorName: String,
  },
};
</script>

<style scoped>
/* Add inside border style */
.inside-border {
  box-shadow:
    inset 0 0 0 1px black,
    0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
</style>
